export interface IResponse<T> {
  success: boolean;
  message: number;
  data: T | null;
}
