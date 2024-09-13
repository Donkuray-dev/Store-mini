import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "../elements/Stepper";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Header from "../elements/Header";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

export default function AdminUpload() {
  const [Img, setImg] = useState(null);

  // form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // drag and drop handler
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const fileSize = file.size;
      const fileWidth = file.width;
      const fileHeight = file.height;
      const ratio = fileWidth / fileHeight;
  
      if (fileSize > 1024 * 1024) { // 1MB limit
        alert("Image size exceeds 1MB");
        return;
      }
  
      if (ratio !== 3) { // 3:1 ratio limit
        alert("Image ratio must be 3:1");
        return;
      }
  
      if (file.type !== "image/png") { // PNG only
        alert("Only PNG images are allowed");
        return;
      }
  
      setImg({ preview: URL.createObjectURL(file), file });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const Navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    localStorage.setItem("Admin-upload Data", JSON.stringify(data))
    if (!Img) {
      alert("Please upload a brand logo.");
   
      return;
    }
   
    console.log("Uploaded Logo: ", Img.file);
    Navigate("/Admin-Shop-Type");
  };

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="user_login">
          <Stepper index={2} />
          <WrapperInner>
            <h2 className="text-center">Your Brand Information</h2>
            <UploadSection {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the logo here...</p>
              ) : (
                <div>
                  {Img ? (
                    <PreviewImage src={Img.preview} alt="Brand Logo Preview" />
                  ) : (
                    <div>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.025 15.06C28.5211 12.5066 27.1464 10.2073 25.1356 8.55487C23.1248 6.90245 20.6027 5.99941 18 6C13.665 6 9.9 8.46 8.025 12.06C5.82035 12.2982 3.78151 13.3428 2.30023 14.993C0.818957 16.6432 -0.000257553 18.7825 6.07391e-08 21C6.07391e-08 25.965 4.035 30 9 30H28.5C32.64 30 36 26.64 36 22.5C36 18.54 32.925 15.33 29.025 15.06ZM21 19.5V25.5H15V19.5H10.5L18 12L25.5 19.5H21Z"
                          fill="#2563EB"
                        />
                      </svg>
                      <UploadTitle>Upload Your Brand Logo</UploadTitle>
                      <UploadLimts>
                        PNG only 150px X 50px (ratio 3:1)
                      </UploadLimts>
                    </div>
                  )}
                </div>
              )}
            </UploadSection>
            {!Img && <UploadWarning>Brand Logo Cannot be empty</UploadWarning>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                title="Brand Name"
                type="text"
                register={register("Brandname", {
                  required: "BrandName is required",
                })}
                error={errors.Brandname}
              />
              <Input
                title="Tag Line"
                type="text"
                register={register("Tagline", {
                  required: "TagLine is required",
                })}
                error={errors.Tagline}
              />
              <Input
                title="Location"
                type="text"
                register={register("Location", {
                  required: "Location is required",
                })}
                error={errors.Location}
              />
              <BtnSection>
                <Btn title="Back" type="button" />

                <Btn title="Next" type="submit" />
              </BtnSection>
            </form>
          </WrapperInner>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const WrapperInner = styled.div`
  width: 100%;
  max-width: 435px;
  padding: 25px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 0px 2px gray;
`;

const UploadSection = styled.div`
  text-align: center;
  border: 2px dashed #2563eb;
  border-radius: 8px;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
width: 100%;
`;

const UploadTitle = styled.h3`
  font-size: 18px;
`;

const UploadLimts = styled.p`
  font-size: 12px;
  color: #1f2937cc;
`;

const UploadWarning = styled.p`
  font-size: 12px;
  color: #ff0c0c;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
`;

const BtnSection = styled.div`
  display: flex;
  gap: 20px;
`;

// Updated styles for the image preview
const PreviewImage = styled.img`
  width: 100%;
  height: 9rem;
  object-fit: contain;
  border-radius: 8px;
`;
