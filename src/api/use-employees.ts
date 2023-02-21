import { useQuery } from "react-query"
import { EmployeeDetails } from "../components/EmployeeDetailsPage/EmployeeDetailsPage";
  
export const useEmployees = () => {
    return useQuery<EmployeeDetails[]>('employees', async () => {
        const response = await fetch('http://localhost:8080/employees');

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        return response.json()
      })
}