import {Identifiable} from "./Identifiable";
import {IUserCategory} from "./UserCategory";

export interface ICheckIn extends Identifiable {
  userCategory: IUserCategory;
  startTime: string;
  endTime: string;
  approved: boolean;
  date: string;
  duration: number;
}

export interface ICheckInApproveDTO {
  checkInId: number;
  duration: number;
}
