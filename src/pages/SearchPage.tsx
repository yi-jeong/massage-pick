import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from "../component/SearchItem";
import SearchTop from "../component/SearchTop";

export interface shopListType{
    shopList:[{ 
        id: number;
        title: string;
        address: string;
        price: string;
        comment: number;
        like: number;
        likeactive: boolean;
    }];
    likeCount:()=>void;
};



function SearchPage(){

    const [shopList,setShopList] = useState<shopListType['shopList']>([{ id:1,title:"1",address:"1",price:"2",comment:2,like:2,likeactive:false}]);
    const likeCount = ( id:number )=>{
        setShopList(shopList)
    }
    const a= [{ id:1, title:"hi"},{ id:2, title:"hi"},{ id:3, title:"hi"}]

    console.log(shopList)
    console.log(a)
    console.log(...a)
    console.log({...a})

    useEffect(()=>{
        fetch('/massage-pick/data/listbox.json',{
            method: 'GET'
        })
        .then( res => res.json() )
        .then( data => {
            setShopList(data);
        });
    },[]);

    
    return(
        <>
            <SearchTop />
            <SearchItem {...shopList} />
        </>
    )
}

export default SearchPage;