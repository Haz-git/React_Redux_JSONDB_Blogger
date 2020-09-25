import React from 'react';
import backdrop from '../../imgs/notes_backdrop.jpg';
import './backDrop.css';

//This component serves as the backdrop image 

const BackDrop = () => {
    return (
        <div className='backdrop-container'>
            <div className='img-container'>
                <img src={backdrop}></img>
            </div>
            <div className='backdrop-words-container'>
                <h1>Welcome to Notely.</h1>
                <h2>Share Notes. Collect Notes. Learn Better.</h2>
            </div>
        </div>
    )
}

export default BackDrop;