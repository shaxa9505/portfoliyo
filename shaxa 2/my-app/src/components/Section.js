import React from 'react';
import Universal1 from "./img/universal1.png";
import Universal2 from "./img/universal2.png";
import Medilab from "./img/medilab.jpg";
import Hotel from "./img/hotel_1.jpg";
import Street from "./img/street.png";
import Hello from "./img/hello.jpg";

function Section(props) {
    return (
        <section id="section">
            <h2>Портфолио</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mb-5 mb-sm-0">
                            <img className="image" src={Universal1} alt="png" />
                            <div className="box">
                                <p>Universal 1</p>
                                <a className="link" href="https://react-universal.netlify.app" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mb-5 mb-sm-0">
                            <img className="image" src={Universal2} alt="png" />
                            <div className="box">
                                <p>Universal 2</p>
                                <a className="link" href="https://react-universal-2.netlify.app" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-sm-5 m-md-0">
                            <img className="image" src={Medilab} alt="png" />
                            <div className="box">
                                <p>Medilab</p>
                                <a className="link" href="https://medilab-project.netlify.app/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                            <img className="image" src={Hotel} alt="png" />
                            <div className="box">
                                <p>Hotel America</p>
                                <a className="link" href="https://hotel-america.netlify.app/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                            <img className="image" src={Street} alt="png" />
                            <div className="box">
                                <p>Street 88</p>
                                <a className="link" href="https://project-street-88.netlify.app/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                            <img className="image" src={Hello} alt="png" />
                            <div className="box">
                                <p>Hello Work</p>
                                <a className="link" href="https://hello-work.netlify.app/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;