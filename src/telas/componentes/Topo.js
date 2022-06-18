import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

import Texto from '../../components/Texto';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return (
    <>
      <Texto style={estilos.titulo}> {titulo} </Texto>
      <Image source={topo} style={estilos.topo} />
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    marginTop: 50,
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});
