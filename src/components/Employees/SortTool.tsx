/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React, { useContext } from 'react';

import { GlobalContext } from '../../contexts/Global';
import { SORTBY } from '../../data-structure/Enums';

const SortTool: React.FC = (): React.JSX.Element => {
  const { setSortBy } = useContext(GlobalContext);

  const handleSortChange = (value: string): void => {
    setSortBy(value);
  };

  return (
    <select
      name="sortBy"
      onChange={(e) => {
        handleSortChange(e.target.value);
      }}
      id="sortBy"
    >
      <option value="">Sort By</option>
      {Object.keys(SORTBY).map((key) => (
        <option key={key} value={key.toLowerCase()}>
          {SORTBY[key as keyof typeof SORTBY]}
        </option>
      ))}
    </select>
  );
};

export default SortTool;
