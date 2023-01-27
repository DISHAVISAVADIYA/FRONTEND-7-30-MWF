import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import { MDBContainer, MDBCard, MDBBtn, MDBRow, MDBNavbar } from 'mdb-react-ui-kit';
import Footer from './Footer';

function Layout()
{
    return (
        <>
            
            {/* first line  */}
         <MDBContainer fluid className="p-2 pb-0 m-0">
    <MDBRow>
        <div className='col-md-3 ms-5'>
            <Link to=''>About</Link> | <Link to=''>contact us</Link> | <Link to=''> Order tracking</Link>
        </div>
        <div className='col-md-3'>Get great devices upto 50% <Link to='' className='text-success'> view details </Link></div>
        <div className='col-md-5'>Need help ? | call us <b className='text-success'>(+91)-9173357217</b> <i className='bi bi-c-circle'></i> <select name='language' className='border-0 bg-light'>
            <option value="">English</option>
            <option value="">HINDI</option>
            </select> | <select name='language' className='border-0 bg-light'>
            <option value="">USD</option>
            <option value="">INR</option>
            </select>
            </div>
        <hr className='border border-1 border-dark mt-1' />
    </MDBRow> 
 
</MDBContainer> 
         {/* navvar with logo */}
 <MDBNavbar  className="navbar navbar-expand-lg p-2">

<MDBBtn type='button' className='ms-5 btn btn-sm btn-outline-dark'>Nest All Categories</MDBBtn>

<MDBBtn type='button' className='navbar-toggler ms-5 btn btn-outline-btn-dark' data-bs-toggle="collapse" data-bs-target="#btnColl">
   <i className='bi bi-grid-3x3'></i>
</MDBBtn>
<div className='collapse navbar-collapse' id='btnColl'>
<ul className='navbar-link'>
   <li><Link to='/Deals'>Hot Delas</Link></li>
   <li><Link to='/Home'>Home</Link></li>
   <li className='dropdown'><Link to="/About" className='dropdown-toggle' data-bs-toggle="dropdown">About</Link>
   {/* <ul className='dropdown-menu'>
   <li><Link to=''>Who we are ?</Link></li>
   <li><Link to=''>Chairman Messages</Link></li>
   <li><Link to=''>About Us</Link></li>
   <li><Link to=''>Our Locations</Link></li>
   </ul> */}
   </li>
   <li><Link to='Vendor'>Vendors</Link></li>
   <li><Link to='/Service'>Ourservices</Link></li>
   <li><Link to='*'>Blogs</Link></li>
   <li><Link to='*'>Contact</Link></li>
   <li><Link to='*'>OurMenu</Link></li>
   <li className='ms-5'><b><i className='bi bi-phone'></i>1800-95955</b></li>
                    </ul>
                    
                </div>
                
                <hr className='border border-1 border-dark mt-1' />
   
                

            </MDBNavbar>

            
            {/* nav end */}
            {/* search bar */}
    <MDBRow>
        <div className='col-md-2 ms-5 logo pb-0'>
            <Link to='' className='navbar-brand text-success'>NestBeans</Link>
        </div>
        
        <div className='col-md-5 ms-0 mt-3'>
            <form>
                <div className='input-group'>
                    <input type="text" name="search" placeholder='Search' className='form-control' />
                    <span className="input-group-text text-dark"><i className='bi bi-search text-dark'></i></span>
                </div>
            </form>

        </div>
        <div className='col-md-4 mt-3 p-2'>
        <select name='language' className='border-0 bg-light'>
            <option value="">Locations</option>
            <option value="">Gujrat</option>
            </select>

          <Link to="">
           <i className="fas fa-refresh fa-lg"></i>
           <span className="badge bg-danger badge-notification">0</span>
           <span className='text-dark ms-2'>compare</span>
           </Link>

           <Link to="" className='ms-3'>
           <i className="fas fa-cart-shopping fa-lg"></i>
           <span className="badge bg-success badge-notification">0</span>
           <span className='text-dark ms-2'>wishlist</span>
           </Link>
           <Link to="cart"  className='ms-1'>
           <i className="fas fa-shopping-bag fa-lg"></i>
           <span className="badge bg-success badge-notification">0</span>
           <span className='text-dark ms-2'>cart</span>
           </Link>
      
        <Link to="create-account" className='ms-1'>
           <i className="fas fa-users fa-lg"></i>
           <span className='text-dark ms-2'>Account</span>
           </Link>
           </div>

     
        <hr className='border border-1 border-dark mt-1' />
    </MDBRow>
    <Outlet />
        <Footer/>
        </>
    )
}
export default Layout;