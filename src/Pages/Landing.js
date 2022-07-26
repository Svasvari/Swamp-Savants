import React from 'react';
import ReactPlayer from 'react-player';

const Landing = () => {
    return (
        <div className='videoContainer'>
            <ReactPlayer className="video" id="video" controls={true} on url="https://youtu.be/iC6rWNpWStE" />
        </div>

    );
};

export default Landing;