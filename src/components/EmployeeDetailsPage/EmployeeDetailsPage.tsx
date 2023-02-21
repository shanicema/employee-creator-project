import styles from './EmployeeDetailsPage.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from 'react-query';
import axios from 'axios';
import { useEffect, useMemo } from 'react';

export interface EmployeeDetails {
    id?: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    number: string;
    address: string;
    contractType: string;
    employmentType: string;
    hours: number;
    startDate: Date;
    finishDate: Date;
    isOngoing: boolean;
}


interface EmployeeDetailsProps {
    employee?: EmployeeDetails;
}

const EmployeeDetailsPage = ({employee}: EmployeeDetailsProps) => {

    const mutation = useMutation<unknown, unknown, EmployeeDetails>('employee', async (data) => {
        if (employee?.id) {
            // here we need to update instead of post
            return axios.patch('http://localhost:8080/employees/' + employee.id, data)
        } else {
            // here we are creating new
            return axios.post('http://localhost:8080/employees', data)
        }
    })

    // const defaultValues = useMemo(() => {
    //     return employee;
    // }, [employee]);
      
    const { register, handleSubmit, reset } = useForm<EmployeeDetails>();
    // employee ? {
    //     defaultValues
    // } : {}

    useEffect(() => {
        reset(employee);
    }, [employee]);

    const onSubmit: SubmitHandler<EmployeeDetails> = data => {
        mutation.mutate(data);
        console.log(data)
    };

    return (
        <div style={{ maxWidth: 400, margin: '20px auto'}}>
              <div>
                {mutation.isLoading ? (
                    'Adding employee...'
                ) : (
                    <>
                    {mutation.isError ? (
                        <div>An error occurred: {mutation.error instanceof Error ? mutation.error.message : `${mutation.error}`}</div>
                    ) : null}
            
                    {mutation.isSuccess ? <div>Employee added!</div> : null}
            
                    </>
                )}
            </div>
            <h4>Personal Information</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter first name" {...register("firstName", { required: true })}/>
                    <Form.Label>Middle name (if applicable)</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter middle name" {...register("middleName")}/>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter last name" {...register("lastName", { required: true })}/>
                </Form.Group>

            <h4>Contact Details</h4>
                <Form.Group className="mb-3" controlId="formBasicContactDetails">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")}
                    />                    

                    <Form.Label htmlFor="basic-url">Mobile number</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            +61
                            </InputGroup.Text>
                            <Form.Control id="basic-telprefix" aria-describedby="basic-addon3" type="tel" pattern="[0-9]{10}" placeholder="Enter mobile number" {...register("number")}/>
                        </InputGroup>

                    <Form.Label>Residential address</Form.Label>
                    <Form.Control type="address" placeholder="Enter address" {...register("address")}/>
                </Form.Group>


            <h4>Employee Status</h4> 
            <h6>What is contract type?</h6>
            <div key={`default-${'radio'}`} className="mb-3">
                <Form.Check
                    {...register('contractType')}
                    type="radio"
                    id="permanent"
                    value="permanent"
                    label="Permanent"
                    />
                <Form.Check
                    {...register('contractType')}
                    type="radio"
                    id="contract"
                    value="contract"
                    label="Contract"
                    />
            </div>

            <h6>Is this on a full-time or part-time basis?</h6>
            <div key={`default-${'radio'}`} className="mb-3">
                <Form.Check
                    {...register('employmentType')}
                    type="radio"
                    id="full-time"
                    value="Full-time"
                    label="Full-time"
                    />
                <Form.Check
                    {...register('employmentType')}
                    type="radio"
                    id="part-time"
                    value="Part-time"
                    label="Part-time"
                    />
            </div>

                <Form.Label>Start date</Form.Label>
                    <Form.Control type="date" placeholder="Enter start date" {...register("startDate")}
                    />    

                <Form.Label>Finish date</Form.Label>
                    <Form.Control type="date" placeholder="Enter finish date" {...register("finishDate")}
                    />    
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Ongoing" {...register("isOngoing")}/>

                </Form.Group>

                <Form.Label>Hours per week</Form.Label>
                    <Form.Control type="number" placeholder="Enter hours per week" min="0" {...register("hours")}/>
            
                
                <Button variant="primary" type="submit">
                    Save
                </Button>

                <Button variant="secondary" type="submit">
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

export default EmployeeDetailsPage;
