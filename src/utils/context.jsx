import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export const Context = createContext();

const AppContext = ({ children }) => {
    const [products, setProducts] = useState();
    const [category, setCategory] = useState();
    // const [cart, setCart] = useState([]);
    // const [total, setTotal] = useState(0);
    // const [user, setUser] = useState(null);
    // const [search, setSearch] = useState('');

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Context.Provider value={{ products, setProducts, category, setCategory,         
        // cart, setCart, total, setTotal, user, setUser, search, setSearch
         }}>
            {children}
        </Context.Provider>
    )
}


export default AppContext;
