import ISignature from './indexSignature.interface';

export default interface IUserSettings extends ISignature {
  id: number;
  email: string;
  phone: string;
  name: string;
  role: string;
  assistant: string;
  storeASM: string;
  storeId: number;
  profileImg: string;
  teamPhoto: string;
}
