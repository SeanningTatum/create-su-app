export interface ActionData<T = any> {
  fieldErrors?: Record<keyof T, string>
  message?: string;
  metadata?: T;
  code?: number;
}
