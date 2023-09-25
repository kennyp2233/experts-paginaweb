import InicioCss from '../styles/Inicio.css';
import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

function Inicio() {
    const [circulos, setCirculos] = useState([]);

    const generarCirculo = (e) => {
        const { clientX: x, clientY: y } = e;
        const nuevoCirculo = {
            key: uuidv4(), // Clave única para cada círculo
            x,
            y,
        };

        // Agrega el nuevo círculo a la lista de círculos
        setCirculos([...circulos, nuevoCirculo]);
    };

    // Utiliza useEffect para controlar la eliminación de círculos
    useEffect(() => {
        const timeoutIds = [];

        // Función para eliminar un círculo por su clave
        const eliminarCirculo = (key) => {
            setCirculos((prevCirculos) =>
                prevCirculos.filter((c) => c.key !== key)
            );
        };

        // Configura temporizadores para eliminar círculos
        circulos.forEach((circulo) => {
            const timeoutId = setTimeout(() => {
                eliminarCirculo(circulo.key);
            }, 300);
            timeoutIds.push(timeoutId);
        });

        // Limpia los temporizadores cuando el componente se desmonta o cuando cambia circulos
        return () => {
            timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        };

    }, [circulos]);

    return (
        <div className="pag" onClick={generarCirculo}>
            <h1>Experts Handling Cargo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae ab a illo tempora dolores sint libero voluptates at corporis porro ipsum atque itaque, hic culpa. Numquam pariatur aliquam suscipit?</p>

            {circulos.map((circulo) => (
                <div
                    key={circulo.key}
                    className="circulo"
                    style={{ left: circulo.x, top: circulo.y }}
                ></div>
            ))}
        </div>
    );
}

export default Inicio;