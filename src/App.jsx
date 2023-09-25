import { Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';

import './styles/App.css';
import Inicio from './components/Inicio.jsx'
import NavBar from './components/NavBar.jsx'
import PagCommonsCss from './styles/PagCommons.css';

function App() {

    const navigate = useNavigate(); // Usa useNavigate para la navegación

    const aplicarAnimacion = () => {
        // Obtén todos los elementos con la clase 'pa'
        const elementosConClasePag = document.querySelectorAll('.pag');
        const root = document.getElementById('root');

        elementosConClasePag.forEach((elemento) => {
            elemento.classList.add('animar');
            root.style.overflow = "hidden";
            
        });
       
        setTimeout(() => {
            elementosConClasePag.forEach((elemento) => {
                elemento.classList.remove('animar');

                root.style.overflow = "visible"; 
            });
        }, 1000); 
    };

    React.useEffect(() => {
        aplicarAnimacion();
    }, [navigate]);

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />

            </Routes>
        </>
    );
}

export default App;
