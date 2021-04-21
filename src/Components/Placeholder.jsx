import React from 'react';
import fibonacci from '../images/fibonacci.jpeg';
import '../styles.scss';

export default function Placeholder() {
  return (
    <div className="placeholder">
      <h4>Welcome to the Fibonacci Generator</h4>
      <p>I have always been intrigued by Fibonacci sequences and their appearance in nature.</p>
      <p>This project was first inspired by a challenge to produce an algorithm which returned a Fibonacci sequence.</p>
      <p>Add React, Express and Postgresql to create the Fibonacci Generator!</p>
      <div className="image-wrapper">
      <img src={fibonacci} alt="fibonacci" />
      <p>The Golden Ratio in nature</p>
      </div>
    </div>
  )
}