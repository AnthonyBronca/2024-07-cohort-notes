import React from 'react';
import students from './students';
import { useNavigate } from 'react-router-dom';
/*
A single student looks like
  {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 38,
        courses: ['Math 1', 'Science 1', 'English 1']
    },

*/


const StudentsList = ({students}) => {
    // students is an array of student objects

    const navigate = useNavigate();

    const goToStudent = (studentName) => {

        navigate(`/students/${studentName}`)
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>

            <h1>Students at App Academy</h1>
            <div className='listOfStudents'>
                {students.map((studentObj, idx) => (
                    <div
                        onClick={()=> goToStudent(`${studentObj.firstName}-${studentObj.lastName}`)}
                        style={{
                            border: "1px solid white", margin: '5px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '5px'
                        }}
                        key={`${idx}-${studentObj.firstName}`}>
                        <span>{
                        `${studentObj.lastName}, ${studentObj.firstName}`
                        }</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentsList;
