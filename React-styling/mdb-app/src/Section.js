import React from "react";
import { MDBContainer, MDBCard,
    MDBRow,
    MDBCol,
    MDBCardHeader,
    MDBCardImage} from 'mdb-react-ui-kit';

export default function Section(){
    return(
<React.Fragment>

    <MDBContainer className="border border-2 border-dark">
        <MDBRow>
        <MDBCol size='6'>
        <MDBCard>
        <MDBCardImage>

        </MDBCardImage>
        </MDBCard>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
</React.Fragment>
    );
}