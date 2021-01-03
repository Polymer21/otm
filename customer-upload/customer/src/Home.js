import React, {Component} from 'react'
import './Home.css'


class CustomerHome extends Component {
    render() {
      return (
        <div className="customer-home-container">
            <div className="customer-info-container">
                <div className="customer-input-container">
                    <div className="customer-input-title">
                        <h2 className="customer-input-title-words">
                            Customer Information:
                        </h2>
                    </div>
                    <input placeholder="first name:" type="text" className='first-name-input'/>
                    <input placeholder="last name:" type="text" className='last-name-input'/>
                    <input placeholder="birthday" type="text" className='birthday-input'/>
                    <input placeholder="age" type="text" className='age-input'/>
                </div>
            </div>
        </div>
      );
    }
  }

  export default CustomerHome