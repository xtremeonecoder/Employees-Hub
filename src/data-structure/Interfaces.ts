/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

export interface IEmployee {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string;
  imagePortraitUrl: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
  primaryRole: string | null;
  secondaryRole: string | null;
  area: string | null;
}

export interface IEmployeeCardProps {
  employee: IEmployee;
}

export interface IGlobalContext {
  employees: IEmployee[];
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
  sortBy: string | null;
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  filterKey: string;
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

export interface IGlobalContextProviderProps {
  children: React.ReactNode;
}
