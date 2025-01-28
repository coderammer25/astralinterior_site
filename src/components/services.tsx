import React from 'react';
import ServicesComponent from './home-page/services';
import Transform from './home-page/transform';

const Services = () => {
    return (
        <div>
           <div className='flex justify-start mx-[70px] mt-10'>
             <h1 className='lg:text-8xl lg:font-normal'>SERVICES WE <br /> <span className='font-playfair lg:font-thin'>OFFER</span> </h1>
           </div>
           <ServicesComponent />
            <Transform />
        </div>
    );
};

export default Services;