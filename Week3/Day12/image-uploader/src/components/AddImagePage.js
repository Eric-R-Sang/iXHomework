import React from "react";
import { useState } from "react";

import FileService from "../services/file.service";

import ImagesService from "../services/images.service";

import { useNavigate } from "react-router-dom";

import { Image } from "../models/Image";

export default function AddImagePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload progress: ", progress);
      });

      await ImagesService.createImage(
        new Image(null, name, downloadUrl)
      );
      
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }
  return (
    <div className="container mt-4">
      {/* <div className="d-flex justify-content-end">
        <Link to="/add-image">Add Image</Link>
      </div> */}

      <div className="container my-5">
        <div className="card card-body">
          <h1>Add Image</h1>
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Cover Image</label>
              <input
                onChange={onFileSelected}
                type="file"
                className="form-control"
                multiple
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Image Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter image title"
              ></input>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Add Image
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
