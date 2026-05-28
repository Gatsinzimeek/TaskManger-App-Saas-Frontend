import './App.css'
import axios from 'axios';
import {getAuthToken} from './store/users/types';
import AppRouter from './routes/Routes';

// Set base URL for axios from environment variable
const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:5000/api';

axios.defaults.baseURL = apiUrl;
// Set default Authorization header if token exists
axios.defaults.headers = {
  Authorization: getAuthToken({item: 'authToken'}) ? `Bearer ${getAuthToken({item: 'authToken'})}` : '',
};

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App;
