# Explicação linha a linha
Index.tsx é um arquivo typescript(basicamente um javascript com tipagem)
.ts geralmente
.tsx -> react

import {Text, View, StyleSheet} from 'react-native';
View -> para renderizar (comporta-se como <div />)
Text -> para escrever texto
StyleSheet -> componente de estilo
> Componente é um 'atalho' para o codigo que é a ser executado


<Text style={styles.text}> Home screen</Text>
Styles.text -> chamando o estilo styles.text 


const styles = StyleSheet.create({
    text:{
        color: "#fff"
    }
})

## Routing

_layout.tsx -> arquivo de layout(tipo uma janela)

<Link href="about">Click me</Link>
> Href -> Hypertext reference

Em algum momento pode não ter a pagina

+not-found.tsx -> + é uma rota global
por que criar (tabs) -> organização 
parenteses usa para proteção forçada -> rota privada, não pública 

expo-image -> permite usar o componente para chamar uma image 
mock -> placeholder dados db


import { Image} from 'expo-image';
const PlaceholderImage = require('@/assets/images/background-image.png');

## adding images

@ -> substituto do "." (pasta local)

import {Image, type ImageSource} from 'expo-image';
type ImageSource -> não tenho imagem ainda, então to colocando

type Props = {
    imgSource: ImageSource;
};

tipo instanciando -> tipo: Carro = new carro;


export default function ImageViewer({ imgSource }: Props)

