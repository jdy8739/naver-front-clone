import styled from 'styled-components';

const Head = styled.div`
    width: 100%;
    height: 160px;
`;

const HeadService = styled.div`
    float: right;
    font-size: 11px;
    padding-top: 12px;
`;

const HeadContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    a {
        color: #19ce60;
        text-decoration: none;
        margin-right: 26px;
        margin-top: 2px;
    }
    img {
        vertical-align: middle;
        margin-left: -17px;
    }
`;

const SearchBox = styled.div`
    width: 129px;
    height: 100%;
`;

const SearchIcon = styled.div`
    width: 54px;
    height: 100%;
    background-color: #19ce60;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        padding-left: 17px;
    }
`;

const SearchInput = styled.input`
    width: 454px;
    padding: 10px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    :focus {
        border: none;
        outline: none !important;
    }
`;

const SearchForm = styled.form`
    width: 582px;
    height: 52px;
    border: 2px solid #19ce60;
    display: flex;
`;

function Header() {
    return (
        <Head>
            <HeadService>
                네이버를 시작페이지로&emsp;|&emsp;쥬니어네이버&emsp;해피빈
            </HeadService>
            <HeadContent>
                <a href="/">
                    <img
                        src="./images/naver-hermes.png"
                        width="95px"
                        height="80px"
                        alt="naver-logo"
                    />
                    <img
                        src="./images/01 NAVER Logo_Green.png"
                        width="154px"
                        height="30px"
                        alt="hermers-hat"
                    />
                </a>
                <SearchForm>
                    <SearchInput />
                    <SearchBox>
                        <SearchIcon>
                            <img
                                src="./images/search.png"
                                width="25px"
                                height="25px"
                                alt="search"
                            />
                        </SearchIcon>
                    </SearchBox>
                </SearchForm>
            </HeadContent>
        </Head>
    );
}

export default Header;
