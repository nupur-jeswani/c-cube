import "bootstrap/dist/css/bootstrap.min.css";
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
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" cardHeading="Warmup puzzles" cardBody="Get started with some logic warmups." to={'/WarmUpPage'} /> 
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


                <li className="chapter">

                    <div className="chapter-header">
                        <p className="numbers">3</p>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                    <div className="headings">
                        <h3>Puzzles and Riddles</h3>
                        <p>Even trickier puzzles and the tools you need to solve them.</p>
                    </div> 
                    <div className="card-container">
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png?width=280" cardHeading="Werewolves" cardBody="Who's a werewolf?" /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png?width=280" cardHeading="Logical Language" cardBody='Explore teh logical use of the words "and", "or", and "not".' /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png?width=280" cardHeading="If A, then B." cardBody="If you do this quiz you will learn about sentences like this one." />
                    </div>
                   
                </li>

                <li className="chapter">

                    <div className="chapter-header">
                        <p className="numbers">4</p>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                    </div>
                    <div className="headings">
                        <h3>Multi-Level Thinking</h3>
                        <p>If you know that I know that you know... what then?</p>
                    </div> 
                    <div className="card-container">
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png?width=280" cardHeading="Perfect information" cardBody="If everyone follows the same logic, can you find out what they know?" /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png?width=280" cardHeading="Hat colors" cardBody="Can you figure out who can figure out the color of their hat?" /> 
                        <CardGenerate src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png?width=280" cardHeading="Hat colors with more people." cardBody="What happens to hat puzzles when there are more hats and more people?" />
                    </div>
                   
                </li>
                
            </ol>
        </section>
     );
}
 
export default ChapterBody;