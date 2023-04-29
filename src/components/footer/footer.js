import React from "react";

export default function Footer() {
  return (
    <div style={{margin:"auto"}}>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{backgroundColor: "rgb(2 10 32 / 60%)",textAlign:"center",
          margin: "auto",
          bottom: 0,
          position: "relative",
          top:"200px",
          color:"white",
          width: "100%"}}
        >
          © 2023 Copyright
        </div>
      </footer>
    </div>
  );
}
