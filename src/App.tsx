/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import React from 'react';
import { ToastContainer } from 'react-toastify';

import EmployeeList from './components/Employees/List';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <h1>The fellowship of the tretton37</h1>
      <ToastContainer />
      <EmployeeList />
    </div>
  );
}

export default App;
