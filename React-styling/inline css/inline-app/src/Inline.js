import React  from "react";
function Inline(){
    return(
        <React.StrictMode>
            <div style={{textAlign : 'center',width : '50%', margin : '6% 20%', backgroundColor : 'white', padding : " 2%  5%", borderRadius : '50px',fontSize : '20px'}}>
                <h1>Get in Touch with Google Map</h1>
            <div style={{display : 'flex', marginTop : '5px'}}>
                <address style={{width :'35%', marginTop : '5%', textAlign : 'left'}}>
                    <b style={{fontSize : '20px'}}>Address</b>
                    <br/>
                    1st Floor, Aditya Complex, <br/>Jalaram 2 Street Number 2, <br/>above Sbi Bank,nr. Indira Circle,<br/>  Jala Ram Nagar,Rajkot, <br/>Gujarat 360005
                    
                    surat,<br/>
                    gujrat
                </address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.8385043371115!2d70.77315374815917!3d22.29022170354924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1671429733255!5m2!1sen!2sin" width="65%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border :'none'}}></iframe> 
            
            </div>
            
            </div>

            </React.StrictMode>
    )
}
export default Inline;