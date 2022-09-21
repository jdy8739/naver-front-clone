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
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    border: 1px solid #eee;
`;

const IssuesAndLive = styled(AdPicture)`
    width: 348px;
    height: 47px;
`;

const RightCol = styled.div`
    width: 751px;
    height: 2546px;
`;

const LeftCol = styled.div`
    width: 348px;
    height: 2546px;
`;

function Body() {
    return (
        <Content>
            <RightCol>
                <ContentTop>
                    <AdPicture></AdPicture>
                    <NewsTitlePreview></NewsTitlePreview>
                </ContentTop>
            </RightCol>
            <LeftCol>
                <ContentTop>
                    <LoginBox>
                        <div></div>
                        <LoginButton></LoginButton>
                        <div></div>
                    </LoginBox>
                    <IssuesAndLive></IssuesAndLive>
                </ContentTop>
            </LeftCol>
        </Content>
    );
}

export default Body;
