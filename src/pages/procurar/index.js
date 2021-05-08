import React from "react";
import './index1.css';
import { Link } from 'react-router-dom'


export default function Procurar() {
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
        Procurar
      </h3>
      <form>  
        <div class='container1'  style={{width: '50%', position: 'relative'}}>  
          <input type='search' id='busca' name='q' style={{border: 'none'}}/>
          <button type='submit'  style={{border: 'none', height: '100%', width: '50px', position: 'absolute', top: '0', right: '0'}}>OK</button>
        </div>

      </form>



      <div className='container1' style={{border: '1px solid #dddddd', marginBottom: '10px'}}>
        <div className='avatar'>
          <img  className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>

        <div className='container1'>
          <p>
            Lorem ipsu jaksssss nsak jaskdh kjawjh dkagywd wambvwsakud sajkhd 
          </p>
        </div>
        <div className='button'>
          <Link to="/detalhes/:id">
          <button className='btn' style={{border: 'none', background: '#299BE8'}}>
            Ver Vaga
          </button>
          </Link>
        </div>
      </div>



      <div className='container1' style={{border: '1px solid #dddddd', marginBottom: '10px'}}>
        <div className='avatar'>
          <img  className='user' src='' alt='' />
          <h3>Nome Usuario</h3>
        </div>

        <div className='container1'>
          <p>
            Lorem ipsu jaksssss nsak jaskdh kjawjh dkagywd wambvwsakud sajkhd 
          </p>
        </div>
        <div className='button'>
          <Link to="/detalhes/:id">
          <button className='btn' style={{border: 'none', background: '#299BE8'}}>
            Ver Vaga
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
