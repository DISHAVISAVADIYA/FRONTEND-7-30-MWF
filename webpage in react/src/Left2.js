import React from "react";
import './Blog.css';

const b="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
const c ="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"


function  Left2() {
    return (
        
        <>
        
        <aside>
                <div className="first">
                    <div className="image">
                        <img src={ b}/>
                    </div>
                    <h1>title heading</h1>
                    <p>Title discription <small style={{ color: 'grey' }}>April 7,2014</small></p>
                    <p className="discription">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam velit saepe laboriosam cumque cum eos, a aliquam harum repudiandae iusto asperiores? Amet, rerum delectus rem iste assumenda esse tempore?
                    </p>
                    
                    <button><a href="#">Read more </a></button>
                    <b>comments <span style={{ backgroundColor: 'black', color: 'aliceblue', padding: '2px' }}>0</span></b>
 
                </div>
                {/* <!-- second --> */}
                <div className="second">
                    <div className="image">
                        <img src={ c} />
                    </div>
                    <h1>title heading</h1>
                    <p>Title discription <small style={{ color: 'grey' }}>April 7,2014</small></p>
                    <p className="discription">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam velit saepe laboriosam cumque cum eos, a aliquam harum repudiandae iusto asperiores? Amet, rerum delectus rem iste assumenda esse tempore?
                    </p>
                    
                    <button><a>Read more</a></button>
                    <b>comments <span style={{backgroundColor: 'black', color: 'aliceblue', padding: '2px'}}>0</span></b>
 
                </div>

            </aside>
        </>
    )
}
export default Left2;