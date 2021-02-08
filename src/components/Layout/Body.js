import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import Clock from "./Clock"
import image1 from '../../assets/images/homeBW.jpg';
import image2 from '../../assets/images/boat.jpg';
import image3 from '../../assets/images/milky.jpg';


const imageHeight = {
    height: "100vh",
};

class Body extends Component {
    render() {
        return (
            <React.Fragment>
                <Parallax bgImage={image1} strength={500}>
                    <div style={imageHeight}>
                        <div className="block">
                            <h2>welcome to our site</h2>
                            <h1>deepin</h1>
                            <Clock />
                        </div>
                    </div>
                </Parallax>
                <Parallax bgImage={image2} blur={{ min: 0, max: 0 }}>
                    <div style={{height: '80vh'}}>
                        <div className="block">
                            <h2>IT'S ME</h2>
                            <h3>Deep in technology that we use.</h3>
                            <h3>Eager to learn, earn and share.</h3>
                            <h3>Empathy and treat everyone equally.</h3>
                            <h3>Pain is a gift.</h3>
                            <h3>Integrity is doing the right thing, even no one is watching. // C.S. Lewis</h3>
                            <h3>Never forget why we started.</h3>
                        </div>
                    </div>
                </Parallax>
                <Parallax bgImage={image3} blur={{ min: 0, max: 0 }} strength={-100}>
                    <div style={imageHeight}>
                        <div className="block">
                            <h2>ABOUT DEEP IN</h2>
                            <h3>A company that's working with a medium to the large scale of software development.</h3>
                            <h3>We have been working on enterprise systems for more than 10 years.</h3>
                            <h3>We can help you to transform the process to be agility.</h3>
                            <h3>Please feel free to contact us, if you have any great projects to do.</h3>

                            <h4>Contact us, we'll reply asap.</h4>
                            <h4><a href = "mailto: contact@deepin.dev">contact@deepin.dev</a></h4>
                            
                            
                            <div className="footer">© 2021 by DEEP IN CO., LTD. | Created with <a href="https://deepin.dev">deepin.dev</a></div>
                        </div>
                    </div>
                </Parallax>
                

            </React.Fragment>
        )
    }
}

export default Body;