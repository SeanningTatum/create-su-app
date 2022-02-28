export interface ActionData<Body = any, Form = any> {
  fieldErrors?: Record<keyof Form, string>
  body?: Body;
  message?: string;
  code?: number;
}
