import './App.module.scss';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// ------------------- Containeurs  -----------------------
import Header from './components/containers/Header/Index';
import Footer from './components/containers/Footer/Index';

// ---------------------- pages  ---------------------------
import Intro from './components/pages/Intro/Index';
import Home from './components/pages/Home/Index';
import Portfolio from './components/pages/Portfolio/Index';
import About from './components/pages/About/Index';
import Contact from './components/pages/Contact/Index';
import NotFound from './components/pages/NotFound/Index';

function IntroLayout() {
    return <Outlet/>
}

function GeneralLayout() {
    return <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroLayout/>}>
                    <Route index element={<Intro/>}/>
                </Route>

                <Route path="/en" element={<GeneralLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="portfolio/:continent/:country?" element={<Portfolio/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="not-found" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;