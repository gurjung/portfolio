export interface ContactFormData {
  readonly user_name: string;
  readonly user_email: string;
  readonly user_subject: string;
  readonly message: string;
}

export interface EmailServiceCredentials {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
}
