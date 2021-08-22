import React from 'react'

import WorkPortal from '../WorkerPortal/WorkerHome';



const WRegister = () => {
    return (
        <div className="kingAlock">
            <WorkPortal />

                <form>
                                <h3>Register</h3>

                                <div className="form-group">
                                    <label htmlFor="wname">First name</label>
                                    <input type="text" name="wname" id="wid" autoComplete="off"  className="form-control"  placeholder="First name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="wlname">Last name</label>
                                    <input type="text"  name="wlname" id="wlid" autoComplete="off"  className="form-control" placeholder="Last name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="wemail">Email</label>
                                    <input type="email"  name="wemail" id="weid" autoComplete="off"  className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="wpassword">Password </label>
                                    <input type="password"  name="wpassword" id="wpassword" autoComplete="off"  className="form-control" placeholder="Enter password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="wcpassword">Password </label>
                                    <input type="password"  name="wcpassword" id="wcpassword" autoComplete="off"  className="form-control" placeholder="Enter conform password" />
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                                <p className="forgot-password text-right">
                                    Already registered <a href="#">log in?</a>
                                </p>
                            </form>
                            
        </div>
    )
}

export default WRegister
