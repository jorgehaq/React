
import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches.js';


export function LaunchList() {

    const [launches, setLaunches] = useState('');

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log);

    }, []);

    return (<>
        <Heading as="h1" size="sm" m={4}>SpaceX Launches</Heading>
        <section>
            {
                launches.map((launch) => (
                    <LaunchItem key={launch.flight_number} {...launch} />
                ))
            }
        </section>
    </>
    )
}      