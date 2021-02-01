import {Identifiable} from "./Identifiable";

export interface IAuditable extends Identifiable {
  createdDate: Date;
  lastModifiedDate: Date;
  lastModifiedBy: string;
}
