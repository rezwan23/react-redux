import React from 'react'
import { useSelector } from "react-redux"


function Profile() {

    const user = useSelector( (state) => state.user.value )
    

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Age : {user.age}</p>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
        </div>
    )
}

export default Profile
