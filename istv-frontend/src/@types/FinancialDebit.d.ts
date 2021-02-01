import {Identifiable} from "./Identifiable";
import {IUser} from "./User";
import {IAcademicYear} from "./AcademicYear";

export interface IFinancialDebit extends Identifiable {
  id: number;
  user: IUser;
  academicYear: IAcademicYear;
  debitPerYear: number;
  transactionType: string;
  debitType: string;
}
