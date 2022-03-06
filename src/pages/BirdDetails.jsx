// import { MapComponent } from './MapComponent';

import React from 'react';
import audio from '../assets/audio.svg';
export const BirdDetails = ({ bird }) => {
  const lat = bird.location.lat;
  const lng = bird.location.lng;
  const zoom = 4;
  console.log(bird);
  function playSound(url) {
    let sound = new Audio(url);
    sound.play();
  }
  return (
    <section className='birdDetails'>
      {bird ? (
        <div>
          <div className='bird-header'>
            <div className='main-header'>
              <h1>{bird.name}</h1>
            </div>
            <div className='second-header'>
              <img
                onClick={() => playSound(bird.sound)}
                className='audio'
                src={audio}
                alt='audio'
              />
              <h2>
                Location: {lat} , {lng}
              </h2>
            </div>
          </div>
          <div className='bird-details'>
            <img className='bird-pic' src={bird.image} alt={bird.name} />
            <img
              className='map'
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=4&size=400x400&maptype=roadmap&markers=color:red%7Clabel:%7C${lat},${lng}&key=AIzaSyDtlDaW_mjPqd70Gqryet8e-azrySuneyw`}
              alt='Map'
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
