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

export interface CreateAppointment {
  title: string;
  appointmentType: string;
  customAppointmentTypeId: number;
  appointmentTime: string;
  location: {
    place: string;
    latitude: number;
    longitude: number;
  };
}

export interface AppointmentAtoms {
  name: string;
  appointmentType: string;
  sendName: string;
  customAppointmentTypeId: number;
  YYMMDD: string;
  AmPm: string;
  HHMM: string;
  place: string;
  latitude: string;
  longitude: string;
}

export interface MyAppointment {
  id: number;
  title: string;
  appointmentType: string;
  customAppointmentTypeName: string;
  place: string;
  appointmentTime: string;
}

export interface Flag {
  flag: boolean;
  flagText: string;
}

export type MyAppointmentFlag = MyAppointment & Flag;
