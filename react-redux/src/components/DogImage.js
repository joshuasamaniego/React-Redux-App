import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getDogImage } from '../actions';

import "./DogImage.css";

const DogImage = ({ error, isFetching, dogImage, getDogImage }) => {
  useEffect(() => {
    getDogImage();
  }, []);

  const handleClick = ()=> {
    getDogImage();
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a Doggie for ya!</h2>;
  }

  console.log(dogImage);

  return (
    <div className="dog-image-container">
        <img src={dogImage} alt="random dog" className='dog-image'/>
        <button onClick={handleClick} className='button'>Get a new random Dog Pic</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dogImage: state.dogImage,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDogImage })(DogImage);