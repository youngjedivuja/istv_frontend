import {Identifiable} from "./Identifiable";
import {IRole} from "./Role";
import {IUserCategory} from "./UserCategory";
import {IFinancialDebit} from "./FinancialDebit";
import {ICategory} from "./Category";
import {IUserContract} from "./UserContract";

export interface IUser extends Identifiable {
  id: number;
  firstName: string;
  lastName: string;
  indeks: string;
  username: string;
  email: string;
  profilePhoto: string;
  referenceNumber: string;
  roles?: IRole[];
  userCategories?: IUserCategory[];
  financialDebits?: IFinancialDebit[];
  category?: ICategory;
  userContracts?: IUserContract[];
}
