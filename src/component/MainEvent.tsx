import React from "react";
import styled from "styled-components";

const MainEventWrap = styled.div`
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

const MainEventContainer = styled.div`
    padding:0 1em;
`

const MainEventBoxWrap = styled.ul`
    display:flex;
    flex-wrap: wrap;
    margin:1em 0;
`

const MainEventBox = styled.li`
    width:100%;
    height:110px;
    border-radius:0.5em;
    background:#1B8264;
    margin:0.5em 0;
`

function MainEvent(){
    return(
        <MainEventWrap>
            <MainEventContainer>
                <h2><span>이벤트</span> 기획전</h2>
                <MainEventBoxWrap>
                    <MainEventBox />
                    <MainEventBox />
                    <MainEventBox />
                </MainEventBoxWrap>
            </MainEventContainer>
        </MainEventWrap>
    )   
}

export default MainEvent;