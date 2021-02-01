import {ICheckIn} from "../CheckIn";

export interface ICheckInsForDayDTO {
  date: string;
  day: string;
  checkIns: ICheckIn[];
  // isSave: boolean;
  // userId: number;
  totalHours: number;
}
