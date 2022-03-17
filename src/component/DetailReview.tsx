import React from "react";
import styled from "styled-components";


const BoxWrap = styled.div`
    width:100%;
    background:#fff;
    margin:2.5em 0;
`

const Container = styled.div`
    padding:0 1em;
`

const DetailTit = styled.div`
    display:flex;
    justify-content: space-between;
    h1{
        font-size:1.5em;
        font-weight:800;
    }
    p{
        padding:0.5em 0;
    }
    p span{
        color:#F57531;
        font-family: 'Montserrat';
        font-weight:700;
    }
`

const DetailReviewWrap = styled.ul`
    display:flex;
    flex-wrap: wrap;
`

const DetailReviewContent = styled.li`
    width:100%;
    padding:1.5em 0;
    border-bottom:1px solid #eee;
    h2{
        font-size:1.3em;
        font-weight:600;
    }
    div{
        font-size:0.9em;
        line-height:1.3em;
        color:#555;
        padding:1em 0;
    }
    span{
        margin-right:0.5em;
    }
`

function DetailReview(){
    return(
        <BoxWrap>
            <Container>
                <DetailTit>
                    <div>
                        <h1>리뷰</h1>
                        <p>전체 <span>52</span>건</p>
                    </div>
                    <div>
                        <select>
                            <option>전체</option>
                        </select>
                    </div>
                </DetailTit>
                <DetailReviewWrap>
                    <DetailReviewContent>
                        <h2>마사지 A</h2>
                        <div>만족합니다. 원래 사고자 했던 제품이 사이즈가 안맞을것 같아서 취소하고 알아본게 듀커쇼파인데 듀커로 선택하길 잘한것 같아요 푹신함보단 탄탄한 것을 선호해서 그런지 저는 쇼파붙박이가 되어가는 중입니다. 집들이할때 강아지가 오게되었는데 올라가서 막 긁었는데도 상처하나 나지 않았어요 다만 작은 쿠션을 하나더 사고싶은데 따로 판매하는것 같지 않아서 아쉬워요! 다른 분들께도 추천드립니다!</div>
                        <p><span className="date">2022.03.02</span><span className="editor">홍*동</span></p>
                    </DetailReviewContent>
                    <DetailReviewContent>
                        <h2>마사지 A</h2>
                        <div>만족합니다. 원래 사고자 했던 제품이 사이즈가 안맞을것 같아서 취소하고 알아본게 듀커쇼파인데 듀커로 선택하길 잘한것 같아요 푹신함보단 탄탄한 것을 선호해서 그런지 저는 쇼파붙박이가 되어가는 중입니다. 집들이할때 강아지가 오게되었는데 올라가서 막 긁었는데도 상처하나 나지 않았어요 다만 작은 쿠션을 하나더 사고싶은데 따로 판매하는것 같지 않아서 아쉬워요! 다른 분들께도 추천드립니다!</div>
                        <p><span className="date">2022.03.02</span><span className="editor">홍*동</span></p>
                    </DetailReviewContent>
                    <DetailReviewContent>
                        <h2>마사지 A</h2>
                        <div>만족합니다. 원래 사고자 했던 제품이 사이즈가 안맞을것 같아서 취소하고 알아본게 듀커쇼파인데 듀커로 선택하길 잘한것 같아요 푹신함보단 탄탄한 것을 선호해서 그런지 저는 쇼파붙박이가 되어가는 중입니다. 집들이할때 강아지가 오게되었는데 올라가서 막 긁었는데도 상처하나 나지 않았어요 다만 작은 쿠션을 하나더 사고싶은데 따로 판매하는것 같지 않아서 아쉬워요! 다른 분들께도 추천드립니다!</div>
                        <p><span className="date">2022.03.02</span><span className="editor">홍*동</span></p>
                    </DetailReviewContent>
                    <DetailReviewContent>
                        <h2>마사지 A</h2>
                        <div>만족합니다. 원래 사고자 했던 제품이 사이즈가 안맞을것 같아서 취소하고 알아본게 듀커쇼파인데 듀커로 선택하길 잘한것 같아요 푹신함보단 탄탄한 것을 선호해서 그런지 저는 쇼파붙박이가 되어가는 중입니다. 집들이할때 강아지가 오게되었는데 올라가서 막 긁었는데도 상처하나 나지 않았어요 다만 작은 쿠션을 하나더 사고싶은데 따로 판매하는것 같지 않아서 아쉬워요! 다른 분들께도 추천드립니다!</div>
                        <p><span className="date">2022.03.02</span><span className="editor">홍*동</span></p>
                    </DetailReviewContent>
                </DetailReviewWrap>
            </Container>
        </BoxWrap>
    )
}

export default DetailReview;