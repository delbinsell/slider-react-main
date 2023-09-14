import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PruebasHooks = ({ contador, setContador }) => {
  const arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://www.ucatalunya.edu.co/img/blog/los-mejores-lenguajes-de-programacion-en-el-desarrollo-web-y-su-importancia-en-la-era-digital.jpg",
    "https://www.nextibs.com/wp-content/uploads/2021/12/seguridad-informatica-1024x439.jpeg.webp"
  ];

  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(arr[contador]);
  }, [contador]);

  const handleNext = () => {
    // Verificar si el contador no está en la última imagen
    if (contador < arr.length - 1) {
      setContador(contador + 1);
    }
  };

  const handlePrevious = () => {
    // Verificar si el contador no está en la primera imagen
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    contadorBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flechaIzquierda: {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    },
    flechaDerecha: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    },
    imagen: {
      maxWidth: '100%',
      maxHeight: '550px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contadorBadge}>
        <h4>{contador}</h4>
      </div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.flechaIzquierda}
        onClick={handlePrevious}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        style={styles.flechaDerecha}
        onClick={handleNext}
      />
      <img
        src={img}
        alt=""
        style={styles.imagen}
      />
    </div>
  );
};

export default PruebasHooks;