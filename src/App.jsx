import { useEffect, useState } from 'react';
import './App.css';
import Create from './components/Create';
import Usercard from './components/Usercard';

function App() {
    const [users, setUsers] = useState();
    const [updateInfo, setUpdateInfo] = useState();
    console.log(updateInfo);

    const url = 'https://users-crud.academlo.tech/users/';

    const getAllUsers = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.log('error');
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);
    console.log(users);

    return (
        <div className='container text-center mt-5  '>
            <h1 className='font-monospace text-uppercase font-weight-bolder'>Register Users</h1>
            <Create 
            url={url} 
            getAllUsers={getAllUsers}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
            />

            <Usercard 
            users={users} 
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
             />
        </div>
    );
}

export default App;
