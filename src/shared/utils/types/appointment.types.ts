export interface Appointment {
  uaid: number;
  apTitle: string;
  apPlace: string;
  apTime: number[];
  imageUrl: string[];
  apType: string;
  flag?: boolean;
  flagText?: string;
}
