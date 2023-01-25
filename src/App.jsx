import { useState, useEffect } from 'react';

import { Heading, Image } from '@chakra-ui/react';

import logo from './assets/SpaceX-Logo.png';

import * as API from './services/launches.js';

import { LaunchItem } from './components/LaunchItem';



function App() {
  const [launches, setLaunches] = useState('');

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);

  }, []);


  return (
    <div>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="sm" m={4}>SpaceX Launches</Heading>
      <section>
        {
          launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))
        }
      </section>
    </div>
  )
}


export default App;
