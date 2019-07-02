export default interface IUsers {
  id: number;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  store: {
    title: string;
    companyId: number;
    id: number;
  };
  avatar: string;
  storeId: number;
  lastLogin: string;
  loginCount: number;
  isActive: boolean;
}
