import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './WarmUpPage.css';
import back from './back-arrow.png';
import resetsym from './resetsym.png'

const WarmUpChapter = () => {
    return ( 
        <>
        <div className="container">
            <div className="col-3 text-end xs-1 first-div">
                <Link to="" className="back-arrow-link"> <img src={back} alt="<" height="13px" /> Back </Link>
                <p>Logic</p>
            </div>
            <div className="col-7 sm-6">
                <div className="middle-div-content">
                    <p>
                        Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:
                    </p>
                    <ul>
                        <li> Joseph is not the youngest.</li>
                        <li>Kevin is the oldest</li>
                        <li>Nicholas is not the oldest</li>
                    </ul>
                    <p className="drag">
                        Drag the characters into the dotted boxes
                        <button id="resetbtn"> Reset <img src={resetsym} alt=".." /></button>
                    </p>
                    <div className="img-places">
                        <div className="column1">
                            Youngest
                        </div>
                        <div className="column2">
                            
                        </div>
                        <div className="column3">
                            Oldest
                        </div>
                    </div>

                    <div className="images">
                        <div className="column-1">
                            Joseph
                            <img src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png" alt="joseph" height="120px" width= "120px" />
                        </div>
                        <div className="column-2">
                            Kevin
                            <img src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png" alt="joseph" height="120px" width= "120px"/>
                        </div>
                        <div className="column-3">
                            Nicholas
                            <img src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png" alt="joseph" height="120px" width= "120px"/>
                        </div>
                    </div>

                    <div className="mid-buttons">
                        <button>Show Explanation</button>
                        <button>Submit Answer</button>
                    </div>
                </div>
            </div>
            <div className="col third-div">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Lesson 1
                    </button>
                </div>
                <h1>WARMUP PUZZLES</h1>
            </div>
        </div>
        </>
     );
}
 
export default WarmUpChapter;
