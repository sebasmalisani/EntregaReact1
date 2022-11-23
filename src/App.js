import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'


const App = () => {
  return (
    <>
      <Navbar />

      <ItemListContainer greeting="Buenas tardes ItemListContainer" />


    </>
  )
}

export default App;