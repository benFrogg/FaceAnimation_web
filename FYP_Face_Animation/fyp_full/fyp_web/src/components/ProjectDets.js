import React from 'react'
import '../App.css';
import './ProjectDets.css';

function ProjectDets() {
  return (
    <div className='details'>
        <h1>Project Details</h1>
        <p>
            The purpose of this whole project is to create a facial animation software.
            <br/>It uses the AI technology to identify each image for processing.
            <br/>The task was to investigate and research the use of Generative Adversarial Networks (GANs) models.
            <br/>When given a facial image of a person, the system should be able to generate the image with selected features.
            <br/>At least 6 features should be applied and must have implementation of the GAN model.
            <br/>Our project has chosen 7 features ranging from Facial Expression, Head Movement, Eye Movement, Gender Customization, Face Aging, Anime-Style Image and Produce Audio.
            <br/>This project will contribute to automatic image generatin, computer vision, and computer graphics
            <br/> and demmonstrate the capability of modern AI technicaques. This project is related to Deep Learning,
            <br/>Neural Networks, Image Processing, and Programming.
            <br/><br/>The features below display examples and clicking it would bring you to the selected feature.
        </p>
    </div>
  )
}

export default ProjectDets