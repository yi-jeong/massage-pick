import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from "../component/SearchItem";
import SearchTop from "../component/SearchTop";


function SearchPage(){
    
    return(
        <>
            <SearchTop />
            <SearchItem  />
        </>
    )
}

export default SearchPage;