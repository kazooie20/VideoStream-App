import { Outlet, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import '../App.css';

const Navbar = () => {
    return (
        <>
           
            <div className="ui inverted pointing menu">
                <Link to="/"><button className="item">Streamy</button></Link>
                
                
                <div className="right menu">
                <Link to="/streams/show"><button className="item">All Streams</button></Link>
                <div className="item"><GoogleAuth /></div>
                </div>
            </div>

            <Outlet />
        </>
    )
};

export default Navbar;