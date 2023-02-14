import axios from 'axios';

const Usercard = ({ users, getAllUsers, setUpdateInfo }) => {
    //paso por props el setupinfo para capturar la infotmacion del update

    const deleteUserById = (id) => {
        const urlDelate = `https://users-crud.academlo.tech/users/${id}/`;
        axios
            .delete(urlDelate)
            .then((res) => {
                console.log(res.data);
                getAllUsers(); //viene con la informacion actualizada
            })
            .catch((error) => console.log(error));
    };


    return (
        <article className=''>
            {users?.map((user) => (
                <div
                    className='card mt-4 text-bg-dark overflow-hidden d-flex '
                    key={user.id}
                >
                    <h2 className=''>{`${user.first_name} ${user.last_name}`}</h2>
                    <ul className='list-group list-group-flush '>
                        <li className='list-group-item text-bg-light '>
                            Email : <span>{user.email}</span>
                        </li>
                        <li className='list-group-item text-bg-light '>
                            Password : <span>{user.password}</span>
                        </li>
                        <li className='list-group-item text-bg-light '>
                            Birthday : <span>{user.birthday}</span>
                        </li>
                        <li className='text-bg-light border '>
                            <div className=' btn-group h-100 '>
                                <button
                                    onClick={() => setUpdateInfo(user)}
                                    className='btn btn-info'
                                >
                                    <i className='fa-regular fa-pen-to-square'></i>
                                </button>
                                <button
                                    onClick={() => deleteUserById(user.id)}
                                    className='btn btn-danger'
                                >
                                    <i className='fa-regular fa-trash-can'></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div> //el users ya tiene el encadenamiento opcional
            ))}
        </article>
    );
};

export default Usercard;
