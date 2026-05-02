import { Injectable } from '@angular/core';

const CONTACT_API_ENDPOINT = 'https://email.joaopdias.dev.br/';

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

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactEmailApiService {
  public async sendMessage(payload: ContactMessagePayload): Promise<void> {
    const requestBody = this.buildRequest(payload);
    const response = await fetch(CONTACT_API_ENDPOINT, {
      body: JSON.stringify(requestBody),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    });
    const responseBody = (await response.json()) as unknown;

    if (!response.ok || !this.isSuccessResponse(responseBody)) {
      throw new Error(this.errorMessage(responseBody));
    }
  }

  private errorMessage(response: unknown): string {
    if (this.isErrorResponse(response)) {
      return response.error;
    }

    return 'Unable to send message.';
  }

  private isErrorResponse(response: unknown): response is EmailApiErrorResponse {
    return (
      typeof response == 'object' &&
      response != null &&
      'error' in response &&
      typeof response.error == 'string'
    );
  }

  private isSuccessResponse(response: unknown): response is EmailApiSuccessResponse {
    return (
      typeof response == 'object' &&
      response != null &&
      'ok' in response &&
      response.ok === true &&
      'messageId' in response &&
      typeof response.messageId == 'string'
    );
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
