import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const CONTACT_API_ENDPOINT = 'https://joaopdias-email.vercel.app/';

interface EmailApiRequest {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}

interface EmailApiSuccessResponse {
  ok: true;
  messageId: string;
}

interface EmailApiErrorResponse {
  error: string;
}

type EmailApiResponse = EmailApiSuccessResponse | EmailApiErrorResponse;

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactEmailApiService {
  private readonly httpClient = inject(HttpClient);

  public async sendMessage(payload: ContactMessagePayload): Promise<void> {
    const requestBody = this.buildRequest(payload);
    const response = await firstValueFrom(
      this.httpClient.post<EmailApiResponse>(CONTACT_API_ENDPOINT, requestBody),
    );

    if (!this.isSuccessResponse(response)) {
      throw new Error(response.error);
    }
  }

  private isSuccessResponse(
    response: EmailApiResponse,
  ): response is EmailApiSuccessResponse {
    return 'ok' in response && response.ok;
  }

  private buildRequest(payload: ContactMessagePayload): EmailApiRequest {
    const name = payload.name.trim();
    const email = payload.email.trim();
    const message = payload.message.trim();

    return {
      subject: `Portfolio contact - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: this.buildHtmlBody(name, email, message),
      replyTo: email,
    };
  }

  private buildHtmlBody(name: string, email: string, message: string): string {
    const escapedName = this.escapeHtml(name);
    const escapedEmail = this.escapeHtml(email);
    const escapedMessage = this.escapeHtml(message).replace(/\n/g, '<br />');

    return (
      `<p><strong>Name:</strong> ${escapedName}</p>` +
      `<p><strong>Email:</strong> ${escapedEmail}</p>` +
      `<p><strong>Message:</strong><br />${escapedMessage}</p>`
    );
  }

  private escapeHtml(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}
