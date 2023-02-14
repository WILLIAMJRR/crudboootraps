// import { createContext } from 'react';

// const AppContext = createContext();

// const AppProvider = (props) => {
//     const values = '';
//     return (
//         <AppContext.Provider value={values}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };

// const useAppContext = () => {
//     return useContext(AppContext);
// };

// export { AppContext, AppProvider, useAppContext };

// <table className='table table-striped mt-5'>
//                 <thead className='bg-dark text-white'>
//                     <tr>
//                         <th>Email</th>
//                         <th>Password</th>
//                         <th>first name</th>
//                         <th>Last name</th>
//                         <th>Birthday</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users?.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>{user.password}</td>
//                             <td>{user.first_name}</td>
//                             <td>{user.last_name}</td>
//                             <td>{user.birthday}</td>
//                             <td>
//                                 <div>
//                                     <button
//                                         className='btn btn-primary'
//                                         type='button'
//                                         onClick={() =>
//                                             window.location.href = '/user/edit/' + user.id
//                                         }
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         className='btn btn-danger'
//                                         type='button'
//                                         onClick={() =>
//                                             window.location.href = '/user/delete/' + user.id
//                                         }
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>