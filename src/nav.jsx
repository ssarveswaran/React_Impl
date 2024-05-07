import { Link } from "react-router-dom";
import "./index.css"

function nav(){
    return (
        <nav>
            <ol>
                <li> <Link to="/about">About</Link></li>
                <li>
                <Link to="/home">Home</Link></li>
                <li>     <Link to="/content">Content</Link></li>
             
           
            </ol>
        
        </nav>
    )
}
export default nav;