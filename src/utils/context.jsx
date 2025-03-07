import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({ children }) => {
    const [products, setProducts] = useState();
    const [category, setCategory] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems.forEach((item) => (count += item.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.forEach((item) => (subTotal += item.price * item.quantity));
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            items[index].quantity += quantity;
        } else {
            product.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((item) => item.id !== product.id);
        setCartItems(items);
    };

    const handleCartQuantity = (product, type) => {
        let items = [...cartItems];
        let index = items.findIndex((item) => item.id === product.id);

        if (type === "inc") {
            items[index].quantity += 1;
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider value={{ 
            products, setProducts,
            category, setCategory,    
            cartItems, setCartItems,
            cartCount, setCartCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartQuantity                 
         }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;


// import { createContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';


// export const Context = createContext();

// const AppContext = ({ children }) => {
//     const [products, setProducts] = useState();
//     const [category, setCategory] = useState();
//     const [cartItems, setCartItems] = useState([]);
//     const [cartCount, setCartCount] = useState(0);
//     const [cartSubTotal, setCartSubTotal] = useState(0);

//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     useEffect(() => {
//         let count = 0;
//         cartItems.map((item) => (count += item.attributes.quantity));
//         setCartCount(count);

//         let SubTotal = 0;
//         cartItems.map((item) => (SubTotal += item.attributes.price * item.attributes.quantity));
//     }, [cartItems]);

//     const handleAddToCart = (product, quantity) => {
//         let items = [...cartItems];
//         let index = items.findIndex((item) => i.id === product.id);

//         if(index !== -1){
//             items[index].attributes.quantity += quantity;
//         }
//         else{
//             product.attributes.quantity += quantity;
//             items = [...items, product];
//         }
//         setCartItems(items);
//     };

//     const handleRemoveFromCart = (product) => {
//         let items = [...cartItems];
//         items = items.filter((item) => item.id === product.id);
//         setCartItems(items);
//     };

//     const handleCartQuantity = (product, type) => {
//         let items = [...cartItems];
//         let index = items.findIndex((item) => item.id === product.id);

//         if(type === "inc"){
//             items[index].attributes.quantity += 1;
//         }else if(type === "dec"){
//             if(items[index].attributes.quantity === 1) return ;   
//             items[index].attributes.quantity -= 1;
//         }
//         setCartItems(items);
//     }

    

//     return (
//         <Context.Provider value={{ 
//             products, setProducts,
//             category, setCategory,    
//             cartItems, setCartItems,
//             cartCount, setCartCount,
//             cartSubTotal, setCartSubTotal,
//             handleAddToCart,
//             handleRemoveFromCart,
//             handleCartQuantity                 
        
//          }}>
//             {children}
//         </Context.Provider>
//     )
// }


// export default AppContext;
