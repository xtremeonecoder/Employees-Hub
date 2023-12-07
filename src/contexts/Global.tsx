/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React, { useState, createContext } from 'react';

import type {
  IEmployee,
  IGlobalContext,
  IGlobalContextProviderProps,
} from '../data-structure/Interfaces';

const initialState: IGlobalContext = {
  employees: [],
  setEmployees: () => {},
  sortBy: null,
  setSortBy: () => {},
  filterBy: '',
  setFilterBy: () => {},
  filterKey: '',
  setFilterKey: () => {},
};

export const GlobalContext: React.Context<IGlobalContext> =
  createContext<IGlobalContext>(initialState);

export const GlobalContextProvider: React.FC<IGlobalContextProviderProps> = ({
  children,
}: IGlobalContextProviderProps): React.JSX.Element => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<string>('');
  const [filterKey, setFilterKey] = useState<string>('');

  const contextValue = {
    employees,
    setEmployees,
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy,
    filterKey,
    setFilterKey,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};
