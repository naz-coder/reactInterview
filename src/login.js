import React from 'react';
// import logo from './images/logo.png'
import englogo from './images/englogo.png';
import logo from './images/logo.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import {link} from 'react-router-dom';



function login(props){
    
      return(
        <section className="div1">
            <div className="login">
                <div className="form">
                    <header className='header'>
                        <img src={logo} alt="Logo" width="200px" height="50px"/>
                    </header>

                    <forms className="group">
                        <input type="text" className="input" placeholder='Your e-mail address'/>
                        <br/>
                            <input type="text" className="input" placeholder='Your password'/>
                            <div className="password">
                            <p className="name">Forgot password?        </p>
                            <buttons className="btnl">LOGIN</buttons>
                        </div>
                        <br/>
                        <p className="register">--------------------or--------------------</p>
                        <br/>
                        <a href="/account"><buttons className="btnc">CREATE A NEW ACCOUNT</buttons></a>
                    </forms>
                </div>
                <div className="slideflex">
                    <div  className="subslidef">
                        <div className="hdiv">

                            {/* <h2 className="h">h2</h2> */}
                        </div>
                        <ul className="ul">
                            {/* <li className="li"></li>
                            <li className="li"></li>
                            <li className="li"></li>                       */}
                        </ul>
                        <Carousel>
                        <Carousel.Item>
                        <img src={img1} alt="First slide" position="cover all"/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={img2} alt="Second slide" position="fixed"/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={img3} alt="Third slide" background-size="cover"/>
                        </Carousel.Item>
                    </Carousel>

                        {/* <div className="slidea" style={{
                            position: "fixed",
                            bottom: "0px",
                            left: "50%",
                            maxWidth:'450px',
                            zIndex: 1,
                            translateX:'-50%'
                        }}></div>
                        <div className="slideb" style={{
                            position: "fixed",
                            bottom: "0px",
                            left: "50%",
                            maxWidth:'450px',
                            zIndex: 1,
                            translateX:'-100%'
                        }}></div>
                        <div className="slidec" style={{
                            position: "fixed",
  bottom: "0px",
  left: "50%",
  maxWidth:'450px',
  zIndex: 1,
  translateX:'-200%'
}}></div> */}
                    </div>

                </div>
                    {/* <img src={img1} alt="Slidea" />
                    <img src={img2} alt="Slideb"/>
                    <img src={img3} alt="Slidec"/> */}
                  
            </div>
                    {/* <div className="slide">
                    </div>
                    <div className="slidee">
                    </div>
                    <div className="slideee">
                    </div>
                    */}
                    
                    {/* <section className="slide2" style={{backgroundImage:`url{"../src/images/img2.png"}`}}>
                    </section>
                    <section className="slide3" style={{backgroundImage:`url{"../src/images/img3.png"}`}}>
                    </section> */}
            <footer className="foot">
                <div className="englogo">
                    <img src={englogo} alt="English" width="40px" height="25px"/><span>English</span>
                    {/* <img src={require(../images/englogo.png)} width="100" height="50"/> */}
                </div>
                <div className="tandc">
                    <ul>
                        <a href="">TERMS OF SERVICE</a>
                    </ul>
                    <ul>
                        <a href="">PRIVACY POLICY</a>
                    </ul>
                </div>       
            </footer>
        </section>
      );  
}
export default login;