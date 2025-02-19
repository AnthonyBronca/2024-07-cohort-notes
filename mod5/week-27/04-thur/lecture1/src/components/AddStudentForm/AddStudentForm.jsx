import React, { useState } from 'react';
import NavBar from '../NavBar';
import students from '../Home/StudentsList/students';
import StudentsList from '../Home/StudentsList';

/*

A Student has the following:
firstName
lastName
age
courses[] -> up to 3

*/



const AddStudentForm = () => {

    const [currStudents, setCurrStudents] = useState(students);

    // Hooks

    // MANUALLY CREATING A BUNCH OF USE STATES
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");


    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        course1: "",
        course2: "",
        course3: ""
    })

    //  e -> needed for the event, fieldName needed for which key we want from the form
    const handleInputChange = (e, fieldName) => {

        setForm((prev) => {
            const newForm = { ...prev };
            newForm[fieldName] = e.target.value;
            return newForm
        })

    }

    // ----- Javascript -----


    const submitStudent = (e) => {
        e.preventDefault();
        console.log(form);
        setCurrStudents([form, ...currStudents])
    }


    // ------- JSX ------
    return (
        <>
            <NavBar />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h1>Add a New Student</h1>

                <form onSubmit={(e) => submitStudent(e)}>
                    <div>
                        <input
                            value={form.firstName}
                            placeholder='First Name'
                            onChange={(e) => handleInputChange(e, "firstName")}
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
                            value={form[`course1`]}
                            placeholder={`Course 1`}
                            onChange={(e) => handleInputChange(e, `course1`)}
                        />
                    </div>
                    <div>

                        <input
                            value={form[`course2`]}
                            placeholder={`Course 2`}
                            onChange={(e) => handleInputChange(e, `course2`)}
                        />
                    </div>
                    <div>

                        <input
                            value={form[`course3`]}
                            placeholder={`Course 3`}
                            onChange={(e) => handleInputChange(e, `course3`)}
                        />
                    </div>
                    {/* {
                        coursesList.map((_el, idx) => (
                            <div key={`${idx}-${new Date()}`}>
                                <input
                                    value={form[`course${idx+1}`]}
                                    placeholder={`Course ${idx + 1}`}
                                    onChange={(e) => handleInputChange(e, `course${idx + 1}`)}
                                     />
                            </div>
                        ))
                    } */}

                    <button>Submit</button>
                </form>
                <StudentsList students={currStudents} />
            </div>
        </>
    );
}

export default AddStudentForm;
