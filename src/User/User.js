import React, { useState } from 'react';


const User = (props) => {
    // console.log(props.user);
    const {name, email, picture, website, phone} = props.user;
    const fullName = [name.first + ' ' + name.last];
    
    const [mobile, setMobile] = useState('');

    const addMember = props.addMember;
    
    const showPhone = () => setMobile(phone);
    return (
        <div style={{border: '1px solid #333'}} className="content p-4 d-flex mb-4">
            <div className="left">
                <img src={picture.large} alt="" />
            </div>
            <div className="right ms-4">
                <h2>Name: {fullName}</h2>
                <p>Email: {email}</p>
                <p><a target="_blank" href={website}>Learn more about me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showPhone}>Show phone</button> 
                <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;