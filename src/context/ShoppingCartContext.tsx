import { useState, createContext, useContext, ReactNode } from "react";

// Used types:
type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void,
    closeCart: () => void,
    cartAmount: number, // how many items are in the cart
    cartItems: CartItem[]
    getItemAmount: (id: number) => number,
    increaseItemAmount: (id: number) => void,
    decreaseItemAmount: (id: number) => void,
    deleteCartItems: (id: number) => void
 }

 type CartItem = {
     id: number,
     amount: number
 }

 // Create context:
const ShoppingCartContext = createContext({} as ShoppingCartContext);

// export context as a custom hook
export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider( {children}: ShoppingCartProviderProps ) {
    const [isOpen, setIsOpen] = useState(false); // toggle cart state
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const cartAmount = cartItems.reduce((totalAmount, currAmount) => totalAmount + currAmount.amount, 0)  

    function openCart() {
        setIsOpen(true);
    } 

    function closeCart() {
        setIsOpen(false);
    } 

    function getItemAmount(id: number): number {
        return cartItems.find(item => item.id === id)?.amount || 0;
        
    }

    function increaseItemAmount(id: number): void {
        setCartItems(cartItems => {
            if(cartItems.find(item => item.id === id) == null) {
                return [...cartItems, {id, amount: 1}]
            } else {
                return cartItems.map(item => {
                    if(item.id === id) {
                        return { ...item, amount: item.amount + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemAmount(id:number): void {
        setCartItems(cartItems => { 
            if(cartItems.find(item => item.id === id)?.amount === 1) {
                return cartItems.filter(item => {item.id !== id }) // filter out the id value and create a new array -> (delete id value)
            } else {
                return cartItems.map(item => { 
                    if(item.id === id) {
                        return {...item, amount: item.amount - 1} 
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function deleteCartItems(id:number): void {
        console.log('removing item from cart:', id);
        setCartItems(cartItems => {
            return cartItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            cartAmount,
            openCart,
            closeCart,
            getItemAmount, 
            increaseItemAmount, 
            decreaseItemAmount, 
            deleteCartItems }}
        >
            { children }
        </ShoppingCartContext.Provider>
    )    
}

