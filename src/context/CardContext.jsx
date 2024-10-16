import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(apiUrl);
                const result = await response.json();
                setCards(result.data);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, []);

    return (
        <CardContext.Provider value={cards}>
            {children}
        </CardContext.Provider>
    );
};

CardProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default CardContext;
