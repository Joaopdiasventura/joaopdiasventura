import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { CONTACT_CONTENT } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language/language.service';
import {
  ContentMetaItem,
  ContentMetaList,
} from '../../../../shared/components/content/content-meta-list/content-meta-list';
import { ContentSectionHeading } from '../../../../shared/components/content/content-section-heading/content-section-heading';
import { UiButton } from '../../../../shared/components/ui/ui-button/ui-button';
import { UiTextField } from '../../../../shared/components/ui/ui-text-field/ui-text-field';
import { UiTextareaField } from '../../../../shared/components/ui/ui-textarea-field/ui-textarea-field';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { ContactEmailApiService } from '../../services/contact-email-api/contact-email-api.service';

interface ContactFormValue {
  name: string;
  email: string;
  message: string;
}

type ContactFormField = keyof ContactFormValue;
type SubmitStatus = 'idle' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM_VALUE: ContactFormValue = {
  name: '',
  email: '',
  message: '',
};

const INITIAL_TOUCHED_STATE: Readonly<Record<ContactFormField, boolean>> = {
  name: false,
  email: false,
  message: false,
};

@Component({
  selector: 'app-contact-section',
  imports: [
    ContentMetaList,
    ContentSectionHeading,
    RevealOnScrollDirective,
    UiButton,
    UiTextField,
    UiTextareaField,
    ViewportTiltDirective,
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection implements OnDestroy {
  public readonly content = CONTACT_CONTENT;

  private readonly languageService = inject(LanguageService);
  private readonly contactEmailApiService = inject(ContactEmailApiService);

  private readonly contactModel = signal<ContactFormValue>(INITIAL_FORM_VALUE);
  private readonly touched = signal(INITIAL_TOUCHED_STATE);
  private statusResetTimer: ReturnType<typeof setTimeout> | undefined;

  public readonly formValue = this.contactModel.asReadonly();
  public readonly submitStatus = signal<SubmitStatus>('idle');
  public readonly isSubmitting = signal(false);
  public readonly nameInvalid = computed(() => this.fieldInvalid('name'));
  public readonly emailInvalid = computed(() => this.fieldInvalid('email'));
  public readonly messageInvalid = computed(() => this.fieldInvalid('message'));
  public readonly detailItems = computed<readonly ContentMetaItem[]>(() =>
    this.content.details.map((item) => ({
      external: item.href?.startsWith('http') ?? false,
      href: item.href,
      label: this.copy(item.label),
      value: this.copy(item.value),
    })),
  );

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public controlInvalid(field: ContactFormField): boolean {
    return this.fieldInvalid(field);
  }

  public markTouched(field: ContactFormField): void {
    this.touched.update((currentState) => ({
      ...currentState,
      [field]: true,
    }));
  }

  public ngOnDestroy(): void {
    if (this.statusResetTimer) {
      clearTimeout(this.statusResetTimer);
    }
  }

  public async submit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (this.isSubmitting()) {
      return;
    }

    this.touchAllFields();
    this.submitStatus.set('idle');

    if (this.formInvalid()) {
      return;
    }

    this.isSubmitting.set(true);

    try {
      await this.contactEmailApiService.sendMessage(this.contactModel());
      this.submitStatus.set('success');
      this.contactModel.set(INITIAL_FORM_VALUE);
      this.touched.set(INITIAL_TOUCHED_STATE);
      this.scheduleStatusReset();
    } catch {
      this.submitStatus.set('error');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  public updateFieldValue(field: ContactFormField, value: string): void {
    this.contactModel.update((currentValue) => ({
      ...currentValue,
      [field]: value,
    }));

    if (this.submitStatus() != 'idle') {
      this.submitStatus.set('idle');
    }
  }

  private emailValid(value: string): boolean {
    return EMAIL_PATTERN.test(value.trim());
  }

  private fieldInvalid(field: ContactFormField): boolean {
    const touched = this.touched()[field];

    if (!touched) {
      return false;
    }

    return !this.fieldValid(field, this.contactModel()[field]);
  }

  private fieldValid(field: ContactFormField, value: string): boolean {
    const normalizedValue = value.trim();

    if (normalizedValue.length == 0) {
      return false;
    }

    if (field == 'email') {
      return this.emailValid(normalizedValue);
    }

    return true;
  }

  private formInvalid(): boolean {
    const currentValue = this.contactModel();

    return !(
      this.fieldValid('name', currentValue.name) &&
      this.fieldValid('email', currentValue.email) &&
      this.fieldValid('message', currentValue.message)
    );
  }

  private scheduleStatusReset(): void {
    if (this.statusResetTimer) {
      clearTimeout(this.statusResetTimer);
    }

    this.statusResetTimer = setTimeout(() => {
      this.submitStatus.set('idle');
    }, 3000);
  }

  private touchAllFields(): void {
    this.touched.set({
      name: true,
      email: true,
      message: true,
    });
  }
}
