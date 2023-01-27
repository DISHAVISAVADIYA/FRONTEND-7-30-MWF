import React from "react";
import "./style.css";

const b = " https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg";
const c = " https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg";
const d = " https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg";
const e = " https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg";
const f = " https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg";

function Right() {
  return (
    <React.Fragment>
      <article>
        <div className="my-name">
          <div className="image">
            <img src={b} />
          </div>
          <h1>MY NAME</h1>
          <p className="discription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptatem vel nobis fugiat hic, asperiores quam voluptatibus
            aliquid qui commodi eaque voluptatum culpa eum, necessitatibus
            veniam, dicta obcaecati iure? Placeat vero rum veniam reiciendis
            nisi ea id dicta quaerat odit error mollitia ad minima!
          </p>
        </div>
        {/* popular post  */}
        <div className="post">
          <h1>Popular Posts</h1>
          <div className="postt">
            <div className="post-img">
              <img src={c} />
            </div>
            <div className="post-text">
              <p>Lorem</p>
              <p>sea marifd mids</p>
            </div>
          </div>
          <hr />
          <div className="postt">
            <div className="post-img">
              <img src={d} />
            </div>
            <div className="post-text">
              <p>Lorem</p>
              <p>sea marifd mids</p>
            </div>
          </div>
          <hr />
          <div className="postt">
            <div className="post-img">
              <img src={e} />
            </div>
            <div className="post-text">
              <p>Lorem</p>
              <p>sea marifd mids</p>
            </div>
          </div>
          <hr />
          <div className="postt">
            <div class="post-img">
              <img src={f} />
            </div>
            <div className="post-text">
              <p>Lorem</p>
              <p>sea marifd mids</p>
            </div>
                  </div>
                  </div>
                {/* tages */}
          <div className="tags">
            <h1
              style={{
                backgroundColor: "lightgrey",
                fontWeight: "100",
                padding: "auto",
              }}
            >
              Tags
                      </h1>
                      {/* location */}
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
                  {/* end location */}
              </div>
              {/* end tags */}
              
        
            
              </article>
    </React.Fragment>
  );
}
export default Right;
