import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {

    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        login(username, password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo de volta!</Text>

            <TextInput
                style={styles.input}
                placeholder="usuário"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#aaa"
            />

            <TextInput
                style={styles.input}
                placeholder="senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212', // Cor de fundo dark
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF', // Texto branco
    },
    input: {
        width: '85%',
        height: 45,
        borderColor: '#333333', // Borda mais escura
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#1E1E1E', // Fundo do input dark
        color: '#fff', // Texto branco
        fontSize: 16,
    },
    button: {
        width: '85%',
        height: 45,
        backgroundColor: '#BB86FC', // Cor roxa destaque no dark mode
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#121212', // Texto escuro no botão claro
        fontSize: 16,
        fontWeight: 'bold',
    },
});
