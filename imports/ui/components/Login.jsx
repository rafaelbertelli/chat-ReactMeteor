import React, { Component } from 'react';

class Login extends Component {

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-sm-12'>
            <h1>Meteor + React Chat App</h1>

            {/* Nome de Usuário */}
            <div className="form-group">
              <input type="text" className="form-control" placeholder="User"/>
            </div>

            {/* Senha */}
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password"/>
            </div>

            {/* Botões de Login e Criação de Usuário */}
            <div className="btn-group">
              <button className="btn btn-success">Login</button>
              <button className="btn btn-info">Create User</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;