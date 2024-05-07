import { useParams } from "react-router-dom";
function content(){
    const {name}=useParams();
    return(<>
    <h2>This is content page:{name}</h2>
    </>)
}
export default content;