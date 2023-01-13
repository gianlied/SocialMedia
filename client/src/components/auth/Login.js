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
    <div className='container-fluid logincontainer'>
      <div className='img-login cold-md-5'>
      <img className='o-img-masc' src={logoSVG}></img>
      </div>
      <div className='containerlogin'>
        <div className='container fields'>
          <form action='/action_page' className='login-form'>
          <label>Correo electronico</label>
          <input className='o-input' type="text" placeholder='Correo electronico'/>
          <label>contraseña</label>
          <input className='o-input' type="text" placeholder='Contraseña'/>
          <button className='botoniniciar'>Iniciar Sesion</button>
          <hr size="2px" width="100%" color='black' />
          <div className='containerenalces'>
            <Link to="#" className="textos-enlace">¿Olvidaste tu contraseña?</Link>
          </div>
          <div className='containerenalces'>
            <Link to="/register" className="textos-enlace">Crear cuenta</Link>
          </div>  
          </form>
        </div>
        <p>NOMBRE DE LA PAGINA </p>
    </div>
    </div>
  </Fragment>
  )
}
export default Login