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

type ThreeModule = typeof import('three');
type ThreeObject = import('three').Object3D;

interface DisposableMaterial {
  dispose?: () => void;
}

@Component({
  selector: 'app-brand-scene',
  template: '<div class="brand-scene__viewport" aria-hidden="true"></div>',
  styleUrl: './brand-scene.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandScene implements AfterViewInit, OnDestroy {
  public readonly variant = input<'hero' | 'case'>('hero');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  private cleanup: (() => void) | null = null;

  public constructor() {
    this.destroyRef.onDestroy(() => {
      this.cleanup?.();
      this.cleanup = null;
    });
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    void this.initializeScene();
  }

  public ngOnDestroy(): void {
    this.cleanup?.();
    this.cleanup = null;
  }

  private async initializeScene(): Promise<void> {
    const viewport = this.host.nativeElement.querySelector<HTMLElement>('.brand-scene__viewport');
    if (!viewport) {
      return;
    }

    const reducedMotion =
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const THREE = await import('three');

    this.cleanup = this.ngZone.runOutsideAngular(() =>
      this.createScene(THREE, viewport, reducedMotion),
    );
  }

  private createScene(
    THREE: ThreeModule,
    viewport: HTMLElement,
    reducedMotion: boolean,
  ): () => void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(this.variant() == 'hero' ? 34 : 38, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(viewport.clientWidth, viewport.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    viewport.append(renderer.domElement);

    camera.position.set(0, 0.25, this.variant() == 'hero' ? 7.8 : 7.2);

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
        size: this.variant() == 'hero' ? 0.06 : 0.05,
        sizeAttenuation: true,
        transparent: true,
      }),
    );

    rig.add(core, nodes, sparks);
    scene.add(rig);

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
      shard.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, ((index % 4) - 1.5) * 0.34);
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

    nodes.children.forEach((child: ThreeObject, index: number) => {
      const next = nodes.children[(index + 3) % nodes.children.length];
      const geometry = new THREE.BufferGeometry().setFromPoints([
        child.position.clone(),
        next.position.clone(),
      ]);
      core.add(new THREE.Line(geometry, connectorMaterial));
    });

    const pointer = { x: 0, y: 0 };
    let frameId = 0;
    let isDestroyed = false;

    const updateSize = (): void => {
      const width = viewport.clientWidth;
      const height = viewport.clientHeight;
      if (width <= 0 || height <= 0) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const section = this.host.nativeElement.closest<HTMLElement>('[data-scene-section]');

    const readScrollProgress = (): number => {
      if (reducedMotion || !section) {
        return this.variant() == 'hero' ? 0.14 : 0.08;
      }

      const rect = section.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = (window.innerHeight - rect.top) / total;
      return Math.max(0, Math.min(progress, 1));
    };

    const renderFrame = (): void => {
      if (isDestroyed) {
        return;
      }

      const progress = readScrollProgress();
      const targetRotationY = pointer.x * 0.3 + progress * (this.variant() == 'hero' ? 1.15 : 0.72);
      const targetRotationX = pointer.y * 0.18 - 0.16 - progress * 0.16;
      const targetPositionY = 0.24 + progress * 0.48;
      const targetPositionZ = (this.variant() == 'hero' ? 7.8 : 7.2) - progress * 1.2;

      rig.rotation.y += (targetRotationY - rig.rotation.y) * 0.045;
      rig.rotation.x += (targetRotationX - rig.rotation.x) * 0.045;
      rig.position.y += ((progress - 0.5) * 0.3 - rig.position.y) * 0.05;
      core.rotation.z += reducedMotion ? 0 : 0.0022;
      nodes.rotation.z -= reducedMotion ? 0 : 0.0014;
      sparks.rotation.z += reducedMotion ? 0 : 0.001;
      camera.position.y += (targetPositionY - camera.position.y) * 0.06;
      camera.position.z += (targetPositionZ - camera.position.z) * 0.06;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(viewport);
    updateSize();

    const handlePointerMove = (event: PointerEvent): void => {
      if (reducedMotion) {
        return;
      }

      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      renderFrame();
    }

    return () => {
      isDestroyed = true;
      window.removeEventListener('pointermove', handlePointerMove);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameId);

      renderer.dispose();
      scene.traverse((child: ThreeObject) => {
        const mesh = child as {
          geometry?: { dispose?: () => void };
          material?: DisposableMaterial | DisposableMaterial[];
        };

        mesh.geometry?.dispose?.();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => material.dispose?.());
        } else {
          mesh.material?.dispose?.();
        }
      });
      viewport.replaceChildren();
    };
  }

  private createSparkGeometry(THREE: ThreeModule): import('three').BufferGeometry {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];

    for (let index = 0; index < 96; index += 1) {
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
