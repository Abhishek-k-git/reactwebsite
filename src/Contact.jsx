import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const OnChange = (event) =>{
        const {name, value} = event.target;
        setData( (PreValue) =>{
            return {
                ...PreValue,
                [name] : value,
            };
        });
    };

    const FormSubmit = (e) =>{
        e.preventDefault();
        alert (`Name: ${data.name}, Email: ${data.email}`)
    };

    return (
        <>
            <div className="container py-5">
                <form onSubmit = {FormSubmit} >
                    <div className="row">
                        <div className="form-group row my-5">
                            <label for="Name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={data.name} onChange={OnChange} />
                            </div>
                        </div>
                        <div className="form-group row my5">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                              <input type="email" className="form-control" placeholder="Email@mail.com" id="inputEmail3" name="email" value={data.email} onChange={OnChange} />
                            </div>
                        </div>
                        <div className="form-group my-5">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" name="submit" value={data.message} onChange={OnChange} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;