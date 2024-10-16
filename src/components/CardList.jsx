import { useState, useContext, useEffect } from 'react';
import CardContext from '../context/CardContext';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Collected from './Collected';

export const CardList = () => {
    const cards = useContext(CardContext);
    const [filteredCards, setFilteredCards] = useState(cards);

    const handleSearchResults = (results) => {
        setFilteredCards(results);
    };

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

    return (
        <div>
            <SearchBar onSearchResults={handleSearchResults} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-4 cards">
                {filteredCards?.map((card) => (
                    <div key={card.id} className="relative">
                        <Link
                            to={`/card/${encodeURIComponent(card.name)}`}
                            className="bg-pink-600 shadow-xl rounded-lg p-4 block text-center card text-white"
                        >
                            <h2 className="text-lg font-bold mb-2" data-testid="cypress-card-name">{card.name}</h2>
                            <img
                                src={card.image_url}
                                alt={card.name}
                                className="w-[150px] h-[350px] object-cover mx-auto"
                            />
                            <h3 className="text-justify mt-2">{card.description}</h3>
                        </Link>
                        <Collected cardId={card.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};