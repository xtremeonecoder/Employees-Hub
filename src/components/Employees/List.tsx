/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React, { useEffect, useContext } from 'react';

import ToolBar from './ToolBar';
import EmployeeCard from './Card';
import { GlobalContext } from '../../contexts/Global';
import { getEmployees } from '../../services/Employee';
import { toastNotification } from '../../utils/Toast';
import type { IEmployee } from '../../data-structure/Interfaces';
import { NOTIFICATIONS } from '../../data-structure/Enums';

import './styles.scss';

const EmployeeList: React.FC = (): React.JSX.Element => {
  const { employees, setEmployees, sortBy, filterBy, filterKey } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getEmployees();
        setEmployees(response.data);
      } catch (error: any) {
        toastNotification(`Error fetching data: ${error}`, NOTIFICATIONS.Error);
      }
    };

    void fetchData();
  }, []);

  const filterAndSortEmployees = (): IEmployee[] => {
    let filteredEmployees = employees;

    if (filterKey && filterBy) {
      // Filters based on selected field data
      filteredEmployees = filteredEmployees.filter((employee) =>
        ((employee[filterBy as keyof IEmployee] as string) ?? '')
          .toLowerCase()
          .includes(filterKey.toLowerCase()),
      );
    } else if (filterKey) {
      // Filters based on name or office data
      filteredEmployees = filteredEmployees.filter((employee) => {
        return typeof employee.name === 'string'
          ? employee.name
              .toLowerCase()
              .match(new RegExp(typeof filterKey === 'string' ? filterKey : '', 'gi'))
          : false || typeof employee.office === 'string'
            ? employee.office
                .toLowerCase()
                .match(new RegExp(typeof filterKey === 'string' ? filterKey : '', 'gi'))
            : false;
      });
    }

    // Sorting ascending or descending order by name or office
    if (sortBy === 'nameasc') {
      filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'namedesc') {
      filteredEmployees.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'officeasc') {
      filteredEmployees.sort((a, b) => a.office?.localeCompare(b.office));
    } else if (sortBy === 'officedesc') {
      filteredEmployees.sort((a, b) => b.office?.localeCompare(a.office));
    }

    return filteredEmployees;
  };

  return (
    <div className="employee-list">
      <ToolBar />

      <div className="grid-container">
        {filterAndSortEmployees().map((employee) => (
          <EmployeeCard key={employee.email} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
