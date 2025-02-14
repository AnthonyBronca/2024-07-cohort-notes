import React from 'react';
import {useNavigate} from 'react-router-dom';

const StudentForm = () => {

    // This is your first hook ever <3
    const navigate = useNavigate();

    // custom navigation function
    const goToHome = () => {
        navigate("/");
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>To do! This site is under construction!</h1>
            <h2>Try coming back here later</h2>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    );
}

export default StudentForm;
