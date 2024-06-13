import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './approuter';

const App = () => {
    return (
        <Router>
            <div>
                <AppRouter />
            </div>
        </Router>
    );
};

export default App;