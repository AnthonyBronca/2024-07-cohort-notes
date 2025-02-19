import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
/*
   {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 38,
        courses: ['Math 1', 'Science 1', 'English 1']
    },

*/


const StudentsList = ({students}) => {

    const navigate = useNavigate();


    const goToStudentPage = (studentName) => {
        navigate(`/students/${studentName}`)
    }

    console.log(students);

    return (
        <div className='student-list-container'>
            {
                students.map((studentObj, idx) => (
                    <div
                        onClick={()=> goToStudentPage(`${studentObj.firstName}-${studentObj.lastName}`)}
                        style={{
                            borderBottom: '1px solid white',
                            paddingBottom: '5px',
                            cursor:'pointer'
                        }}
                    >
                        <span>{`${studentObj.lastName}, ${studentObj.firstName}`}</span>
                    </div>
                ))
            }

            <span>Jane Doe</span>
        </div>
    );
}

export default StudentsList;
