export interface Appointment {
  title: string;
  profileImgList: string[];
  place: string;
  time: Date;
  flag?: boolean;
  flagText?: string;
}
