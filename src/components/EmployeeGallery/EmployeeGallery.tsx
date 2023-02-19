import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler } from "react-hook-form";
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { EmployeeDetails } from '../EmployeeDetailsPage/EmployeeDetailsPage';


interface EmployeeCardProps {
    employee: EmployeeDetails;
}

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

const EmployeeGallery = () => {

    return (
        <div>
            <h5>Employee Gallery</h5>
            <div>
                { employees.map((employee: EmployeeDetails) => {
                    return <div key={employee.email}>
                        <EmployeeCard employee={employee} />
                    </div>;
                })}
            </div>
        </div>
    )
}

export default EmployeeGallery;