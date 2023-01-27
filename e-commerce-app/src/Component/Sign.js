import React from "react";
const sign = " sign.jpg";
export default function Sign() {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade p-5 "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign in
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row ">
                <div className="col-md-6 bg-info text-center ">
                  <h3 className="pt-2">Login form</h3>
              
                  <img src={sign} className="img-fluid pb-5" />
                </div>
                <div className="col-md-6 pt-5">
                  <form className="">
                    <input
                      type="text"
                      placeholder="enter firstname"
                      className="contact-input"
                    />
                    <input
                      type="text"
                      placeholder="enter lastname"
                      className="contact-input"
                    />
                  </form>
                  <div className="row mt-5">
                 
                      <button className="bg-primary w-100 btn" >
                        Sign in
                      </button>
                  
                 
                      <p className="text-center">Forget password</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
