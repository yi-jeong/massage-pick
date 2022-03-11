import React from "react";
import styled from "styled-components";
import ListStyleN from "./ListStyleN";

const MainNewWrap = styled.div`
    h2{
        font-size:1.5em;
        letter-spacing:-2px;
    }
    h2 span{
        font-weight:bold;
    }
    width:100%;
    background:#f5f5f5;
    padding:4em 0 2em 0;
`

const MainNewContainer = styled.div`
    padding:0 1em;
`

function MainNew(){
    return(
        <MainNewWrap>
            <MainNewContainer>
                <h2><span>새로등록</span>된 샵</h2>
                <ListStyleN />
            </MainNewContainer>
        </MainNewWrap>
    )
}

export default MainNew;