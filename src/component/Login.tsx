import React from "react";
import styled from "styled-components";
import IconGoogleImg from "../assets/img/Icon-login-google.png"
import IconKakaoImg from "../assets/img/Icon-login-kakao.png"
import IconNaverImg from "../assets/img/Icon-login-naver.png"

const LoginWrap = styled.div`
    width:100%;
    height:100vh;
    background:#eee;
`

const LoginContainer=styled.div`
    position:relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:240px;

`

const LoginContents= styled.div`
    h1{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size:1.5em;
        color: #F2903B;
        text-align:center;

    }
`

const LoginForm = styled.form`
    margin-top:3em;
`

const LoginID = styled.input`
    box-sizing : border-box;
    width:100%;
    padding:1em;
    border:1px solid #DDDDDD;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
`

const LoginPW = styled.input`
    box-sizing : border-box;
    width:100%;
    padding:1em;
    margin-top:-1px;
    border:1px solid #DDDDDD;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
`

const LoginButton = styled.button`
    width:100%;
    padding:1em;
    margin-top:1em;
    border:0;
    border-radius:0.5em;
    background:#F2903B;
    color:#fff;
    font-size:1em;
    font-weight:500;

`

const LoginInfoWrap = styled.ul`
    display:flex;
    justify-content: space-evenly;
    margin:1em 0;
`

const LoginInfo = styled.li`
    text-align:center;
    color:#555;
    &:last-child{
        font-weight:600;
    }
`

const FastLoginWrap = styled.div`
    margin-top:4em;
    color:#555;
    h2{
        text-align:center;
        font-size:0.9em;
        margin:0.5em 0;
    }
    h2 span{
        font-weight:700;
    }
`

const FastLoginIconWrap= styled.ul`
    display:flex;
    justify-content: space-between;
    margin:1em 0;
`

const FastLoginIcon= styled.li`
    img{ 
        max-width:100%; 
    }
`



function Login(){
    return(
        <LoginWrap>
            <LoginContainer>
                <LoginContents>
                    <h1>MASSAGE PICK</h1>
                    <LoginForm>
                        <LoginID placeholder="이메일"/>
                        <LoginPW type="password" placeholder="비밀번호"/>
                        <LoginButton type="submit">로그인</LoginButton>
                    </LoginForm>
                    <LoginInfoWrap>
                        <LoginInfo>비밀번호 찾기</LoginInfo>
                        <LoginInfo>회원가입</LoginInfo>
                    </LoginInfoWrap>
                    <FastLoginWrap>
                        <h2><span>소셜 계정</span>으로 간편 로그인·회원가입</h2>
                        <FastLoginIconWrap>
                            <FastLoginIcon><img src={IconGoogleImg} alt="" /></FastLoginIcon>
                            <FastLoginIcon><img src={IconKakaoImg} alt="" /></FastLoginIcon>
                            <FastLoginIcon><img src={IconNaverImg} alt="" /></FastLoginIcon>
                        </FastLoginIconWrap>
                    </FastLoginWrap>
                </LoginContents>
            </LoginContainer>
        </LoginWrap>
    )
}

export default Login;