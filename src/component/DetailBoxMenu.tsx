import React, { useState } from "react";
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

interface Menu{
    menuCode: number;
    getData:(n:number)=>void;
}

function DetailBoxMenu(props:Menu){

    const On = true;
    const Off = false;

    return(
        <DetailBoxMenuWrap>
            <DetailBoxMenuContent onClick={()=> props.getData(1)} On={ props.menuCode == 1 ? On : Off }>홈</DetailBoxMenuContent>
            <DetailBoxMenuContent onClick={()=> props.getData(2)} On={ props.menuCode == 2 ? On : Off }>프로그램</DetailBoxMenuContent>
            <DetailBoxMenuContent onClick={()=> props.getData(3)} On={ props.menuCode == 3 ? On : Off }>리뷰</DetailBoxMenuContent>
            <DetailBoxMenuContent onClick={()=> props.getData(4)} On={ props.menuCode == 4 ? On : Off }>추천</DetailBoxMenuContent>
        </DetailBoxMenuWrap>
    )
}

export default DetailBoxMenu;