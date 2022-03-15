import React from "react";
import styled from "styled-components";
import itemimg02 from "../assets/img/item-img-02.png";

const BoxWrap = styled.div`
    width:100%;
    background:#fff;
    margin:2.5em 0;
`

const Container = styled.div`
    padding:0 1em;
`

const ProgramType01 = styled.div`
    margin-bottom:3em;
    h2{ font-size:1em; font-weight:600; border-bottom:1px solid #eee; padding:0.5em 0;}
    div{ width:100%; height:200px; background:#eee; margin:0.5em 0; }
`

const ProgramType02 = styled.div`
    margin-bottom:3em;
    h2{ font-size:1em; font-weight:600; border-bottom:1px solid #eee; padding:0.5em 0;}
    ul{ margin:1em 0; }
    ul li{ display:flex; justify-content: space-between; padding:0.3em 0; }
    ul li span{ font-family: 'Montserrat'; font-weight:500; color:#F57531; }
`

const ProgramType03 = styled.div`
    margin-bottom:3em;
    h2{ font-size:1em; font-weight:600; border-bottom:1px solid #eee; padding:0.5em 0;}
    ul{ margin:1em 0; }
    ul li{ display:flex; align-items:center; padding:0.3em 0; }
    ul li div{ overflow:hidden; position:relative; width:140px; height:100px; border-radius:0.5em; margin-right:1em; }
    ul li div img{ position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); width:100%; }
    ul li div img:hover{transform: translate(-50%,-50%) scale(1.05); transition: transform .2s;}
    ul li dd{ font-family: 'Montserrat'; font-weight:500; color:#F57531; }
`

function DetailProgram(){
    return(
        <BoxWrap>
            <Container>
                <ProgramType01>
                    <h2>세트 프로그램</h2>
                    <div></div>
                </ProgramType01>
                <ProgramType02>
                    <h2>마사지 A</h2>
                    <ul>
                        <li>마사지<span>20,000</span></li>
                        <li>마사지<span>20,000</span></li>
                        <li>마사지<span>20,000</span></li>
                        <li>마사지<span>20,000</span></li>
                        <li>마사지<span>20,000</span></li>
                    </ul>
                </ProgramType02>
                <ProgramType03>
                    <h2>마사지 B</h2>
                    <ul>
                        <li>
                            <div><img src={itemimg02} /></div>
                            <dl>
                                <dt>마사지</dt>
                                <dd>20,000</dd>
                            </dl>
                        </li>
                        <li>
                            <div><img src={itemimg02} /></div>
                            <dl>
                                <dt>마사지</dt>
                                <dd>20,000</dd>
                            </dl>
                        </li>
                        <li>
                            <div><img src={itemimg02} /></div>
                            <dl>
                                <dt>마사지</dt>
                                <dd>20,000</dd>
                            </dl>
                        </li>
                    </ul>
                </ProgramType03>
            </Container>
        </BoxWrap>
    )
}

export default DetailProgram;