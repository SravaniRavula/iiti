import React, {Component} from 'react' ;
import './home.css';
import data from '../data.json';
import {Carousel} from 'react-bootstrap';
import Cards from './Cards';



class Home extends Component {
    render() {
        return (
              <>
              {
                  data.home_pages.map((details) => {
                        return(
                            <>

              <div className="">
              <section>
                  <div className="details ">
                        <marquee behaviour="alternate" scrolldelay="140"><h5>{details.notification}</h5></marquee>
                  </div>
              </section>
              <section className="Content__Section">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-sm-2 col-lg-2">            
                            <div className="quick_links">
                                <ul>  
                                    {
                                        details.content.map((information) => {
                                            return(
                                                <>
                                                    <li><a href={information.link} target="_blank"><span > <i className={information.icon} aria-hidden="true"></i> {information.header} </span></a></li>
                                                </>
                                            );
                                            })
                                    }     
                                </ul>
                            </div>
                        </div>
                        <section className=" col-sm-2 col-lg-8">
                            <h3 className=" text-center  my-2 ">{details.title}</h3>                 
                         <section className="testimonials py-4  "> 
                             <div className="fixed-bnr">
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>

                        </Carousel>
                        </div> 
                        </section> 
                        </section>
                        
                        <div className="col-sm-2 col-lg-2">              
                        <div className="green_btn">
                         	{
                                details.student_forms.map((description) => {
                                    return(
                                        <>                                         
                                            <a href={description.link} target="_blank"><img src={description.src} alt={description.alt} title={description.title} />
                                            <span style={{color:'white'}}>{description.title}</span></a>
                                        </>
                                    );
                                    })
                            } 
                            </div>    
                         <div className="emp_login">
                            {
                                details.employe_forms.map((description) => {
                                    return(
                                        <>                                         
                                            <a href={description.link} target="_blank"><img src={description.src} alt={description.alt} title={description.title} />
                                            <span style={{color:'white'}}>{description.title}</span></a>
                                        </>
                                    );
                                    })
                            } 

           
        </div>
        <div className="news_block">
                            {
                                details.News_Updates.map((description) => {
                                    return(
                                        <>                                         
                                             <div className="news_title"><img src={description.src} alt={description.alt} title={description.title} /> {description.title}</div>
                                        
      
                <marquee direction = "up">
                    <ul id="ticker_02" className="ticker"> 
                        
                        {
                                description.notifications.map((details) => {
                                    return(
                                        <>  
                                         <li>                                      
                                            <a href={details.link}  target="_blank"><b>{details.title}</b></a> <br/> --
                                            <small>{details.subtitle}</small> 
                                         </li> 
                                        </>
                                    );
                                    })
                        }  
                                               
                    </ul>
                </marquee>
               
                </>
                                              );
                                            })
                                    } 


            <span className="button"><a  style={{color:'white'}} href={details.button_link}>{details.button}</a></span>
                <div className="clearfix"></div>  
        </div>
        
        
        
        </div>           
       
        </div>
         
        
                    
                </div>
                </section>
                
              </div>
              <section className="card_info">
                    <Cards />
                </section>
              
              </>
                        );
                  })
              }
	
             </>                         
            
        );
    }
}

export default Home;