import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler } from "react-hook-form";

const AddEmployeeButton = () => {
    
    return (
        <section>
            <div>
                <h6>Please click on 'Edit' to find more details of each employee</h6>
            </div>
            <div>          
                <Button variant="primary" type="submit">
                    Add Employee
                </Button>
            </div>
        </section>
    )
}

export default AddEmployeeButton;