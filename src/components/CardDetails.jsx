import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardContext from "../context/CardContext";

export const CardDetails = () => {
    const cards = useContext(CardContext);
    const { cardName } = useParams();
    const navigate = useNavigate();

    const card = cards.find(c => c.name === (cardName));

    if (!card) {
        return <p>Card not found</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-pink-600 shadow-xl rounded-lg p-6 max-w-sm mx-auto text-white relative">
                <h2 className="text-lg font-bold mb-2 text-center font-sans">{card.name}</h2>
                <div className="relative">
                    <img
                        src={card.image_url}
                        alt={card.name}
                        className="w-[150px] h-[350px] object-cover mx-auto"
                    />
                </div>
                <p className="text-left font-mono"><strong>Sign:</strong> {card.sign}</p>
                <p className="text-left font-mono"><strong>Magic Type:</strong> {card.magic_type}</p>
                <p className="text-left font-mono"><strong>Description:</strong> {card.description}</p>
                <p className="text-left font-mono"><strong>Magic and Abilities:</strong> {card.magic_and_abilities}</p>
                <div className="flex justify-center mt-5">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-pink-600 px-4 py-2 rounded"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        </div>
    );
};