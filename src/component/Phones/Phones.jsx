import React from 'react';
import PhoneCard from './PhoneCard';

const Phones = ({phones}) => {
    // console.log(phones)
    return (
        <div>
            <h1 className='text-3xl text-center my-10'>All Phones</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                {
                    phones?.map( phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;