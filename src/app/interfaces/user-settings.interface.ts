export default interface IUserSettings {
  id: number;
  email: string;
  phone: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  assistant: string;
  storeId: number;
  storeASM: string;
  store: {
    title: string;
    companyId: number;
    id: number;
  };
  avatar: string;
  teamPhoto: string;
}
