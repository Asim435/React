import Hooks from './Hooks';
import Example from '../reactBootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Controlled from './Controlled';
import { CardDesign } from '../To_Do_List/TaskScheduling';
import NavBar from './NavBar';
import Calculator from '../Calculator/Calculator';
export default function Rooter() {
    return <>
        <Router>
            <div>
                <NavBar />

                <Routes>
                    <Route path="/" element={< Hooks />} />
                    <Route path="/Controlled" element={<Controlled />} />
                    <Route path="/calclator" element={<Calculator />} />
                    <Route path="/Task" element={<CardDesign />} />

                </Routes>
            </div>
        </Router>
    </>
}