import { Image } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import logo from './assets/SpaceX-Logo.png';

function App() {
  
  return (
    <div>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList/>} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
      
    </div>
  )
}


export default App;
