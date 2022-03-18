import JoinForm from "../component/JoinForm";
import styled,{createGlobalStyle} from "styled-components";

const JoinWrap= styled.div`
    h1{
        text-align:center;
        font-size:1.5em;
        font-weight:800;
    }
    margin:4em 0;
`

const JoinContainer = styled.div`
    margin:0 auto;
    width:300px;
`

function JoinBox(){
    return(
        <JoinWrap>
            <JoinContainer>
                <h1>회원가입</h1>
                <JoinForm />
            </JoinContainer>
        </JoinWrap>
    )
}

export default JoinBox;