import React from 'react';
import ServicePortal from '../ServicePortal/ServiceHome';


const AddService = () => {
    return (
        <div>
            <ServicePortal/>

<form>
                <h3>ADD SERVICE</h3>

                <div className="form-group">
                    <label htmlFor="WorkName">Enter the type of Work</label>
                    <input type="text" name="WorkName" id="WorkName" autoComplete="off"  className="form-control"  placeholder="Enter the type of Work" />
                </div>

                <div className="form-group">
                    <label htmlFor="WorkA"> Enter the work Address</label>
                    <input type="text"  name="WorkA" id="WorkA" autoComplete="off"  className="form-control" placeholder="Enter the Work Address" />
                </div>

                <div className="form-group">
                    <label htmlFor="WorkM">Add money type of work</label>
                    <input type="text"  name="WorkM" id="WorkM" autoComplete="off"  className="form-control" placeholder="Add money Type of work" />
                </div>

                <div className="form-group">
                    <label htmlFor="WorkN">Enter the mobile number </label>
                    <input type="number"  name="WorkN" id="WorkN" autoComplete="off"  className="form-control" placeholder=" Enter Mobile Number ." />
                </div>

 

                <button type="submit" className="btn btn-dark btn-lg btn-block"> Submit</button>
               
            </form>
            
        </div>
    )
}

export default AddService
