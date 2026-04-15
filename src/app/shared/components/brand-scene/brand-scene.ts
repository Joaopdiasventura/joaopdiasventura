import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import type { BufferGeometry, Object3D } from 'three';
import { ViewportPointerService } from '../../services/viewport-pointer/viewport-pointer.service';

type ThreeRuntime = typeof import('./brand-scene.runtime');

interface DisposableMaterial {
  dispose?: () => void;
}

type IdleWindow = Window & {
  cancelIdleCallback?: (handle: number) => void;
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
};

@Component({
  selector: 'app-brand-scene',
  templateUrl: './brand-scene.html',
  styleUrl: './brand-scene.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandScene implements AfterViewInit, OnDestroy {
  public readonly variant = input<'hero' | 'case'>('hero');

  private static readonly HERO_IDLE_TIMEOUT_MS = 1800;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly pointerService = inject(ViewportPointerService);

  private cleanup: (() => void) | null = null;
  private idleHandle: number | null = null;
  private destroyed = false;

  public constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      this.cancelIdleTask();
      this.cleanup?.();
      this.cleanup = null;
    });
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scheduleInitialization();
  }

  public ngOnDestroy(): void {
    this.destroyed = true;
    this.cancelIdleTask();
    this.cleanup?.();
    this.cleanup = null;
  }

  private cancelIdleTask(): void {
    if (this.idleHandle == null) return;

    const idleWindow = window as IdleWindow;

    if (typeof idleWindow.cancelIdleCallback == 'function')
      idleWindow.cancelIdleCallback(this.idleHandle);
    else window.clearTimeout(this.idleHandle);

    this.idleHandle = null;
  }

  private scheduleInitialization(): void {
    const idleWindow = window as IdleWindow;
    const start = (): void => {
      this.idleHandle = null;

      if (this.destroyed) return;

      void this.initializeScene();
    };

    if (typeof idleWindow.requestIdleCallback == 'function') {
      this.idleHandle = idleWindow.requestIdleCallback(start, { timeout: 1200 });
      return;
    }

    this.idleHandle = window.setTimeout(start, 180);
  }

  private async initializeScene(): Promise<void> {
    const viewport = this.host.nativeElement.querySelector<HTMLElement>('.brand-scene__viewport');

    if (!viewport) return;

    const reducedMotion =
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const THREE = await import('./brand-scene.runtime');

    if (this.destroyed) return;

    this.cleanup = this.ngZone.runOutsideAngular(() =>
      this.createScene(THREE, viewport, reducedMotion),
    );
  }

  private createScene(
    THREE: ThreeRuntime,
    viewport: HTMLElement,
    reducedMotion: boolean,
  ): () => void {
    const isHeroVariant = this.variant() == 'hero';
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isHeroVariant ? 34 : 38, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isHeroVariant ? 1.35 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;

    camera.position.set(0, 0.8, isHeroVariant ? 9.6 : 8.8);

    const ambient = new THREE.AmbientLight(0xfff3ea, 1.2);
    const keyLight = new THREE.DirectionalLight(0xff746f, 2.1);
    const fillLight = new THREE.PointLight(0xffffff, 0.9, 40);
    const rimLight = new THREE.PointLight(0x8e101e, 1.8, 40);

    keyLight.position.set(4, 5, 6);
    fillLight.position.set(-6, -2, 10);
    rimLight.position.set(0, -3, -8);

    scene.add(ambient, keyLight, fillLight, rimLight);

    const rig = new THREE.Group();
    const core = new THREE.Group();
    const nodes = new THREE.Group();
    const sparks = new THREE.Points(
      this.createSparkGeometry(THREE),
      new THREE.PointsMaterial({
        color: 0xf8a0a0,
        opacity: 0.38,
        size: isHeroVariant ? 0.06 : 0.05,
        sizeAttenuation: true,
        transparent: true,
      }),
    );

    rig.add(core, nodes, sparks);
    scene.add(rig);

    rig.scale.setScalar(0.72);
    rig.rotation.set(-0.22, -0.55, -0.12);
    rig.position.set(0, -0.2, 0);

    const shardMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f1018,
      emissive: 0x22080a,
      emissiveIntensity: 0.8,
      metalness: 0.62,
      roughness: 0.34,
    });
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x22070a,
      emissive: 0x7f1018,
      emissiveIntensity: 0.22,
      metalness: 0.78,
      roughness: 0.26,
      side: THREE.DoubleSide,
    });

    for (let index = 0; index < 3; index += 1) {
      const radius = 2.15 + index * 0.34;
      const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, 0.18, 6, 1, true),
        ringMaterial.clone(),
      );

      ring.rotation.set(Math.PI / 2, 0, Math.PI / 6);
      ring.position.z = (index - 1) * 0.66;
      core.add(ring);

      const edgeLoop = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.CylinderGeometry(radius, radius, 0.18, 6, 1, true)),
        new THREE.LineBasicMaterial({
          color: index == 1 ? 0xff8181 : 0x8d2230,
          opacity: 0.52,
          transparent: true,
        }),
      );

      edgeLoop.rotation.copy(ring.rotation);
      edgeLoop.position.copy(ring.position);
      core.add(edgeLoop);
    }

    const shardGeometry = new THREE.BoxGeometry(0.26, 0.62, 0.18);
    const nodeGeometry = new THREE.OctahedronGeometry(0.16, 0);

    for (let index = 0; index < 18; index += 1) {
      const angle = (Math.PI * 2 * index) / 18;
      const radius = 2 + (index % 3) * 0.42;
      const shard = new THREE.Mesh(shardGeometry, shardMaterial.clone());
      shard.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        ((index % 4) - 1.5) * 0.34,
      );
      shard.lookAt(0, 0, 0);
      shard.rotateZ(index % 2 == 0 ? 0.18 : -0.22);
      core.add(shard);

      const node = new THREE.Mesh(
        nodeGeometry,
        new THREE.MeshStandardMaterial({
          color: index % 3 == 0 ? 0xff9b9b : 0xf4cbc4,
          emissive: 0x6d0a15,
          emissiveIntensity: 0.7,
          metalness: 0.24,
          roughness: 0.28,
        }),
      );
      node.position.set(
        Math.cos(angle) * (radius + 0.42),
        Math.sin(angle) * (radius + 0.42),
        ((index % 5) - 2) * 0.26,
      );
      nodes.add(node);
    }

    const connectorMaterial = new THREE.LineBasicMaterial({
      color: 0xff6a6a,
      opacity: 0.18,
      transparent: true,
    });

    nodes.children.forEach((child: Object3D, index: number) => {
      const next = nodes.children[(index + 3) % nodes.children.length];
      const geometry = new THREE.BufferGeometry().setFromPoints([
        child.position.clone(),
        next.position.clone(),
      ]);
      core.add(new THREE.Line(geometry, connectorMaterial));
    });

    const pointer = { x: 0, y: 0 };
    const section = this.host.nativeElement.closest<HTMLElement>('[data-scene-section]');
    const defaultProgress = isHeroVariant ? 0.14 : 0.08;
    const supportsFinePointer =
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(pointer: fine)').matches &&
      window.matchMedia('(hover: hover)').matches;

    let frameId = 0;
    let progressFrameId = 0;
    let isDestroyed = false;
    let isVisible = !reducedMotion;
    let renderActive = false;
    let sectionTop = 0;
    let sectionHeight = 0;
    let viewportHeight = window.innerHeight;
    let sceneProgress = defaultProgress;
    let lastFrameTime = 0;
    let idleTimeoutId = 0;
    let pointerCleanup: (() => void) | null = null;
    const targetFrameDuration = isHeroVariant ? 1000 / 30 : 1000 / 36;
    const introStartedAt = performance.now();
    const introDuration = 1400;

    const updateSize = (): void => {
      const width = viewport.clientWidth;
      const height = viewport.clientHeight;

      if (width <= 0 || height <= 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const updateSectionMetrics = (): void => {
      viewportHeight = window.innerHeight;

      if (!section || reducedMotion) {
        sceneProgress = defaultProgress;
        return;
      }

      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      sectionHeight = rect.height;
      updateScrollProgress();
    };

    const updateScrollProgress = (): void => {
      if (!section || reducedMotion || sectionHeight <= 0 || viewportHeight <= 0) {
        sceneProgress = defaultProgress;
        return;
      }

      const total = sectionHeight + viewportHeight;
      const progress = (window.scrollY + viewportHeight - sectionTop) / total;
      sceneProgress = Math.max(0, Math.min(progress, 1));
    };

    const scheduleIdleStop = (): void => {
      if (!isHeroVariant || reducedMotion) return;

      if (idleTimeoutId != 0) window.clearTimeout(idleTimeoutId);

      idleTimeoutId = window.setTimeout(() => {
        idleTimeoutId = 0;
        stopRender();
      }, BrandScene.HERO_IDLE_TIMEOUT_MS);
    };

    const wakeScene = (): void => {
      if (!isVisible || document.hidden) return;

      scheduleIdleStop();
      startRender();
    };

    const renderFrame = (timestamp: number): void => {
      frameId = 0;

      if (isDestroyed || !renderActive) return;

      if (lastFrameTime != 0 && timestamp - lastFrameTime < targetFrameDuration) {
        frameId = window.requestAnimationFrame(renderFrame);
        return;
      }

      lastFrameTime = timestamp;

      const introProgress = reducedMotion
        ? 1
        : Math.min((timestamp - introStartedAt) / introDuration, 1);

      const easedIntro = 1 - Math.pow(1 - introProgress, 3);

      const targetRotationY = pointer.x * 0.3 + sceneProgress * (isHeroVariant ? 1.15 : 0.72);
      const targetRotationX = pointer.y * 0.18 - 0.16 - sceneProgress * 0.16;
      const targetPositionY = 0.24 + sceneProgress * 0.48;
      const targetPositionZ = (isHeroVariant ? 7.8 : 7.2) - sceneProgress * 1.2;

      const introRotationY = -0.55 + (targetRotationY + 0.55) * easedIntro;
      const introRotationX = -0.22 + (targetRotationX + 0.22) * easedIntro;
      const introPositionY = -0.2 + (0 + 0.2) * easedIntro;
      const introCameraY = 0.8 + (targetPositionY - 0.8) * easedIntro;
      const introCameraZ =
        (isHeroVariant ? 9.6 : 8.8) + (targetPositionZ - (isHeroVariant ? 9.6 : 8.8)) * easedIntro;
      const introScale = 0.72 + (1 - 0.72) * easedIntro;

      rig.rotation.y += (introRotationY - rig.rotation.y) * 0.08;
      rig.rotation.x += (introRotationX - rig.rotation.x) * 0.08;
      rig.position.y += (introPositionY - rig.position.y) * 0.08;
      rig.scale.x += (introScale - rig.scale.x) * 0.08;
      rig.scale.y += (introScale - rig.scale.y) * 0.08;
      rig.scale.z += (introScale - rig.scale.z) * 0.08;

      core.rotation.z += reducedMotion ? 0 : 0.0022;
      nodes.rotation.z -= reducedMotion ? 0 : 0.0014;
      sparks.rotation.z += reducedMotion ? 0 : 0.001;

      camera.position.y += (introCameraY - camera.position.y) * 0.08;
      camera.position.z += (introCameraZ - camera.position.z) * 0.08;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };

    const startRender = (): void => {
      if (reducedMotion || renderActive || !isVisible) return;

      renderActive = true;
      lastFrameTime = 0;
      frameId = window.requestAnimationFrame(renderFrame);
    };

    const stopRender = (): void => {
      renderActive = false;

      if (idleTimeoutId != 0) {
        window.clearTimeout(idleTimeoutId);
        idleTimeoutId = 0;
      }

      if (frameId != 0) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const syncProgress = (): void => {
      progressFrameId = 0;
      updateScrollProgress();
      wakeScene();
    };

    const scheduleProgressSync = (): void => {
      if (progressFrameId != 0) return;
      progressFrameId = window.requestAnimationFrame(syncProgress);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
      updateSectionMetrics();
    });

    resizeObserver.observe(viewport);

    if (section) resizeObserver.observe(section);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);

        if (isVisible) {
          wakeScene();
          return;
        }

        stopRender();
      },
      { threshold: 0.05 },
    );

    visibilityObserver.observe(section ?? viewport);

    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        stopRender();
        return;
      }

      wakeScene();
    };

    window.addEventListener('scroll', scheduleProgressSync, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (!reducedMotion && supportsFinePointer) {
      pointerCleanup = this.pointerService.subscribe((state) => {
        if (!state.active) {
          pointer.x = 0;
          pointer.y = 0;
          return;
        }

        pointer.x = state.x;
        pointer.y = state.y;
        wakeScene();
      });
    }

    updateSize();
    updateSectionMetrics();
    viewport.append(renderer.domElement);
    renderer.domElement.classList.add('brand-scene__canvas');

    requestAnimationFrame(() => {
      renderer.domElement.classList.add('brand-scene__canvas--ready');
    });

    if (reducedMotion) renderer.render(scene, camera);
    else wakeScene();

    return () => {
      isDestroyed = true;
      stopRender();

      if (progressFrameId != 0) window.cancelAnimationFrame(progressFrameId);
      if (idleTimeoutId != 0) window.clearTimeout(idleTimeoutId);

      window.removeEventListener('scroll', scheduleProgressSync);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      pointerCleanup?.();
      pointerCleanup = null;
      visibilityObserver.disconnect();
      resizeObserver.disconnect();

      renderer.dispose();
      scene.traverse((child: Object3D) => {
        const mesh = child as {
          geometry?: { dispose?: () => void };
          material?: DisposableMaterial | DisposableMaterial[];
        };

        mesh.geometry?.dispose?.();

        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose?.());
        else mesh.material?.dispose?.();
      });

      viewport.replaceChildren();
    };
  }

  private createSparkGeometry(THREE: ThreeRuntime): BufferGeometry {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];

    for (let index = 0; index < 72; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.4 + Math.random() * 2.8;
      positions.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 3.8,
      );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }
}
