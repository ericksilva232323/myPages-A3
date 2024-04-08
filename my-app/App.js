import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Linking} from 'react-native';

export default function App() {
  const handlePress = () => {
    Linking.openURL("https://ericksilva232323.github.io");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://st4.depositphotos.com/1106005/38038/i/450/depositphotos_380383746-stock-photo-gray-repeat-cube-background-abstract.jpg'
        }}
        style={styles.image}
      >
         <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}>Clique aqui para visitar o site externo</Text>
        </TouchableOpacity>
        <Text><h1>Designer my Port.</h1></Text>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/140626833?s=400&u=f43658dc87c0270d05db486e602a26bfb7d61582&v=4',
          }}
        />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center", // centralizar o conteúdo na imagem de fundo
    width: '100%', // ocupar toda a largura da tela
    height: '100%',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});
