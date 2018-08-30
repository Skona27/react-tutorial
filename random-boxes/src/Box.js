import React, { Component } from "react";
import "./Box.css";

const Box = ({color}) => {
    const style = {
        backgroundColor: color
    }
  
    return <div className="box" style={style} />
  }

export default Box;