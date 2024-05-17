export interface ApiResponse<Data> {
  code: string;
  message: string;
  data?: Data;
}
