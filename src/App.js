import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {orginals,action, comedy,HorrorMovies,RomanceMovies,trending} from './urls'
import Banner from './Components/banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={orginals} title='Netflix Orginals' />
      <Rowpost url={trending} title='Trending Movies' isSmall />
      <Rowpost url={action} title='Action Movies' isSmall />
      <Rowpost url={comedy} title='Comedy Movies' isSmall />
      <Rowpost url={HorrorMovies} title='Horror Movies' isSmall />
      <Rowpost url={RomanceMovies} title='Romance Movies' isSmall />


    </div>
  );
}

export default App;
