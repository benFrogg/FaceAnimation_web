import React from 'react';
import ImageUploader from './ImageUploader';
import './Animator.css';
import FeatureSelection from './FeatureSelection';
import Output from './Output';


function Animator() {
  return (
    <div className="AnimatorFrame">
        <h1>Animator</h1>
        <div className="Contents">
          <ImageUploader />
          <FeatureSelection />
          <Output />
        </div>
    </div>
  )
}

export default Animator