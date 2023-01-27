import React from "react";
const d = "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const e ="https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg"
function Right2() {
    return (
        <article>
        <div className="my-name">
            <div className="image">
                    <img src={e } />
            </div>
            <h1>MY NAME</h1>
            <p className="discription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem vel nobis fugiat hic, asperiores quam voluptatibus aliquid qui commodi eaque voluptatum culpa eum, necessitatibus veniam, dicta obcaecati iure? Placeat vero rum veniam reiciendis nisi ea id dicta quaerat odit error mollitia ad minima!
            </p>
        </div>


        {/* <!-- popular post --> */}
        <div className="post">
                <h1 style={{ backgroundColor: 'lightgrey', fontWeight: '100', padding: 'auto' }}>Popular Posts</h1>
            <div className="postt">
                <div className="post-img">
                        <img src={ e} />
                </div>
            <div className="post-text"> 
                <p >Lorem</p>
                <p >sea marifd mids</p>
            </div>
        </div>
        <hr/>
        <div className="postt">
            <div className="post-img">
                        <img src={ d} />
            </div>
        <div className="post-text"> 
            <p >Lorem</p>
            <p >sea marifd mids</p>
        </div>
        </div>
        <hr/>
        <div className="postt">
            <div className="post-img">
                <img src={ d}/>
            </div>
        <div className="post-text"> 
            <p >Lorem</p>
            <p >sea marifd mids</p>
        </div>
        
        </div>
        <hr/>
        <div className="postt">
            <div className="post-img">
                <img src={ d}/>
            </div>
        <div className="post-text"> 
            <p >Lorem</p>
            <p >sea marifd mids</p>
        </div>
        
        </div>
        </div>
        {/* <!--tags --> */}
        <div className="tags">
            <h1 style={{backgroundColor: 'lightgrey',fontWeight: '100',padding: 'auto'}}>Tags</h1>
            <div className="location">
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Travel</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Newyork</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>London</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Norway</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Diy</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>India</span>
            
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Shopping</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Sports</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>News</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Clothing</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Travel</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Travel</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Norway</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Diy</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>India</span>
            
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Shopping</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Sports</span>
            <span className="cities" style={{backgroundColor: 'lightgrey'}}>Travel</span>

        </div>



        </div>
        
    </article>
    )
}

export default Right2;

