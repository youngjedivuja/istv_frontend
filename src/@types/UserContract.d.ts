import {Identifiable} from "./Identifiable";
import {IUser} from "./User";

export interface IUserContract extends Identifiable {
  id: number;
  documentName: string;
  alfrescoLink: string;
  alfrescoNodeId: string;
  user: IUser | number | Identifiable;
}
