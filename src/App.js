import {Fragment} from "react";
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
    return (
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    );
}

export default App;
