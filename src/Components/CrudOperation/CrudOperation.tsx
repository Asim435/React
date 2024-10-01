import { useEffect, useState } from 'react';
import '../To_Do_List/Task.css';
import CrudServices from '../../Services/CrudServices';
import config from '../../Configuration/Configuration';
import { Row, Col, Container, Table } from 'react-bootstrap';
const service = new CrudServices();
export interface empDataType {
    empName: string
    phoneNo: number | null
    salary: number | null
    designation: string


}
export default function CrudOperation() {
    const [getEmpName, setEmpName] = useState<string>("");
    const [getEmpSalary, setEmpSalary] = useState<number | null>(null);
    const [getData, setData] = useState<any[]>([]);
    const [getEmpDesignation, setEmpDesignation] = useState<string>("");
    const [btnText, setBtnText] = useState<string>("Add");
    const [updateId, setupdateId] = useState<number>(0);
    const [getPhoneNo, setPhoneNo] = useState<number | null>(null);
    const [alert, setalert] = useState<string>("");

    const deleteEmp: any = (id: number) => {
        service.deleteRecord(id)
            .then((response: any) => {
                console.log("Employee deleted successfully:", response.id);
                setalert("Employee deleted successfully:")

                fetchData();
            })
            .catch((error: any) => {
                console.error("Error deleting employee:", error);


            })
    };
    const updateEmp = (empName: string, designation: string, empPhoneNo: number, empSalary: number, id: number) => {
        setEmpName(empName);
        setEmpSalary(empSalary);
        setPhoneNo(empPhoneNo);
        setEmpDesignation(designation);
        setBtnText("update")
        setupdateId(id);
        console.log("id", updateId)
    }
    const addEditEmployee = () => {
        if (!getEmpName || !getEmpDesignation || !getPhoneNo || getEmpSalary === null) {
            console.log("Fill all the fields.");
            return;
        }

        const data: empDataType = {
            empName: getEmpName,
            phoneNo: getPhoneNo,
            salary: getEmpSalary,
            designation: getEmpDesignation
        };
        // const updateData: any = {
        //     id: updateId,
        //     empName: getEmpName,
        //     phoneNo: getPhoneNo,
        //     salary: getEmpSalary,
        //     designation: getEmpDesignation

        // }

        // console.log("updateData after", updateData);
        if (btnText === "Add") {
            service.createRecord(data)
                .then((response: any) => {
                    console.log("Employee added successfully:", response.data);
                    setalert("Employee added successfully:")
                    // Optionally, fetch the data again to update the list
                    fetchData();
                })
                .catch((error: any) => {
                    console.error("Error adding employee:", error);
                });
        }
        else {
            console.log(updateId)
            service.updateRecord(updateId, { ...data, id: updateId })
                .then((response: any) => {
                    console.log("Employee updated successfully:", response.data);
                    setalert("Employee updated successfully:")

                    fetchData();
                })
                .catch((error: any) => {
                    console.error("Error updating employee:", error);
                });
            setBtnText("Add")
        }
        setEmpName("");
        setEmpDesignation("")
        setPhoneNo(null)
        setEmpSalary(null)


    };

    const fetchData = async () => {
        try {
            const response = await fetch(config.getRecord);
            console.log(response.status);
            console.log(response.ok);
            const empData = await response.json();
            setData(empData);
        } catch (error) {
            console.error('Fetching data failed', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <section>
            <Container className='Container'>
                <Row className="Head">
                    <h1>Employee Data</h1>
                </Row>
                <Row className='Task'>
                    <div className='AddData' style={{ textAlign: 'center' }}>

                        <label htmlFor="empName">Employee Name</label><br />
                        <input type="text" id="empName" onChange={(e) => setEmpName(e.target.value)
                        } value={getEmpName} /><br />

                        <label htmlFor="phoneNo">Phone No</label><br />
                        <input type="text" id="phoneNo" onChange={(e) => setPhoneNo(Number(e.target.value))} value={getPhoneNo ?? ' '} /><br />

                        <label htmlFor="salary">Salary</label><br />
                        <input type="text" id="salary" onChange={(e) => setEmpSalary(Number(e.target.value))} value={getEmpSalary ?? ''} /><br />

                        <label htmlFor="designation">Designation</label><br />
                        <input type="text" id="designation" onChange={(e) => setEmpDesignation(e.target.value)} value={getEmpDesignation} /><br />

                        <button type="button" onClick={() => {


                            addEditEmployee();

                        }}>{btnText}</button>
                        <p style={{ color: 'darkgreen' }}>{alert}</p>
                    </div>
                    <Row >
                        <Table responsive variant="dark">
                            <thead >

                                <tr>
                                    <th>ID </th>
                                    <th>EmpName</th>
                                    <th>PhoneNo</th>
                                    <th>Salary</th>
                                    <th>Designation</th>
                                    <th>EditDelete</th>
                                </tr>

                            </thead>
                            <tbody>
                                {getData.map((item: any) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.empName}</td>
                                        <td>{item.phoneNo}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.designation}</td>
                                        <td>
                                            <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteEmp(item.id)}></i>
                                            <i className="fa-regular fa-pen-to-square" onClick={() => updateEmp(item.empName, item.designation, item.phoneNo, item.salary, item.id)} ></i>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>

                    </Row>

                </Row>
            </Container>
        </section>
    );
}
