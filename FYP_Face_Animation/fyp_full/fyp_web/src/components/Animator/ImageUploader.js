import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './ImageUploader.css';

function ImageUploader() {
    const [image, setImage] = useState([]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImage (
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })

    return (
        <div className="image-uploader">
            <header className="image-header">
                <div {...getRootProps()} style={{border: "3px solid black", height:"300px", width:"250px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ? <p className="imageBoxHover">Drop Image Here</p> : <p className="imageBox">Drag n' Drop Image<br/>OR<br/><u>Browse Image</u></p>
                    }
                </div>
                <div>
                    {image.map((upFile) => {
                        return (
                            <div>
                                <img src={upFile.preview} alt="Preview" style={{width:"400px", height:"500px", border:"3px solid #fff"}} />
                            </div>
                        )
                    })}
                </div>
            </header>
        </div>
    )
}

export default ImageUploader;