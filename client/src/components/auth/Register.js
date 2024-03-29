import logoSVG from '../../img/mascota01.svg';
import React, {Fragment, useState} from 'react';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
  });
  
  const { name, email, password, password2} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e=> {
      e.preventDefault();
      if(password !== password2){
        setAlert('la contraseña no coincide', 'danger');
      } else {
          console.log('success')
      }
  };

  return (
  <Fragment>
    <div className="logincontainer">
      <img src={logoSVG} height="1080px" />
      <div className="containerlogin">
        <div className="containerregister">
          <form onSubmit={(e=> onSubmit(e))} className="Form">
            <div className='form-group'>
                <p>Nombre</p>
            </div>
            <div className='form-group'>
                <input type="text" placeholder="name" name= 'name' value={name} onChange={e => onChange(e)} required/>
            </div>
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
            <div className='form-group'>
                <p>Confirmar Contraseña</p>
            </div>
            <div className='form-group'>
                <input type="password" placeholder="contraseña" name='password2' value={password2} onChange={e => onChange(e)} required />
            </div>
            <input type='submit' className='btn btn-primary' value='Registrar'/>
          </form>
        </div>
      </div>
    </div>
  </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, {setAlert})(Register);