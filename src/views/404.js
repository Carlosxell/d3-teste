import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return(
      <div className="errorPage">
        <h1 className='errorPage_title'>404 [ Página de Erro ]</h1>
        <p className='errorPage_text'>Desculpe, não conseguimos encontrar o que você procura.</p>
      </div>
    );
  }
}

export default ErrorPage;