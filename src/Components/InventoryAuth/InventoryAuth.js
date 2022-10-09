import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const InventoryAuth = ({children}) => {
    const [user, loading,] = useAuthState(auth);
    const location = useLocation();

     if(loading){
        return <button className="btn btn-success text-xl loading container mx-auto flex justify-center items-center w-48 mt-40">loading</button>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
     return  children;
    };

    export default InventoryAuth;