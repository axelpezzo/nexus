export interface IOwnProps {
  endpoint: string;
  method: TMethodApi;
  body?: TBodyApi;
}

type TBodyApi = Record<string, any>;
type TMethodApi = "GET" | "POST" | "PUT" | "DELETE";

export interface IFormBody {
  formName: string;
  formData: Record<string, any>;
}
