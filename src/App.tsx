import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import EmployeeDetailsPage from './components/EmployeeDetailsPage/EmployeeDetailsPage';
import AddEmployeeButton from './components/AddEmployeeButton/AddEmployeeButton';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import EmployeeGallery from './components/EmployeeGallery/EmployeeGallery';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AddEmployeeButton />
      <EmployeeGallery />
      <EmployeeDetailsPage/>
    </div>
  );
}

export default App;
