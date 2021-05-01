import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navBar.css';



const navBar = () => {
    return ( 
      <div> 
              <section className = "Banner">        
                  <div>
                    <img  src="/assets/Banner-1.jpg" alt="logo1" /> 
                  </div>                                   
              </section>

              <Navbar className="navbar"  expand="md" >
               <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav " >
                      <Nav className="nav-item mr-auto   ">
                        <Nav.Link href="/home">Home</Nav.Link>     
                        <Nav.Link href="/assets/List of Govt I.T.I.s_2020.pdf">Govt ITIs</Nav.Link> 
                        <Nav.Link href="/assets/List of NCVT Trades - 2020.pdf">Pvt ITIs</Nav.Link> 
                        <Nav.Link href="/assets/List of Private I.T.I.s - 2020.pdf">NCVT Trades</Nav.Link>                   
                        <Nav.Link href="/profile">ITI Profile</Nav.Link>
                          <NavDropdown title="Placements" >
                              <NavDropdown.Item href="/placementdashBoard">Placement DashBoard</NavDropdown.Item>
                              <NavDropdown.Item href="/placementabstractreport">Placement Abstract Report</NavDropdown.Item>
                              <NavDropdown.Item href="/jobseekersreport">Job Seekers Report</NavDropdown.Item>
                              <NavDropdown.Item href="/placementopen">Placement Candidate Profile Update</NavDropdown.Item>
                         </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                </div>
          </Navbar>          
     </div>
    );
}
 
export default navBar;
