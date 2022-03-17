import React from "react";
import styled from "styled-components";
import itemimg02 from "../assets/img/item-img-02.png";
import { Icon } from 'react-icons-kit'
import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'
import {home} from 'react-icons-kit/fa/home'

const MenubarWrap = styled.div`
    i{ margin-right:0.5em; }
    width:100%;
    background:#fff;
    padding:1em 0;
`

const DetailImgWrap = styled.div`
    width:100%;
    height:40vh;
    background:url(${itemimg02});
    background-attachment: fixed;
    background-size:cover;
`

const Container = styled.div`
    padding:0 1em;
`

function DetailTop(){
    return(
        <>
        <MenubarWrap>
        <Container>
            <Icon icon={chevronLeft} />
            <Icon icon={home} size={21}/>
        </Container>
        </MenubarWrap>
        <DetailImgWrap />
        </>
    )
}

export default DetailTop;