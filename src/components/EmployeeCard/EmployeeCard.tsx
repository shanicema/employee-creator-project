import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from 'react-query';
import axios from 'axios';
import { EmployeeDetails } from '../EmployeeDetailsPage/EmployeeDetailsPage';


interface EmployeeCardProps {
    employee: EmployeeDetails;
    onEdit?: () => void;
}

const getDayDiff = (startDate: Date, finishDate: Date): number => {

    const msInDay = 24 * 60 * 60 * 1000;
    console.log(msInDay);
  
    return Math.round(
      (Math.abs(Number(finishDate) - Number(startDate)) / msInDay)/365
    );
  }
  
  // test example
  let startDate = new Date('2022/01/20');
  let finishDate = new Date('2028/01/20');

  console.log(
    getDayDiff(startDate, finishDate)); // in years


const EmployeeCard = ({ employee, onEdit }: EmployeeCardProps) => {
    
    return (
        <section>
            <div>
                <p>{employee.firstName} {employee.lastName}</p>
                <p>{employee.contractType} - {getDayDiff(employee.startDate, employee.finishDate)}yrs</p>
                <p>{employee.email}</p>

            </div>
            <div>
                <Button onClick={onEdit} variant="primary" type="submit">
                        Edit
                </Button>
                <Button variant="secondary" type="submit">
                    Remove
                </Button>
            </div>
        </section>
    )
}

export default EmployeeCard;