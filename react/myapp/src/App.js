import Header from './components/header';
import Aside from './components/aside';

import Carrusel from './components/carrusel';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header nombre="Israel" apellido="Palma" />
            <Aside />
            <Carrusel />
        </div>
    );
}

export default App;
