export interface ActionData<T = any> {
  fieldErrors?: {
    [key: string]: string;
  }
  message?: string;
  metadata?: T;
}
