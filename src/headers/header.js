import React from "react";
import "../../src/assets/css/style.css";
import logo from '../assets/images/logo.svg';
import app1 from '../assets/images/app_1.png';
import ios_logo from '../assets/images/ios.svg';
import android_logo from '../assets/images/android.svg';

const Header = () => {
    return (
        <header class="foi-header landing-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light foi-navbar">
                <a class="navbar-brand" href="index.html">
                    <img src={ logo } alt="FOI"></img>
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="features.html">Features</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="pagesMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <div class="dropdown-menu" aria-labelledby="pagesMenu">
                                <a class="dropdown-item" href="blog.html">Blog</a>
                                <a class="dropdown-item" href="login.html">Login</a>
                                <a class="dropdown-item" href="register.html">Register</a>
                                <a class="dropdown-item" href="faq.html">FAQ</a>
                                <a class="dropdown-item" href="404.html">404</a>
                                <a class="dropdown-item" href="careers.html">Careers</a>
                                <a class="dropdown-item" href="blog-single.html">Single blog</a>
                                <a class="dropdown-item" href="privacy-policy.html">Privacy policy</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mt-2 mt-lg-0">
                        <li class="nav-item mr-2 mb-3 mb-lg-0">
                            <a class="btn btn-secondary" href="register.html">Sign up</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-secondary" href="login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="header-content">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Great app that makes your life awesome</h1>
                        <p class="text-dark">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.</p>
                        <button class="btn btn-primary mb-4">Get Started</button>
                        <div class="my-2">
                            <p class="header-app-download-title">GET OUR MOBILE APP</p>
                        </div>
                        <div>
                            <button class="btn btn-app-download mr-2"><img src={ios_logo} alt="App store"></img></button>
                            <button class="btn btn-app-download"><img src={android_logo} alt="play store"></img></button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src={app1} alt="app" width="388px" class="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;