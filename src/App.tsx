import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import EmployeeDetailsPage, { EmployeeDetails } from './components/EmployeeDetailsPage/EmployeeDetailsPage';
import AddEmployeeButton from './components/AddEmployeeButton/AddEmployeeButton';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import EmployeeGallery from './components/EmployeeGallery/EmployeeGallery';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()


function App() {
  const [employee, setEmployee] = useState<EmployeeDetails>();


  console.log('employee', employee);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          {/* <Header /> */}
          <AddEmployeeButton />

          {/* data is coming out of employee gallery */}
          <EmployeeGallery onEdit={(emp) => {setEmployee(emp)}} />
          
          <EmployeeDetailsPage employee={employee}/>
          {/* data is going into employeedetailspage */}
      </QueryClientProvider>
    </div>
  )
}

export default App;
