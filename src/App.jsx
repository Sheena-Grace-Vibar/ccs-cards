import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CardProvider } from './context/CardContext';
import { CardList } from './components/CardList';
import { CardDetails } from './components/CardDetails';

export const App = () => {

    return (
        <Router>
            <CardProvider>
                <div>
                    <h1 data-testid="cypress-title"><Link
                        to="/"
                        className="font-serif text-4xl font-bold mb-2 text-pink-600 flex justify-center text-center cursor-pointer"
                    >Cardcaptor Sakura Cards
                    </Link></h1>
                    <Routes>
                        <Route path="/" element={<CardList/>} />
                        <Route path="/card/:cardName" element={<CardDetails />} />
                    </Routes>
                </div>
            </CardProvider>
        </Router>
    );
};
