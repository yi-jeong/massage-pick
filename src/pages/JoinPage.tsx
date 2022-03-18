import React from "react";
import JoinBox from "../component/JoinBox";
import styled,{createGlobalStyle} from "styled-components";

const JoinStyle=createGlobalStyle`
    body{
        background:#F8F8F8;
    }
`

function JoinPage(){
    return(
        <>
            <JoinStyle />
            <JoinBox />
        </>
    )
}

export default JoinPage;