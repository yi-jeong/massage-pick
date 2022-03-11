import React from "react";
import styled from "styled-components";
import itemimg01 from "../assets/img/item-img-01.png";

const SearchItemWrap = styled.div`
    
`

const Container = styled.div`
    padding: 0 1em;
`

const SearchItemBoxWrap = styled.ul`

`

const SearchItemBox = styled.li`
    display:flex;
`

function SearchItem(){
    return(
        <SearchItemWrap>
            <Container>
                <SearchItemBoxWrap>
                    <SearchItemBox>
                        <img src={itemimg01} />
                    </SearchItemBox>
                </SearchItemBoxWrap>
            </Container>
        </SearchItemWrap>
    )
}

export default SearchItem;