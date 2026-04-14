import { TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';
import {
  ContactEmailApiService,
  ContactMessagePayload,
} from '../../services/contact-email-api/contact-email-api.service';

describe('ContactSection', () => {
  let sentPayload: ContactMessagePayload | null;
  let contactEmailApiService: ContactEmailApiService;

  beforeEach(async () => {
    sentPayload = null;
    contactEmailApiService = {
      sendMessage: async (payload: ContactMessagePayload) => {
        sentPayload = payload;
      },
    } as ContactEmailApiService;

    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [
        {
          provide: ContactEmailApiService,
          useValue: contactEmailApiService,
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('submits a valid message and shows success feedback', async () => {
    const fixture = TestBed.createComponent(ContactSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const [nameInput, emailInput] = Array.from(host.querySelectorAll<HTMLInputElement>('input'));
    const messageInput = host.querySelector<HTMLTextAreaElement>('textarea');
    const form = host.querySelector<HTMLFormElement>('form');

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
    expect(form).toBeTruthy();

    nameInput!.value = 'João';
    nameInput!.dispatchEvent(new Event('input'));
    emailInput!.value = 'joao@example.com';
    emailInput!.dispatchEvent(new Event('input'));
    messageInput!.value = 'Portfolio contact';
    messageInput!.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    form!.dispatchEvent(new Event('submit'));
    await Promise.resolve();
    await Promise.resolve();
    fixture.detectChanges();

    expect(sentPayload).toEqual({
      name: 'João',
      email: 'joao@example.com',
      message: 'Portfolio contact',
    });
    expect(host.querySelector('.contact-form__status')?.textContent).toContain('Message sent.');
    fixture.destroy();
  });
});
