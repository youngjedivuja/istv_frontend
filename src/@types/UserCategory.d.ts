import {Identifiable} from "./Identifiable";
import {IUser} from "./User";

export interface IUserCategory extends Identifiable {
  category: number | Identifiable;
  user: IUser | number | Identifiable;
  startDate: string;
}
