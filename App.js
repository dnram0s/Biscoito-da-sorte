import React, {Component} from 'react';
import {Image, View, Text, StyleSheet,TouchableOpacity} from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('/assets/biscoitofechado.jpg')
        };

        this.abrirBiscoito = this.abrirBiscoito.bind(this);
        this.voltar = this.voltar.bind(this);

        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }

    abrirBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        this.setState({
            textoFrase: this.frases[numeroAleatorio],
            img: require('/assets/biscoitoaberto.jpg')
        })
    
    }
    voltar(){
      this.setState ({
            textoFrase: '',
            img: require('/assets/biscoitofechado.jpg')
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Image source={this.state.img} style={style.imgStyle} />
                <Text style={style.textoFrase}>"{this.state.textoFrase}"</Text>
                <TouchableOpacity style={style.btn} onPress={this.abrirBiscoito}>
                    <View style={style.btnArea}>
                        <Text style={style.btnTexto}>Abrir o biscoito</Text>
                    </View>
                </TouchableOpacity>
\n
                <TouchableOpacity style={style.btn} onPress={this.voltar}>
                    <View style={style.btnArea}>
                        <Text style={style.btnTexto}> Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoFrase: {
        textAlign: 'center',
        fontSize: 25,
        margin: 35,
        color: '#aabbcc',
        fontStyle: 'italic'
    },
    imgStyle:{
        width: 350,
        height: 350
    },
    btn:{
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25
    },
    btnArea:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#aabbcc'
    }
});