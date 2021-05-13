import React from 'react';

const UserDetail = (props) => {
    // console.log(props.userIn);
    // const [fullName] = props.userIn;
    return (
        <div>
            <h2>Name: {props.userIn}</h2>
        </div>
    );
};

export default UserDetail;