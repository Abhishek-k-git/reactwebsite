import React from 'react';
import Piece from "./Piece";
import aboutus from "../src/images/aboutus.svg";

const About = () => {
    return (
        <>
            <Piece 
            title = "About Us"
            imgsrc = {aboutus}
            />
        </>
    );
};

export default About;