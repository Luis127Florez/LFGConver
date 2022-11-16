import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import FormularioAdmin from './FormularioAdmin/FormularioAdmin';
import Compani1 from './Compani1/Compani1';
import Compani2 from './Compani2/Compani2';
import Home from './Home/Home';


function Enrutador(params:any) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/FormularioAdmin" element={<FormularioAdmin />} />
                <Route path="/Empresa1" element={<Compani1/>} />
                <Route path="/Empresa2" element={<Compani2/>} />
                <Route path="/Home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Enrutador