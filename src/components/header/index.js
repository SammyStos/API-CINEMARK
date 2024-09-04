import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './style';

export default function Header() {
  return (
    <View style={styles.viewHeader}>
      <View style={styles.navbar}>
       



      <Text style={styles.textHeader}>CINEMARK</Text>
     
      <TouchableOpacity style={styles.navItem}>
          <Feather name='film' size={15} color="#FFF" />
          <Text style={styles.navText}>Programação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name='star' size={15} color="#FFF" />
          <Text style={styles.navText}>Cinemark Club</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name='play-circle' size={15} color="#FFF" />
          <Text style={styles.navText}>Sua Sessão</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}