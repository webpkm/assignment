export interface LoginResponse {
  username: string;
  password: string;
}

export class User {
  username: string;
  password?: string;
  token: string;

  constructor() {
    this.username = '';
    this.token = '';
  }
}