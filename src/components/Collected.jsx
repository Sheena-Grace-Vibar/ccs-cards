import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    collected: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'toggleCollected':
            return { ...state, collected: !state.collected };
        case 'initializeCollected':
            return { ...state, collected: action.payload };
        default:
            return state;
    }
}

const Collected = ({ cardId }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const localStorageKey = `collectedCard_${cardId}`;

    useEffect(() => {
        const storedState = localStorage.getItem(localStorageKey);
        if (storedState !== null) {
            dispatch({ type: 'initializeCollected', payload: JSON.parse(storedState) });
        }
    }, [localStorageKey]);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state.collected));
    }, [state.collected, localStorageKey]);

    const toggleCollected = () => {
        dispatch({ type: 'toggleCollected' });
    };

    return (
        <div
            className="absolute top-2 right-2 cursor-pointer text-2xl text-white"
            onClick={toggleCollected}
            title={state.collected ? 'Uncollect' : 'Collect'}
        >
            {state.collected ? '⭐' : '★'}
        </div>
    );
};

Collected.propTypes = {
    cardId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default Collected;