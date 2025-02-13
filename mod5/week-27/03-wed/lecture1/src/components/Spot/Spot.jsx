import React from 'react';
import Reviews from '../Reviews/Reviews';

const Spot = () => {


    const dummyData = {
        id: 1,
        address: "123 Spongebob Way",
        city: "Bikini Bottom",
        state: "Hawaii",
        Reviews: [
            {
                id: 1,
                spotId: 1,
                review: "This is an awesome spot",
                star: 3
            },
            {
                id: 2,
                spotId: 1,
                review: "This place was doodoo 💩💩💩💩",
                star: 1
            },
            {
                id: 3,
                spotId: 1,
                review: "I booked the wrong spot oops",
                star: 5
            },
        ]
    }

  return (
    <>
      <h1>{dummyData.address}</h1>
      <h2>{`${dummyData.city}, ${dummyData.state}`}</h2>
      <div>
        {
            dummyData.Reviews.map((revObj, idx) => (
                <div key={`${idx}-${new Date()}`}>
                    <Reviews reviewObj={revObj}/>
                </div>
            ))

        }
      </div>
    </>
  );
}

export default Spot;
