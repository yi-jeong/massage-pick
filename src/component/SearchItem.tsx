import React,{ useState } from "react";
import styled, { css } from "styled-components";
import itemimg01 from "../assets/img/item-img-01.png";
import { Icon } from 'react-icons-kit'
import {heart} from 'react-icons-kit/fa/heart'
import {commentO} from 'react-icons-kit/fa/commentO'

const SearchItemWrap = styled.div`
    
`

const Container = styled.div`
    padding: 0 1em;
`

const SearchItemBoxWrap = styled.ul`

`

const SearchItemBox = styled.li`
    display:flex;
    padding:1.2em 0;
    border-bottom:1px solid #eee;
`

const ItemThumb = styled.div`
    img{ width:100%; object-fit: cover; }
    overflow:hidden;
    width:40%;
    height:6em;
    border-radius:1em;
    margin-right:1em;
` 

const ItemInfo = styled.div<{like:Boolean}>`
    h3{ 
        font-size:1.3em; 
        font-weight:700; 
    }
    .road{ 
        padding:0.3em 0;
        font-size:0.9em; 
        color:#666; 
    }
    .price{
        padding:0.3em 0;
        font-size:0.9em;
        color:#666; 
    }
    .price span{
        font-family: 'Montserrat';
        font-weight:500;
        color:#F57531;
    }
    p{
        display:flex;
        font-weight:300;
        font-size:0.9em;
    }
    p span{
        position:relative;
        display: flex;
        align-items: flex-end;
        font-family: 'Montserrat';
        margin-right:1em;
    }
    p span .data{
        padding-left:1.5em;
    }
    i{
        position:absolute;
        margin-right:0.3em;
    }
    ${props => props.like ?
        css`
            .like i{
                color:#FF6A6A;
                animation: clickmotion 1s linear 0s alternate;
            }
            @keyframes clickmotion{
                0%{  }
                30%{ top:3px; }
                60%{ top:-5px; }
                80%{ top:-5px; }
                100%{ top:-2px; }
            }
        `
        :
        css`
            i{
                color:#333;
            }
        `
    }
    display:grid;
    align-content: space-between;
    width:60%;
`

function SearchItem(){

    const [like, setLike] = useState<Boolean>(true);

    return(
        <SearchItemWrap>
            <Container>
                <SearchItemBoxWrap>

                    { /* li 박스. map 돌려서 구현 예정 */} 

                    <SearchItemBox>
                        <ItemThumb><img src={itemimg01} /></ItemThumb>
                        <ItemInfo like={like}>
                            <ul>
                                <li><h3>마사지샵 상호명</h3></li>
                                <li className="road">04520 서울시 중구 세종대로 124</li>
                            </ul>
                            <ul>
                                <li className="price">코스 <span>20,000~</span></li>
                                <li>
                                <p>
                                    <span className="comment"><Icon size={16} icon={commentO} /><span className="data">1524</span></span>
                                    <span className="like" onClick={()=> setLike(!like)}><Icon size={16} icon={heart} /><span className="data">252</span></span>
                                </p>
                                </li>
                            </ul>
                        </ItemInfo>
                    </SearchItemBox>

                    { /* li 박스. map 돌려서 구현 예정 */} 

                </SearchItemBoxWrap>
            </Container>
        </SearchItemWrap>
    )
}

export default SearchItem;