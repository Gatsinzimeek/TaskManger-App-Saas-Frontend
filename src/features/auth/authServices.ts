import axios from '../../utils/axios-instance';

interface User {
  username: string;
  email: string;
  password: string;
}


interface LoginUser{
    email: string,
    password: string,
}

const register = async (userData:User) => {
    const response = await axios.post('/register',userData);


    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

const login = async (useData:LoginUser) => {
    const resp = await axios.post('/login', useData);

    return resp.data;
}

const authService = {register, login};

export default authService; 


