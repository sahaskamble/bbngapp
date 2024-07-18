import * as React from "react";
import { Image } from "expo-image";
import { Text, View, Pressable, StyleSheet, TextInput} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);


const handleLogin = async () => {
    router.navigate('/(tabs)/home');
  //   const res = await fetch('https://bbmoapp.bbnglobal.net/api/users/login',{
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'Basic YW1hckBzYW5taXNoYS5jb206YW1hcjEyM0A=',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "Username": username,
  //       "Password": password
  //     }),
  //  })
  
    // const data = await res.json();
    // setData(data);

    // if (data.message === "success") {
    //   alert(`Login Successful ${data.member.Member.name}`);
    // router.navigate('/(tabs)/home');
    // }else{
    //   alert(`Login Unsuccessful`);
    // }

    
   }

  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        source={require("../app/assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.subtitleText}>
        Sign in to access your account
      </Text>
      <View style={styles.inputContainer}>
        <Image
          contentFit="cover"
          source={require("../app/assets/mail.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your email"
          value={username}
          onChangeText={(e) => {
            setUsername(e);
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          contentFit="cover"
          source={require("../app/assets/lock.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(e) =>{
            setPassword(e)
          }}
          style={styles.input}
        />
      </View>
 
      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.forgetPasswordText} onPress={() => router.navigate('/Forget_password')}>
      Forget password?
      </Text>
      <Text style={styles.registerText}>
        New Member? <Text style={styles.link} onPress={() => router.navigate('/Register')}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: '#007BFF',
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    backgroundColor:'#DCDCDC',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    marginLeft: 10,
    color: '#666',
  },
  button: {
    backgroundColor: '#5bc0de',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgetPasswordText: {
    marginTop: 20,
    color: '#1a73e8',
  },
  registerText: {
    marginTop: 20,
    color: '#666',
  },
  registerLink: {
    color: '#007BFF',
  },
});

export default Login;
