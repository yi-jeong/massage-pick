import React from "react";
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import {locationArrow} from 'react-icons-kit/fa/locationArrow'

const SearchTopWrap = styled.div`
    h1{
        font-weight:800;
        font-size:1.5em;
    }
    margin:3em 0 1.5em 0;
    border-bottom:1px solid #eee;
`

const SearchTopTit = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display:flex;
        align-items: center;
    }
    ul li{
        margin-right:0.5em;
    }
    ul li:last-child{
        background:#eee;
        width:1.5em;
        height:1.5em;
        line-height:1.5em;
        border-radius:1.5em;
        text-align:center;
    }
    ul li i{
        transform: rotate(280deg);
    }
    p{
        font-size:0.9em;
        color:#666;
    }
`

const SearchSelectBoxWrap = styled.ul`
    display:flex;
    flex-wrap: wrap;
    margin:1em -0.3em;
`

const SearchSelectBox = styled.li`
    margin:0.3em;
`

const SearchSelect = styled.select`
    background:#eee;
    border:none;
    border-radius:5em;
    padding:0.5em 1em;
    
`

const Container = styled.div`
    padding:0 1em;
`

function SearchTop(){
    return(
        <SearchTopWrap>
            <Container>
                <SearchTopTit>
                    <ul>
                        <li><h1>내주변</h1></li>
                        <li><Icon icon={locationArrow}/></li>
                    </ul>
                    <p>지역검색</p>
                </SearchTopTit>
                <SearchSelectBoxWrap>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                    <SearchSelectBox>
                        <SearchSelect>
                            <option value="">마사지샵</option>
                        </SearchSelect>
                    </SearchSelectBox>
                </SearchSelectBoxWrap>
            </Container>
        </SearchTopWrap>
    )
}

export default SearchTop;