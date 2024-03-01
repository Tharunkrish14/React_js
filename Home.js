import React from 'react';

function home(props) {
    return (
        <div>
            <h1>
                Welcome to  - {props.name} {props.age} </h1> <p>{props.obj.department}-{props.obj.college}</p>
                {props.Arr.map((data)=>{return(<p>{data}</p>)})}
            
        </div>
    );
}

export default home;