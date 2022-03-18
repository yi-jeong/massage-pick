import React, {useCallback, useState} from "react";
import styled from "styled-components";
import { isIdentifier } from "typescript";
import useInputs from "../hooks/useInputs";

const JoinFormWrap= styled.div`
    margin:3em 0;
`

const JoinFormBox = styled.div`
    margin:2em 0;
    p{
        margin-top:0.3em;
        font-size:0.9em;
        color:#777;
    }
`

const JoinFormBoxTit = styled.div`
    width:100%;
    font-weight:500;
`

const JoinFormInputWrap = styled.div`
    display:flex;
    align-items: center;
`

const JoinFormInput = styled.input`
    box-sizing : border-box;
    width:100%;
    margin:0.5em 0;
    padding:1em;
    border:1px solid #ddd;
    border-radius:0.5em;
`

const JoinEmailCheckButton = styled.button`
    width:100%;
    padding:1em;
    border:1px solid #F57531;
    border-radius:0.5em;
    background:#fff;
    color:#F57531;
`

const InputError = styled.div`
    font-size:0.8em;
    color:#FF1919;
`


function JoinForm(){

    const [{ id, pwd, pwdcheck }, onChange, reset] = useInputs({
        id: '',
        pwd: '',
        pwdcheck: ''
    });

    console.log({pwdcheck});

    const [pwCheck, setPwCheck] = useState<boolean>(false);

    return(
        <JoinFormWrap>

            <JoinFormBox>
                <JoinFormBoxTit><label htmlFor="id01">이메일</label></JoinFormBoxTit>
                <JoinFormInputWrap>
                    <JoinFormInput name="id01"/>
                    <span>@</span>
                    <JoinFormInput name="id02"/>
                </JoinFormInputWrap>
                <JoinEmailCheckButton>이메일 인증</JoinEmailCheckButton>
            </JoinFormBox>

            <JoinFormBox>
                <JoinFormBoxTit><label htmlFor="pwd">비밀번호</label></JoinFormBoxTit>
                <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <JoinFormInputWrap>
                    <JoinFormInput name="pwd" onChange={onChange} />
                </JoinFormInputWrap>
            </JoinFormBox>

            <JoinFormBox>
                <JoinFormBoxTit><label htmlFor="pwdcheck">비밀번호 확인</label></JoinFormBoxTit>
                <JoinFormInputWrap>
                    <JoinFormInput name="pwdcheck" onChange={onChange} />
                </JoinFormInputWrap>
                { pwdcheck !== pwd && (
                    <InputError>비밀번호가 일치하지 않습니다.</InputError>
                )}
            </JoinFormBox>

            <JoinFormBox>
                <JoinFormBoxTit><label>닉네임</label></JoinFormBoxTit>
                <JoinFormInputWrap>
                    <JoinFormInput />
                </JoinFormInputWrap>
            </JoinFormBox>

            <JoinFormBox>
                <JoinFormBoxTit><label>지역</label></JoinFormBoxTit>
                <JoinFormInputWrap>
                    <JoinFormInput />
                </JoinFormInputWrap>
            </JoinFormBox>

        </JoinFormWrap>
    )
}

export default JoinForm;