import { Text, View, StyleSheet, Image, Pressable, ScrollView, Linking, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef } from 'react';

export default function Presentacion() {
  const [pressed, setPressed] = useState(false);
  const [longPressActivo, setLongPressActivo] = useState(false);
  const escala = useRef(new Animated.Value(1)).current;

  const abrirEnlace = () => {
    Linking.openURL('https://www.instagram.com/isaacfornerosaatt/');
  };

  const abrirGithub = () => {
    Linking.openURL('https://github.com/isaac-2008');
  };

  const handlePressIn = () => {
    setPressed(true);
    setLongPressActivo(false);
    Animated.spring(escala, {
      toValue: 0.93,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setPressed(false);
    Animated.spring(escala, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleLongPress = () => {
    setLongPressActivo(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>

          <Image
            source={{ uri: 'https://www.argentina.gob.ar/sites/default/files/20240518_121045.jpg' }}
            style={styles.foto}
          />

          <Text style={styles.nombre}>Hola, soy Isaac Fornero Saatt</Text>
          <Text style={styles.info}>Edad: 17 años</Text>

          <Text style={styles.descripcion}>
            Estudiante de Las Varillas que estudia en la Escuela Experimental PRoA y piloto de automovilismo y fan de Max Vertappen y Franco Colapinto.
          </Text>

          {longPressActivo && (
            <Text style={styles.mensajeLongPress}>
              ¡Mantuviste presionado! Toca brevemente para abrir el enlace.
            </Text>
          )}

          <Animated.View style={{ transform: [{ scale: escala }] }}>
            <Pressable
              style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
              onPress={abrirEnlace}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onLongPress={handleLongPress}
              hitSlop={{ top: 12, bottom: 12, left: 20, right: 20 }}
            >
              {({ pressed }) => (
                <Text style={styles.textoBoton}>
                  {pressed ? 'Abriendo...' : 'Instagram'}
                </Text>
              )}
            </Pressable>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: escala }] }}>
            <Pressable
              style={({ pressed }) => [styles.botonGithub, pressed && styles.botonGithubPresionado]}
              onPress={abrirGithub}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onLongPress={handleLongPress}
              hitSlop={{ top: 12, bottom: 12, left: 20, right: 20 }}
            >
              {({ pressed }) => (
                <Text style={styles.textoBoton}>
                  {pressed ? 'Abriendo...' : 'GitHub'}
                </Text>
              )}
            </Pressable>
          </Animated.View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scroll: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  info: {
    fontSize: 15,
    color: '#666',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  mensajeLongPress: {
    fontSize: 13,
    color: '#e67e00',
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  boton: {
    backgroundColor: '#C13584',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 12,
  },
  botonPresionado: {
    backgroundColor: '#8a1f5c',
  },
  botonGithub: {
    backgroundColor: '#24292e',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 12,
  },
  botonGithubPresionado: {
    backgroundColor: '#57606a',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
