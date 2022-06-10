import React, { Component } from 'react'

export class Footer extends Component
{
    render ()
    {
        return (
            <div>
                <hr style={{boxShadow: "1px 0 12px 1px #9E9E9E", color: "#9E9E9E"}}/>
                <div className="container">
                    <footer className="py-1">
                        <div className="row">
                            <div className="col-sm-12 col-md-2 col-lg-2 text-center my-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-2 col-lg-2 text-center my-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-2 col-lg-2 text-center my-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4 offset-1 m-1">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                            <button className="btn btn-dark" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p className='text-center mx-1'>&copy; 2021 Company, Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer