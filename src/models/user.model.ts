export interface User {
  id: string;
  name: string;
  email: string;
  passwordDigest?: string;
  password?: string;
}
