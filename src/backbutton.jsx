import React from "react";
import { useNavigate } from "react-router-dom";
import "./backbutton.css";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c24413"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></button>
    );
};

export default BackButton;
