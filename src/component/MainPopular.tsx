import React from "react";
import styled from "styled-components";
import ListStyleP from '../component/ListStyleP';

const MainPopularWrap = styled.div`
    h2{
        font-size:1.5em;
        letter-spacing:-2px;
    }
    h2 span{
        font-weight:bold;
    }
    width:100%;
    background:#fff;
    padding:4em 0 2em 0;
`

const MainPopularContainer = styled.div`
    padding:0 1em;
    background:#fff;
`


function MainPopular(){
    return(
        <MainPopularWrap>
            <MainPopularContainer>
                <h2><span>인기</span>있는 샵</h2>
                <ListStyleP />
            </MainPopularContainer>
        </MainPopularWrap>
    )
}

export default MainPopular;