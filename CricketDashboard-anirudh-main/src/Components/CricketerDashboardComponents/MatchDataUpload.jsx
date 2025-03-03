import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function UploadMatchDataButton() {
  const phone = useSelector((state)=> state.cricketer.cricketerDetails?.phonenumber);
  const [id,setId]= useState();

  useEffect(()=>{
     const res =  fetch(`http://localhost:3000/api/GetIdByPlayerNumber?phonenumber=${phone}`);
     res.then((res)=>res.json()).then((data)=>setId(data[0]?.cricketerid));
  },[])
  // console.log(firstName);
  const handleUpload = async () => {
    try {
      const response = await fetch(`api/RetriveMatchData?id=${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}), // Send an empty body or modify as needed
      });

      const result = await response.json();
      if (response.ok) {
        alert("Match data uploaded successfully!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error uploading match data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-3 text-center">
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload Match Data
      </button>
    </div>
  );
}
