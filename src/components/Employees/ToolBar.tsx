/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React from 'react';

import SortTool from './SortTool';
import FilterTool from './FilterTool';

const ToolBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="top-bar">
      <SortTool />
      <FilterTool />
    </div>
  );
};

export default ToolBar;
