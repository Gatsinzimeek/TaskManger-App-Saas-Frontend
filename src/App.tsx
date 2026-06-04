import './App.css'
import axios from 'axios';
import {getAuthToken} from './redux/users/types';
import AppRouter from './routes/Routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </div>
  )
}

export default App;
