import React, { Component } from 'react';
import cronometro from './assets/cronometro.png'
import './estilo.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botaoText: 'VAI'
        };
        this.timer = null;
    }

    iniciar = () => {
        let state = this.state;

        if (this.timer !== null) {
            // INICIAR O CRONOMETRO
            clearInterval(this.timer);
            this.timer = null;
            state.botaoText = 'INICIAR';

        } else {
            // PAUSAR O CRONOMETRO
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            state.botaoText = 'PAUSAR';
        }

        this.setState(state);
    }

    //LIMPAR O CRONOMETRO
    zerar = () => {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botaoText = 'INICIAR';
        this.setState(state);
    }

    render() {

        return (
            <div className="container" >

                {/* IMAGEM DO CRONOMETRO */}
                <img src={cronometro} className="img" />

                {/* MINUTOS DO CRONOMETRO */}
                <a className="timer">{this.state.numero.toFixed(2)}</a>

                {/* BOTÕES DE INICIAR E ZERAR CRONOMETRO */}
                <div className="areaBtn">
                    <a className="botao" onClick={this.iniciar}>{this.state.botaoText}</a>
                    <a className="botao" onClick={this.zerar}>ZERAR</a>
                </div>
            </div>
        );
    }
}

export default App;