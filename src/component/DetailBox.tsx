import React from "react";
import styled from "styled-components";
import DetailBoxMenu from "../component/DetailBoxMenu"
import DetailHome from "../component/DetailHome"
import DetailProgram from "../component/DetailProgram"
import DetailReview from "../component/DetailReview"

const DetailBoxWrap = styled.div`
    width:100%;
    background:#fff;
`

const MenubarWrap = styled.div`
    width:100%;
    background:#fff;
`

const ContentWrap = styled.div`
    width:100%;
    background:#fff;
`


function DetailBox(){
    return(
        <DetailBoxWrap>
            <MenubarWrap>
                <DetailBoxMenu />
            </MenubarWrap>
            <ContentWrap>
                <DetailReview />
            </ContentWrap>
        </DetailBoxWrap>
    )
}

export default DetailBox;