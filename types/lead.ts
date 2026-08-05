export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  interestedCountry: string;
  preferredIntake: string;
  qualification: string;
  message?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}