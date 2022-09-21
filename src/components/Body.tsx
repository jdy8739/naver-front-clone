import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 2594px;
    padding: 72px 0 27px 0;
    display: flex;
    justify-content: space-between;
`;

const ContentTop = styled.div`
    width: 100%;
    height: 207px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
`;

const AdPicture = styled.div`
    width: 751px;
    height: 133px;
    border: 1px solid #eee;
`;

const LoginBox = styled.div`
    width: 348px;
    height: 133px;
    border: 1px solid #eee;
    background-color: #f8f8f8;
    padding: 0 17px;
    box-sizing: border-box;
    div {
        height: 33.33%;
    }
`;

const LoginButton = styled.div`
    width: 100%;
    background-color: #19ce60;
    border: 2px solid #32c26c;
`;

const NewsTitlePreview = styled(LoginBox)`
    width: 751px;
    height: 47px;
`;

const IssuesAndLive = styled(AdPicture)`
    width: 348px;
    height: 47px;
`;

const RightBox = styled.div`
    width: 751px;
    height: 2546px;
    background-color: blue;
`;

const LeftBox = styled.div`
    width: 348px;
    height: 2546px;
    background-color: red;
`;

function Body() {
    return (
        <Content>
            <RightBox></RightBox>
            <LeftBox></LeftBox>
            {/* <ContentTop>
                <AdPicture></AdPicture>
                <LoginBox>
                    <div></div>
                    <LoginButton></LoginButton>
                    <div></div>
                </LoginBox>
                <NewsTitlePreview></NewsTitlePreview>
                <IssuesAndLive></IssuesAndLive>
            </ContentTop> */}
        </Content>
    );
}

export default Body;
