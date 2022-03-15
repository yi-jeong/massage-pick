import React from "react";
import styled, {css} from "styled-components";

const DetailBoxMenuWrap = styled.ul`
    width:100%;
    text-align:center;
    border-bottom:1px solid #eee;
`
const DetailBoxMenuContent = styled.li<{On:boolean}>`
    position:relative;
    display:inline-block;
    padding:1em;
    ${props => props.On &&
        css`
            ::after{ 
                content:''; 
                position:absolute; 
                left:0; 
                bottom:0;
                width:100%; 
                height:3px; 
                border-bottom:3px solid #FFC05A; 
            }
        `
    }
`

function DetailBoxMenu(){
    const On=true;
    const Off=false;
    return(
        <DetailBoxMenuWrap>
            <DetailBoxMenuContent On={Off}>홈</DetailBoxMenuContent>
            <DetailBoxMenuContent On={On}>프로그램</DetailBoxMenuContent>
            <DetailBoxMenuContent On={Off}>리뷰</DetailBoxMenuContent>
            <DetailBoxMenuContent On={Off}>추천</DetailBoxMenuContent>
        </DetailBoxMenuWrap>
    )
}

export default DetailBoxMenu;