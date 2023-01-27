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
                src="https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=is&k=20&c=M29Tjg5gtWqUAOeeLzyhtEmMtHmt2xIWXbCZKbbFvug="
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Fresh and Organic</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis veniam libero, tempore, sunt tenetur nam itaque
                
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* second card */}
          <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://images.pexels.com/photos/4392025/pexels-photo-4392025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Free delhivery</MDBCardTitle>
                <MDBCardText>
                
                  corrupti quia, blanditiis impedit maiores? Et aliquid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
                  </MDBCol>

                  <MDBCol md="4">
            <MDBCard className="card">
              <MDBCardImage
                src="https://images.pexels.com/photos/4393528/pexels-photo-4393528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Easy Payment</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Offuid quaerat
                  nobis accusantium, numquam veritatis voluptate modi!
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
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
