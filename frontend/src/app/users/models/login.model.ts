export interface LoginModel {
  id: number;
  username: string;
  created_at: string;
  updated_at: string;
}

export interface LoginErrorModel {
  error: {
    message: string;
  };
}
