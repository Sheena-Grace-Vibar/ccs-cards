import ReactDOM from 'react-dom/client';
import { App } from './App'
import './index.css';
import { CardProvider } from "./context/CardContext"

ReactDOM.createRoot(document.getElementById('root')).render(
    <CardProvider>
      <App />
    </CardProvider>
);
