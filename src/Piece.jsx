import React from 'react';
import { NavLink } from 'react-router-dom';

const Piece = (Props) => {
    return (
        <>
            <div className="div_contain">
                <div className="left_cont">
                    <h1>Welcome to <span>{Props.title}</span></h1>
                    <p>We are highly proficient<br></br> in the field of <span>web development</span>,<br></br> <span>ux</span> and <span>ui</span> designing.</p><br></br>
                    <div className="share_cont">
                        <NavLink exact to="#" ><i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize:"35px",color:" #10a36b"}}></i></NavLink>
                        <NavLink exact to="#" ><i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize:"35px",color:" #10a36b"}}></i></NavLink>
                        <NavLink exact to="#" ><i className="fa fa-twitter-square" aria-hidden="true" style={{fontSize:"35px",color:" #10a36b"}}></i></NavLink>
                        <NavLink exact to="#" ><i className="fa fa-youtube-square" aria-hidden="true" style={{fontSize:"35px",color:" #10a36b"}}></i></NavLink>
                    </div>
                </div>
                <div  className="right_cont">
                    <img src={Props.imgsrc} alt={Props.title} />
                </div>
            </div>
        </>
    );
};

export default Piece;