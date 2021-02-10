import { throws } from 'assert'
import React, { Component } from 'react'
import './serverData.css'
import Zip from './zipGet'

class ServerData extends Component {
    state = {
       yards: [],
       yardDistance: [{}],
       site: '',
       check: "",
       displayDistance: false
    }
    
    getData = async (path) => {
        const yardUrl = `http://localhost:3001${path}`
        const response = await fetch(yardUrl)
        const yardData = await response.json() 
        return yardData
    }


     async componentDidMount(path) {
        const yardsResponse = await this.getData("/yards") 
        console.log("Server Data", yardsResponse)
        this.setState({ yards: yardsResponse.yards })
    }


    displayYards = (yards) => {
        const yardElements = [] 
        for (const yard of yards) {
            if (yard.site === "AREMA TRACK SPIKES") {
                this.state.siteClass = "saltlake-container"
                this.state.site = this.state.yardDistance[0].saltLakeDistance
            } else if (yard.site === "Button Head Oval Neck Bolts") {
                this.state.siteClass = "kansas-container"
                this.state.site = this.state.yardDistance[0].kansasDistance
            }else if (yard.site === "115 Joint Bars") {
                this.state.siteClass = "gary-container"
                this.state.site = this.state.yardDistance[0].garyDistance
            }
            yardElements.push(
                <div key={yard._id} className={this.state.siteClass}>
                    <p className="product-name">{yard.site}</p>
                    <p className="distance">Distance: {this.state.site}</p>
                    <p className="weight"> Weight <br/>{yard.Weight}</p>
                    <p className="quality"> Quality <br/>{yard.Quality}</p>
                    <div className="photo">
                        PHOTO
                    </div>
                    {/* <p className="inv-washers-one">080936: {yard.washersOne}</p>
                    <p className="inv-washers-eighth">081124: {yard.washersOneEighth}</p>
                    <p className="inv-gauge">864: {yard.gaugeRods}</p>
                    <p className="inv-gauge-a">863: {yard.gaugeRodsA}</p> */}
                    <input placeholder="QTY" className="product-qty"/>
                    <div className="add-to-cart">
                         <p className="add-to-cart-call">
                           Add to cart
                         </p>
                    </div>
                    
                    
                    
                </div>
            )
        }
        return yardElements
    }

    siteData = async (siteData) => {
        this.setState({
            yardDistance: siteData
        })
    } 


    
    render() {

         
        let calcDisplay = this.state.displayDistance
        let zipCalculator = "zip-hid-contain"




        console.log(this.state.yardDistance, "Yard Distances!")

        return (
            <div className="home-container">
                <div className="top-product-page">

                </div>
                {this.displayYards(this.state.yards)}

                <div className="zip-container">
                    <Zip siteCallBack={this.siteData} className="zip-inner-workings"/>
                </div>

                
                
            </div>
        )
    }
}

export default ServerData