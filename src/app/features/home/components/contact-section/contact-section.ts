import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import {
  email,
  FieldTree,
  FormField,
  form,
  FormRoot,
  required,
} from '@angular/forms/signals';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ContactEmailApiService } from '../../services/contact-email-api.service';

interface ContactFormValue {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

const INITIAL_FORM_VALUE: ContactFormValue = {
  name: '',
  email: '',
  message: '',
};

@Component({
  selector: 'app-contact-section',
  imports: [FormRoot, FormField, RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection implements OnDestroy {
  private readonly languageService = inject(LanguageService);
  private readonly contactEmailApiService = inject(ContactEmailApiService);

  private readonly contactModel = signal<ContactFormValue>(INITIAL_FORM_VALUE);
  private statusResetTimer: ReturnType<typeof setTimeout> | undefined;

  public readonly submitStatus = signal<SubmitStatus>('idle');
  public readonly contactForm = form(
    this.contactModel,
    (path) => {
      required(path.name);
      required(path.email);
      email(path.email);
      required(path.message);
    },
    {
      submission: {
        action: async () => this.sendContactMessage(),
        onInvalid: () => this.submitStatus.set('idle'),
      },
    },
  );

  public readonly isSubmitting = computed(() => this.contactForm().submitting());

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  public controlInvalid(field: FieldTree<string>): boolean {
    const fieldState = field();
    return fieldState.touched() && fieldState.invalid();
  }

  public ngOnDestroy(): void {
    if (this.statusResetTimer) {
      clearTimeout(this.statusResetTimer);
    }
  }

  private async sendContactMessage(): Promise<void> {
    this.submitStatus.set('idle');

    try {
      await this.contactEmailApiService.sendMessage(this.contactModel());
      this.submitStatus.set('success');
      this.contactForm().reset(INITIAL_FORM_VALUE);
      this.scheduleStatusReset();
    } catch {
      this.submitStatus.set('error');
    }
  }

  private scheduleStatusReset(): void {
    if (this.statusResetTimer) {
      clearTimeout(this.statusResetTimer);
    }

    this.statusResetTimer = setTimeout(() => {
      this.submitStatus.set('idle');
    }, 3000);
  }
}
