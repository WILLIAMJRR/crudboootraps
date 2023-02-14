import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import defaulValues from '../context/defaultValues'

const Create = ({ url, getAllUsers,updateInfo, setUpdateInfo }) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [birthday, setBirthday] = useState('');
    //     const handleChangeEmail = (e) => {
    //     setEmail(e.target.value);
    // };
    // const handleChangepass = (e) => {
    //     setPassword(e.target.value);
    // };
    // const handleChangeName = (e) => {
    //     setName(e.target.value);
    // };
    // const handleChangeLastName = (e) => {
    //     setLastName(e.target.value);
    // };
    // const handleChangetBirthday = (e) =>{
    //     setBirthday(e.target.value);
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`name :${name} - email : ${email} - - last : ${lastName}-- birthay : ${birthday} `);

    const { reset, register, handleSubmit } = useForm();

    useEffect(() => { //se hace un useeffect para controlar el ciclo infinito que puede generar el reset
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo]);
        

    //se coloca la data para que no sea de manera estatica si no recibirla desde el formulario
    const createNewUser = (data) => {
        axios
            .post(url, data) //data es lo que se envia a la Api para generrar un nuevo registro, un nuevo dato dentro de la base de datos
            .then((res) => {//se guarda la informacion
                console.log(res.data);//no se necesita guardar informacion por eso el console.log
                getAllUsers(); //se trae el getalluser por q necesitamos actualizar la informacion que sale en el frontend necesitamos ese nuevo registro y q se vea en el front
                reset();
            }) 
            .catch((error) => console.log(error));
    };

    const updateUserById = (id, data) => {//la data viene desde el formulario 
        const url = `https://users-crud.academlo.tech/users/${id}/`;
        axios
            .put(url, data) //necesita la url y la data la url parqa acceser al enpoint y la data por q necesitamos cambiar informacion que esta en labase de datos
            .then((res) => {
                console.log(res.data);
                getAllUsers();
                setUpdateInfo();//se resetea todo desde 0 en el updateUserById y cada vez q modifiquemos en el formulario no se agrega si no se modifica
            })
            .catch((err) => console.log(err));
    };


    
    const Submit = (data) => {
        if (updateInfo) {
            //UPDATE info tiene informacion actualizamos
            updateUserById(updateInfo.id, data);//aqui esta la informacion q se quiere actualizar
        } else {
            //CREATE si no creamos
            createNewUser(data);
        }
        reset(defaulValues);
    };

    return (
        // evento on submit en el button en el on subMIt es lo q se ejecuta al apretar el boton
        <form onSubmit={handleSubmit(Submit)}>
            <div className='form-floating mb-3 '>
                <input
                    {...register('email')}
                    //value={email}
                    //captura todo lo q se va ingresando value trae todo lo q se va ingresando
                    //onChange={handleChangeEmail}
                    type='email'
                    className='form-control'
                    placeholder='email'
                />
                <label>
                    <i className='fa-regular fa-envelope'></i> Email
                </label>
            </div>

            <div className='form-floating mb-3'>
                <input
                    {...register('password')}
                    //value={password}
                    //onChange={handleChangepass}
                    type='password'
                    className='form-control'
                    placeholder='password'
                />
                <label>
                    <i className='fa-solid fa-key'></i> Password
                </label>
            </div>

            <div className='form-floating mb-3'>
                <input
                    {...register('first_name')}
                    //value={name}
                    //onChange={handleChangeName}
                    type='text'
                    className='form-control'
                    placeholder='First name'
                />
                <label>
                    <i className='fa-solid fa-user'></i> First name
                </label>
            </div>

            <div className='form-floating'>
                <input
                    {...register('last_name')}
                    //value={lastName}
                    //onChange={handleChangeLastName}
                    type='text'
                    className='form-control'
                    placeholder='last name'
                />
                <label>
                    <i className='fa-solid fa-list-ol'></i> Last name
                </label>
            </div>

            <div className='form-floating mt-3'>
                <input
                    {...register('birthday')}
                    //value={birthday}
                    //onChange={handleChangetBirthday}
                    type='date'
                    className='form-control'
                    placeholder='Age'
                />
                <label>
                    <i className='fa-solid fa-cake-candles'></i> Birthday
                </label>
            </div>

            <div className='d-grid gap-2 mt-3'>
                <button
                 className='btn btn-primary'>
                    {
                    updateInfo
                     ? 
                     <i class="fa-solid fa-check fa-2x"></i>
                     :
                    <i className='fa-solid fa-user-plus fa-2x '></i> 
                    }
                    
                </button>
            </div>
        </form>
    );
};

export default Create;
