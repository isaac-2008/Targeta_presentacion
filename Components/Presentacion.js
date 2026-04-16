import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Linking from 'expo-linking';

export default function Presentacion() {
  

  const abrirEnlace = () => {
    Linking.openURL('https://www.instagram.com/isaacfornerosaatt/'); 
  };

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://tn.com.ar/resizer/v2/franco-colapinto-gano-en-la-sprint-de-imola-en-la-f2-foto-x-formula2-OHA4LLKKGBCYLLOD6JRVV24MEY.jpg?auth=a8d308dbeb4863c5fa66a7847d60ec5ae3e2d1e75f7ae5800531479175f0b826&width=767' }} 
        style={styles.foto} 
      />
      
      <Text style={styles.nombre}>Hola, soy Isaac Fornero Saatt</Text>
      <Text style={styles.info}>Edad: 17 años</Text>
      <Text style={styles.descripcion}>
        Estudiante de Las Varillas que estudia en la Escuela experimental PRoA y piloto de automovilismo.
      </Text>

      <TouchableOpacity style={styles.boton} onPress={abrirEnlace}>
        <Text style={styles.textoBoton}> Instagram</Text>
      </TouchableOpacity>

      

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
    marginBottom: 20, 
  },

  boton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});