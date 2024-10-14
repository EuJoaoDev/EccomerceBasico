import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export const HomePage = ({ navigation }) => {
    const { getTotalItems } = useCart();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            {/* Header da Home com Logout */}
            <View style={styles.header}>
                <Text style={styles.title}>Bem-vindo à Loja Dark Mode</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            {/* Seção de Navegação */}
            <View style={styles.navigation}>
                {/* Botão para Navegar até os Produtos */}
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProductPage')}>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.navImage} />
                    <Text style={styles.navText}>Ver Produtos</Text>
                </TouchableOpacity>

                {/* Botão para Navegar até o Carrinho */}
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CartPage')}>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.navImage} />
                    <Text style={styles.navText}>Carrinho ({getTotalItems()})</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fundo dark mode
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#BB86FC', // Cor principal
    },
    logoutButton: {
        backgroundColor: '#CF6679', // Botão de logout vermelho
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navButton: {
        backgroundColor: '#1E1E1E',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    navImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginBottom: 10,
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
