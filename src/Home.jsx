import React from "react";
import Piece from "./Piece";
import home from "../src/images/home.svg";

const Home = () => {
    return (
        <>
            <Piece 
            title = "Home Page"
            imgsrc = {home}
            />
        </>
    );
};

export default Home;