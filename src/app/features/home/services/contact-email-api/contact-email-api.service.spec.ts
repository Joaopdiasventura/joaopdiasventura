import { TestBed } from '@angular/core/testing';
import { ContactEmailApiService } from './contact-email-api.service';

describe('ContactEmailApiService', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    Object.defineProperty(globalThis, 'fetch', {
      configurable: true,
      value: originalFetch,
    });
  });

  it('sends the normalized payload to the contact endpoint', async () => {
    const service = TestBed.inject(ContactEmailApiService);
    let requestUrl = '';
    let requestInit: RequestInit | undefined;

    Object.defineProperty(globalThis, 'fetch', {
      configurable: true,
      value: async (input: string | URL | Request, init?: RequestInit) => {
        requestUrl = String(input);
        requestInit = init;

        return {
          ok: true,
          json: async () => ({
            ok: true,
            messageId: 'message-123',
          }),
        } as Response;
      },
    });

    await service.sendMessage({
      name: ' João ',
      email: ' joao@example.com ',
      message: 'Hello <team>',
    });

    const body = JSON.parse(requestInit?.body as string) as {
      subject: string;
      text: string;
      html: string;
      replyTo: string;
    };

    expect(requestUrl).toBe('https://email.joaopdias.dev.br/');
    expect(requestInit?.method).toBe('POST');
    expect(body.subject).toBe('Portfolio contact - João');
    expect(body.replyTo).toBe('joao@example.com');
    expect(body.text).toContain('Hello <team>');
    expect(body.html).toContain('Hello &lt;team&gt;');
  });

  it('throws the API error message when the request fails', async () => {
    const service = TestBed.inject(ContactEmailApiService);

    Object.defineProperty(globalThis, 'fetch', {
      configurable: true,
      value: async () =>
        ({
          ok: false,
          json: async () => ({
            error: 'Service unavailable',
          }),
        }) as Response,
    });

    await expect(
      service.sendMessage({
        name: 'João',
        email: 'joao@example.com',
        message: 'Ping',
      }),
    ).rejects.toThrow('Service unavailable');
  });
});
