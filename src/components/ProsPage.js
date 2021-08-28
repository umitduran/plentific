import React, {useState,useEffect,useContext} from 'react';
import {Context} from '../context/Store';
import {getCategories} from '../api/CategoryAPI';

export const ProsPage = () => {
    const [context,dispatch] = useContext(Context);
    const [proList,setProList] = useState([]);

    useEffect(() => {
        const categories = getCategories();
        console.log(categories);
    },[proList]);


    return (<div>prosPage</div>)
};
