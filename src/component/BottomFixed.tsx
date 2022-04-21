import React from "react";
import styled from "styled-components";

const BottomWrap = styled.div`
    position:fixed;
    bottom:0;
    padding:1rem 0;
    z-index:2;
    width:100%;
    background:#fff;
    box-shadow: 0 0 5px 0px rgb(0, 0, 0, 0.1);
`

const BottomFixedWrap = styled.div`
    padding:0 1rem;    
`

const BottomFixedMenuWrap = styled.ul`
    display:flex;
`

const BottomFixedMenu = styled.li`
    width:33%;
    text-align:center;
`

function BottomFixed(){
    return(
        <BottomWrap>
            <BottomFixedWrap>
                <BottomFixedMenuWrap>
                    <BottomFixedMenu>
                        <span className="icon"></span>
                        홈
                    </BottomFixedMenu>
                    <BottomFixedMenu>
                        <span className="icon"></span>
                        내주변
                    </BottomFixedMenu>
                    <BottomFixedMenu>
                        <span className="icon"></span>
                        마이페이지
                    </BottomFixedMenu>
                </BottomFixedMenuWrap>
            </BottomFixedWrap>
        </BottomWrap>
    )
}

export default BottomFixed;