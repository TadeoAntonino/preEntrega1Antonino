import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import { NextUIProvider } from '@nextui-org/react'


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={  <ItemListContainer greeting="Nuestros Productos"/> } />
          <Route path='/category/:id' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
       
