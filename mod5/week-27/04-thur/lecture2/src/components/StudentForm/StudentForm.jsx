import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Home/NavBar';
import StudentsList from '../Home/StudentsList/StudentsList';
import students from '../Home/StudentsList/students';

/*

 {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 38,
        courses: ['Math 1', 'Science 1', 'English 1']
    },

*/


const StudentForm = () => {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [age, setAge] = useState("");
    const [currStudents, setCurrStudents] = useState(students)

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        course1: "",
        course2: "",
        course3: ""
    })

    // custom navigation function

    const handleInputChange = (e, key) => {
        setForm((prev) => {
            const newPrev = {...prev};
            newPrev[key] = e.target.value
            return newPrev;
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);


        setCurrStudents([form, ...currStudents]);

        setForm({
            firstName: "",
            lastName: "",
            age: "",
            course1: "",
            course2: "",
            course3: ""
        })
    }


    return (
        <>
            <NavBar />
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h1>Add a Student Form</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            placeholder='First Name'
                            value={form.firstName}
                            onChange={(e)=> handleInputChange(e, "firstName") }
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Last Name'
                            value={form.lastName}
                            onChange={(e) => handleInputChange(e, "lastName")}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Age'
                            value={form.age}
                            onChange={(e) => handleInputChange(e, "age")}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Course 1'
                            value={form.course1}
                            onChange={(e) => handleInputChange(e, "course1")}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Course 2'
                            value={form.course2}
                            onChange={(e) => handleInputChange(e, "course2")}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Course 3'
                            value={form.course3}
                            onChange={(e) => handleInputChange(e, "course3")}
                        />
                    </div>
                    <button>Add Student</button>
                </form>
                <StudentsList students={currStudents} />
            </div>
        </>
    );
}

export default StudentForm;
