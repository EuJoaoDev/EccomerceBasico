import React, { createContext, useContext, useState } from 'react';

// Cria o contexto do carrinho
const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    // Adiciona o item ao carrinho
    const addItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Remove um item por vez do carrinho
    const removeItem = (productId) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === productId);

            if (existingItem.quantity > 1) {
                // Decrementa a quantidade se houver mais de um
                return prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            // Remove o item completamente se a quantidade for 1
            return prevItems.filter(item => item.id !== productId);
        });
    };

    // Calcula o número total de itens
    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    // Calcula o valor total do carrinho
    const valorTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, getTotalItems, valorTotal }}>
            {children}
        </CartContext.Provider>
    );
};
