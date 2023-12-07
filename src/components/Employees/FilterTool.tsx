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
import { FILTERBY } from '../../data-structure/Enums';

const FilterTool: React.FC = (): React.JSX.Element => {
  const { setFilterBy, setFilterKey } = useContext(GlobalContext);

  const handleFilterByChange = (value: string): void => {
    setFilterBy(value);
  };

  const handleFilterKeyChange = (value: string): void => {
    setFilterKey(value);
  };

  return (
    <>
      <input
        type="text"
        name="filterKey"
        placeholder="Search key"
        onChange={(e) => {
          handleFilterKeyChange(e.target.value);
        }}
      />
      <select
        name="filterBy"
        onChange={(e) => {
          handleFilterByChange(e.target.value);
        }}
        id="filterBy"
      >
        <option value="">Filter By</option>
        {Object.keys(FILTERBY).map((key) => (
          <option key={key} value={key.toLowerCase()}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterTool;
