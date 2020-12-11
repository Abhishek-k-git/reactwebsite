import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="container py-5" >
                <div className="row row-cols-1 row-cols-md-2">
                    {
                        Sdata.map((value, index) => {
                            return <Card 
                            key = {index}
                            title = {value.title}
                            imgsrc = {value.imgsrc}
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Service;