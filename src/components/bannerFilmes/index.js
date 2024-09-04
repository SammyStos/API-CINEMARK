import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';


export default function BannerFilmes(){

    const imagem = Math.floor(Math.random() * 4 +1); 

    return(

        <>


 <Image style = {styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)}/>
 <Text style={styles.bannerText}>Em cartaz</Text>
        </>
    );

} 