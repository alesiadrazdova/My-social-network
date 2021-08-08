import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import './preloader.css'

export const Preloader = (props) => {
    return (
        <div className='preloader-wrapper'>
            <img alt='preloader' src={preloader} />
        </div>
    );
};