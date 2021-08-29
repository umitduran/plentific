import React, {useState,useEffect,useContext} from 'react';
import {Store} from '../context/Store';
import {getCategoryList} from '../api/CategoryAPI';

export const ProsPage = () => {
    const [store,dispatch] = useContext(Store);
    const [proList,setProList] = useState([]);

    useEffect(() => {
       getList()
    },[]);

    const getList = async () => {
        const test = await getCategoryList();
    };


    return (<div>{store.categoryList}</div>)
};
