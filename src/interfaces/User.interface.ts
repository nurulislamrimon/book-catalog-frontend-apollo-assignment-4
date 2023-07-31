export type IUserState = {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

export interface IUserMailPass {
  email: string;
  password: string;
}
