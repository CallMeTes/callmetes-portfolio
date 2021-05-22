import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="Tesfa Greaves' Portfolio" scroll>
                <Navigation>
                    <Link to="/landingpage">Home</Link>
                    <Link to="/aboutme">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="My Portfolio">
                <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>

            <Content>
                <div className="page-content" />
                <Main />
            </Content>

        </Layout>
    </div>
  );
}

export default App;