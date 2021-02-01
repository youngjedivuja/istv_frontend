import {Identifiable} from "./Identifiable";
import {IUser} from "./User";

export interface IRole extends Identifiable {
  id: number;
  name: string;
  users: IUser[];
}
