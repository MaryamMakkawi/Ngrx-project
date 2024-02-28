export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}
export interface IUsers extends Array<IUser> {
  users: IUser[];
}
