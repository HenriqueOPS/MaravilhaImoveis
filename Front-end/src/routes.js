import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Admin from './admin';
function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp