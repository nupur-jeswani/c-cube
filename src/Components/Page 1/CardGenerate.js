import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CardGenerate = ({src, cardHeading, cardBody, to}) => {
    return ( 

        <Link className="card-redirects" to={to}> 
            <div className="card quiz-cards">
            <img src={src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4>{cardHeading}</h4>
                <p className="card-text">{cardBody}</p>
                
            </div>
            <div className="progress"></div> 
    </div></Link>
     );

}
 
export default CardGenerate;
