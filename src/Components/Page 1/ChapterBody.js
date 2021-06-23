import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './ChapterBody.css';
import CardGenerate from "./CardGenerate";

const ChapterBody = () => {
    return ( 
        <section className="chapters">
            <ol className="chapter-container">
                <li className="chapter">

                    <div className="chapter-header">
                        <p className="numbers">1</p>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                    <div className="headings">
                        <h3>Introduction</h3>
                        <p>Put your logic to the test with these warmups!</p>
                    </div> 
                    <div className="card-container">
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" cardHeading="Warmup puzzles" cardBody="Get started with some logic warmups." /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280" cardHeading="Truth-Seeking" cardBody="Who or what is telling the truth?" /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280" cardHeading="Strategic Deductions" cardBody="Stretch the information you're given as far as it can go!" />                    
                    </div>
                   
                </li>
                
                <li className="chapter">

                    <div className="chapter-header">
                        <p className="numbers">2</p>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                    <div className="headings">
                        <h3>The Rational Detective</h3>
                        <p>Eliminate the impossible and uncover the truth!</p>
                    </div> 
                    <div className="card-container">
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280" cardHeading="Riddles of Order" cardBody="What order do these racers finish in?" /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=280" cardHeading="Crafty Counting" cardBody="Learn strategies for counting that go far beyond just counting." /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=280" cardHeading="Mystery Containers" cardBody="What's in each of these mystery boxes?" />
                    </div>
                   
                </li>
                
            </ol>
        </section>
     );
}
 
export default ChapterBody;

//<CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" cardHeading="Warmup puzzles" cardBody="Get started with some logic warmups" /> 

 {/* <div className="card quiz-cards">
                                <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Warmup puzzles</h4>
                                    <p className="card-text">Get started with some logic warmups</p>
                                </div>
                            </div>
                            <div className="card quiz-cards">
                                <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Warmup puzzles</h4>
                                    <p className="card-text">Get started with some logic warmups</p>
                                </div>
                            </div> */}