import React from 'react';
import Reviews from '../Reviews/Reviews';

const Spots = () => {

    console.log('hello world')
    const spots = {
        id: 1,
        userId: 2,
        address: "123 Spongebob way",
        city: "Bikini Bottom",
        state: "Hawaii",
        Reviews: [
            {
                id: 1,
                stars: 3,
                userId: 1,
                review: "This was such a nice vacation"
            },
            {
                id: 2,
                stars: 1,
                userId: 2,
                review: "This place was doodoo 💩💩💩💩"
            },
            {
                id: 3,
                stars: 5,
                userId: 3,
                review: "I booked this place by accident lolol"
            },
        ]
    }


    return (
        <>
            <h1>{spots.address}</h1>
            <h2>{`${spots.city}, ${spots.state}`}</h2>
            {
                spots.Reviews.map((review, idx) => (
                    <div key={`${idx}-${review.id}-${review}`}>
                        <Reviews reviewObj={review} />
                    </div>
                ))
            }
        </>
    );
}

export default Spots;
