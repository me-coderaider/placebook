import React from "react";
import UsersList from "../components/UsersList";



const Users = () => {
    const USERS=[
        {
            id: "u1",
            name :"John Wick",
            image : "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
            places : 3

        }
    ];
    return (
        <UsersList items={USERS}/>
    )
}

export default Users;