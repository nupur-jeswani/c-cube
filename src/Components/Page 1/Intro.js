import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Intro.css';
import { useState } from "react";
import CardBg from './logic-card-bg.png';
import ChapterBody from "./ChapterBody";
import Back from './back-arrow.png';

const Intro = () => {

    const [readMore, setReadMore] = useState(false);

    const readMoreContent = 
        <>
        <p className="paragraphs">
            By the end of this course, you'll be able to spot logical fallacies, navigate some strategic game theory, understand machine logic, and use the symbolic languages of logic to understand fun riddles.
        </p>
        <div>
            <h5>Topics Covered</h5>
            <ul className="topic-list">
                <li>Binary</li>
                <li>Truth Tables</li>
                <li>Logic Gates</li>
                <li>Venn and Euler Diagrams</li>
                <li>Propositional Logic</li>
                <li>The Square of Opposition</li>
                <li>De Morgan's Laws</li>
                <li>Inclusive and Exclusive OR</li>
                <li>Combinatorics</li>
                <li>Knight and Knave Puzzles</li>
                <li>Combinatorial Game </li>
                <li>Algorithms</li>
            </ul>
        </div>
        </>
    ;

    const linkName = readMore? '' : 'Read More';


    return ( 
        <div className="div-body">
            <div className="logic-container">
                <div className="container">
                    <div className="content">
                        <Link className="back-link" to="/"> <img src={Back} alt="back-icon" height="12px"/> &nbsp; Back to all courses </Link>
                        <h1 className="title">Logic</h1>
                        
                        <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
                    
                        <p className="paragraphs">
                            The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
                        </p>

                        <p className="paragraphs">
                            You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!
                            &nbsp; <button className="read-more" onClick={() => {setReadMore(!readMore)}}> { linkName } </button>
                        </p>
                        
                        {readMore && readMoreContent}
                    
                        <button className="read-more"> View pre-requisites and next steps </button>
                    </div>

                    <div className="card">
                        <img src={CardBg} className="card-img-top" alt="Logic-Card" />
                        <div className="stats">
                            <div>
                                <p>37</p>
                                <h3>Interactive quizzes</h3>
                            </div>
                            <div>
                                <p>265+</p>
                                <h3>Concepts and exercises</h3>
                            </div>

                            <button className="btn btn-dark"> Start Course</button>
                        </div>   
                    </div>
                
                </div>
            </div>

            <ChapterBody />

        </div>
     );
}
 
export default Intro;
