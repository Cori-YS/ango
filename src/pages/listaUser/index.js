import React from "react";
import './index.css';
import { Link } from 'react-router-dom'

export default function ListUser() {
  return (
    <>
      <h3
        style={{
          backgroundColor: '#fff',
          color: '#313174',
          textAlign: 'center',
          fontSize: '36px',
          marginTop: '70px'
        }}
      >
        Candidatos a Vaga
      </h3>
      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <Link to="/perfil-ver/:id">
          <button className='btn10'>
            Ver Perfil
          </button>
          </Link>
        </div>
      </div>

      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>


      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>

      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>

      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>

      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>

      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <button className='btn10'>
            Ver Perfil
          </button>
        </div>
      </div>
    </>
  );
}
