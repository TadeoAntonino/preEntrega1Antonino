import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Esta es mí tienda de café" />
    </div>
  );
}

export default App;
