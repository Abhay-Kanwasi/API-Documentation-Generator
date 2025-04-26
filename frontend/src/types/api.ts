export interface ApiResponse<T> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
}

export interface Documentation {
  endpoint: string;
  method: string;
  description: string;
  parameters?: Parameter[];
}

export interface Parameter {
  name: string;
  type: string;
  description: string;
}