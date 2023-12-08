/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React from 'react';

import type { IEmployeeCardProps } from '../../data-structure/Interfaces';

const EmployeeCard: React.FC<IEmployeeCardProps> = ({ employee }): React.JSX.Element => {
  const employeeImage = employee.imagePortraitUrl ?? `${process.env.PUBLIC_URL}/dummy-img.jpg`;

  return (
    <div className="card">
      <div className="card-top">
        <img src={employeeImage} alt={employee.name} />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <h3>{employee.name}</h3>
          <p>Office: {employee.office}</p>
        </div>
        <div className="card-bottom-right">
          {employee.linkedIn && (
            <a
              href={`https://www.linkedin.com${employee.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
          )}
          {employee.gitHub && (
            <a
              href={`https://github.com/${employee.gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.png" alt="GitHub" />
            </a>
          )}
          {employee.twitter && (
            <a
              href={`https://twitter.com/${employee.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="twitter.png" alt="Twitter" />
            </a>
          )}
          {employee.stackOverflow && (
            <a
              href={`https://stackoverflow.com/users/${employee.stackOverflow}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="stackoverflow.png" alt="Stack Overflow" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
