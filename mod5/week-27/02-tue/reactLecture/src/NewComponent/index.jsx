import React from 'react';



const NewComponent = () => {
    const myName = "Sam";


    // JSX - > REQUIRES ARRAYS TO LOOP
    // const spacing = [null, null,null]
    const spacing = new Array(50).fill(null);
    return (
        <>
            {spacing.map(el => (
                <div>
                    <p>{myName}</p>
                </div>
            ))}
        </>
    );
}

export default NewComponent;
