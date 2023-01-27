import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Service() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol  md="4">
            <MDBCard className="card"  >
              <MDBCardImage
                src="https://images.pexels.com/photos/1992912/pexels-photo-1992912.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Lorem</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* second card */}
          <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://images.pexels.com/photos/7263016/pexels-photo-7263016.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <MDBCardBody>
                <MDBCardTitle>Ipsum</MDBCardTitle>
                <MDBCardText>
                
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>

              </MDBCardBody>
            </MDBCard>
                  </MDBCol>

                  <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://images.pexels.com/photos/1992912/pexels-photo-1992912.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Lorem ipsum</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Offuid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Add to cart</MDBBtn>

              </MDBCardBody>
            </MDBCard>
                  </MDBCol>


            
                  



        </MDBRow>
      </MDBContainer>
      {/* 
          <MDBCol md="3">
            <MDBCard className="card">
              <MDBCardImage
                src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=is&k=20&c=M29Tjg5gtWqUAOeeLzyhtEmMtHmt2xIWXbCZKbbFvug="
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Fresh and Organic</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="3">
            <MDBCard className="card">
              <MDBCardImage
                src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=is&k=20&c=M29Tjg5gtWqUAOeeLzyhtEmMtHmt2xIWXbCZKbbFvug="
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Fresh and Organic</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="card">
              <MDBCardImage
                src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=is&k=20&c=M29Tjg5gtWqUAOeeLzyhtEmMtHmt2xIWXbCZKbbFvug="
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Fresh and Organic</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
    </>
  );
}
