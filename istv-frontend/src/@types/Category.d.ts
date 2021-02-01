import {Identifiable} from "./Identifiable";
import {IAcademicYear} from "./AcademicYear";

export interface ICategory extends Identifiable {
  academicYear: IAcademicYear;
  number: number;
  name: string;
  price: number;
  startDate: Date;
  endDate: Date;
  type: string;
}
