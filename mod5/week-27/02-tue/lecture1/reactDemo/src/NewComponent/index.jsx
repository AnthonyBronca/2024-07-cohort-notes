import React from 'react';

const NewComponent = () => {

    const spacing = new Array(10).fill(null);
    const newName = "anthony";

    return (
        <div>
            {spacing.map((el) => (
                <div>
                    <span>{newName}</span>
                </div>
            ))}
        </div>
    );
}

export default NewComponent;
