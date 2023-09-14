import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES=[
    {
        id :'p1',
        title: 'Empire State Building',
        description : "One of the most famous sky scrapers in the world!",
        imageUrl: 'https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=',
        address : '20 W 34th St., New York, NY 10001',
        location :{
            lat :40.7484445,
            lng:-73.9882393
        },
        creator:'u1'
    },
    {
        id :'p2',
        title: 'Empire State Building',
        description : "One of the most famous sky scrapers in the world!",
        imageUrl: 'https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=',
        address : '20 W 34th St., New York, NY 10001',
        location :{
            lat :40.7484445,
            lng:-73.9882393
        },
        creator:'u2'
    }
];


const UserPlaces = () =>{
    const userId=useParams().userId;
    const loadedPlaces=DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces;