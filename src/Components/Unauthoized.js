import React from "react";

export const Unauthorized = () => {
    return (
      <div
        className="mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="py-4 px-4 lead text-muted"
          style={{
            border: "5px solid grey",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginTop: "250px",
          }}
        >
          <i>
            {" "}
            <b>You do not have access to this page </b>
          </i>
        </div>
      </div>
    );
  };