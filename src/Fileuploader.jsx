// src/FileUploader.js
import React, { useState } from 'react';


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please upload a valid image file');
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setError('No file selected for upload');
      return;
    }

    // Handle the file upload logic here (e.g., sending to a server)
    console.log('Uploading:', selectedFile);
    alert('File uploaded successfully!'); // Placeholder for actual upload logic
  };

  return (
    <div className="uploader">
        <h2>File Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
      {selectedFile && (
        <div className="preview">
          <h3>Preview:</h3>
          <img src={selectedFile} alt="Selected" />
        </div>
      )}
      <button className="upload-button" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
