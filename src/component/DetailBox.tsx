import React, {useState} from "react";
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

    const [menuCode,setMenuCode] = useState<number>(1);
    const getData = (n:number) => {
        setMenuCode(n);
    }

    return(
        <DetailBoxWrap>
            <MenubarWrap>
                <DetailBoxMenu getData={getData} menuCode={menuCode} />
            </MenubarWrap>
            <ContentWrap>
                { menuCode == 1 && (<DetailHome />) }
                { menuCode == 2 && (<DetailProgram />) }
                { menuCode == 3 && (<DetailReview />) }
                { menuCode == 4 && (<DetailReview />) }
            </ContentWrap>
        </DetailBoxWrap>
    )
}

export default DetailBox;