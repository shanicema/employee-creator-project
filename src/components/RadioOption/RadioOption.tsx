import Form from 'react-bootstrap/Form';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckOption {
    id: string;
    label: string;
}

export type CheckProps = {
    options: CheckOption[];
    type: 'radio' | 'checkbox' | 'switch'
    register: any;
}

// interface UseFormReturn {
//     hello: 'world';
// }

// interface Something {
//     magic: boolean;
// }

// export type TestType = UseFormReturn & Something;

// const a: TestType;

// a.hello
// a.magic

function CheckboxGroup({options, type, register}: CheckProps) {
    return (
        <div key={`default-${'radio'}`} className="mb-3">
            {options.map((option) => {
                return <Form.Check key={option.id}
                    {...register('test')}
                    value={option.id}
                    type={type}
                    id={option.id}
                    label={option.label}
                    />
            })}
        </div>
    );
}

export default CheckboxGroup;