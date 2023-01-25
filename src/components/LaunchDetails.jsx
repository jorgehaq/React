import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import * as API from '../services/launches';


export function LaunchDetails(){

    const [launch,setLaunch] =useState({});

    const { launchId } = useParams();

    useEffect(() =>{
        API.getLaunchByFlightNumber(launchId)
            //.then(res => setLaunch(res.data))
            //.catch(err => console.log(err));
            .then(setLaunch(res.data))
            .catch(console.log(err));

    },[launchId]);

    return (
        <div>
           <pre>JSON.stringify(launch)</pre>
        </div>
    );
}