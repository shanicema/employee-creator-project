import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler } from "react-hook-form";
import { useEmployees } from '../../api/use-employees';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { EmployeeDetails } from '../EmployeeDetailsPage/EmployeeDetailsPage';



const employees: EmployeeDetails[] = [{
    firstName: 'John',
    lastName: 'Wick',
    middleName: 'Pat',
    email: 'john.wick@gmail.com',
    number: '0424158098',
    address: '90 George St, Sydney NSW 2000',
    contractType: 'Permanent',
    employmentType: 'Full-time',
    hours: 10,
    startDate: new Date('2022/01/20'),
    finishDate: new Date('2028/01/20'),
    isOngoing: false
},
{
    firstName: 'Rachel',
    lastName: 'Mayfield',
    middleName: 'Rose',
    email: 'rachel.mayfield@gmail.com',
    number: '0424198022',
    address: '10 York St, Sydney NSW 2000',
    contractType: 'Contract',
    employmentType: 'Part-time',
    hours: 30,
    startDate: new Date('2021/01/20'),
    finishDate: new Date('2023/01/20'),
    isOngoing: false
}]

interface EmployeeGalleryProps {
    onEdit?: (emp: EmployeeDetails) => void;
}

const EmployeeGallery = ({onEdit}: EmployeeGalleryProps) => {
    const employees = useEmployees();
    console.log(employees);

    if (employees.isLoading) {
        return <span>Loading</span>;
    }

    if (employees.isError) {
        return <span>Error: {employees.error instanceof Error ? employees.error.message : `${employees.error}` }</span>
      }
      
    return (
        <div>
            <h5>Employee Gallery</h5>
            <div>
                { employees.data?.map((employee: EmployeeDetails) => {
                    return <div key={employee.email}>
                        <EmployeeCard employee={employee} onEdit={() => onEdit?.(employee)}/>
                    </div>;
                })}
            </div>
        </div>
    )
}

// onEdit === undefined ? undefined : onEdit(employee)
// onEdit?.(employee)

export default EmployeeGallery;