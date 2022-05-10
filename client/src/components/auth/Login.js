import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import logoSVG from '../../img/mascota01.svg';



const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e=> {
    e.preventDefault();
   
        console.log('success')
  
  };

  return (
  <Fragment>
    <div className="logincontainer">
      <img src={logoSVG} height="1080px"/>
      <div className="containerlogin">
        <div className="containerfields" style={{display: "flex"}}>
          <form onSubmit={(e=> onSubmit(e))} className="form">
          <div className='form-group'>
                <p>Correo Electronico</p>
            </div>
            <div className='form-group'>
              <input type="text" placeholder="Correo electronico" name='email' value={email} onChange={e => onChange(e)} required />
            </div>
            <div className='form-group'>
                <p>Contraseña</p>
            </div>
            <div className='form-group'>
            <input type="password" placeholder="contraseña" name='password' value={password} onChange={e => onChange(e)} required />
            </div>
            <input type='submit' className='btn btn-primary' value='Iniciar Sesion'/>
            <div className="containerenlaces">
            <Link to="#" className="textos-enlace">¿Olvidaste tu contraseña?</Link>
            <Link to="/register" className="textos-enlace">Crear cuenta</Link>
        </div>
        </form>           
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default Login