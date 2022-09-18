import styled from 'styled-components';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Page = styled.div`
    width: 1130px;
    height: 100vh;
    border: 1px solid #eee;
    margin: auto;
`;

const Nav = styled.div`
    width: 100vw;
    height: 53px;
    border-top: 1px solid #e9e9e9;
    box-shadow: 0px 2px 5px #85858533;
    background-color: white;
    position: absolute;
    top: 160px;
    left: 0;
`;

function App() {
    return (
        <div className="App">
            <Page>
                <Header />
                <Nav />
                <Body />
                <Footer />
            </Page>
        </div>
    );
}

export default App;
