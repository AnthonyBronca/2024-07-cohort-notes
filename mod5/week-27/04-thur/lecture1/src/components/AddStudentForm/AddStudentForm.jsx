import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddStudentForm = () => {
// ----- Javascript -----
    // This is a hook!
    const navigate = useNavigate();

    // Custom function
    const goToHome = () => {
        // Us using the hook!
        navigate('/')
    }

    // ------- JSX ------
    return (
        // This is a JSX Div with inline-css styling
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>TODO: This page is under contruction</h1>
            <h2>Add a Student Form Coming soon!</h2>
            {/* This is a button with a custom function */}
            <button onClick={goToHome}>Go Back</button>
        </div>
    );
}

export default AddStudentForm;
