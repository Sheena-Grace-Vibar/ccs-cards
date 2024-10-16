import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CardContext from '../context/CardContext';

const SearchBar = ({ onSearchResults }) => {
    const cards = useContext(CardContext);
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);

        const filteredCards = searchQuery
            ? cards.filter((card) =>
                card.name.toLowerCase().includes(searchQuery)
            )
            : cards;

        onSearchResults(filteredCards);
    };

    return (
        <div className="search-bar mb-4 flex justify-center">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search cards by name..."
                className="p-2 border rounded-lg w-[250px]"
            />
        </div>
    );
};

SearchBar.propTypes = {
    onSearchResults: PropTypes.func.isRequired
};

export default SearchBar;