import { throws } from 'assert'
import React, { Component } from 'react'
import './home.css'
import Zip from './zipGet'

class Home extends Component {
    state = {
       yards: [],
       yardDistance: [{}],
       site: '',
       check: "",
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
            if (yard.site === "0070") {
                this.state.siteClass = "saltlake-container"
                this.state.site = this.state.yardDistance[0].saltLakeDistance
            } else if (yard.site === "0013") {
                this.state.siteClass = "kansas-container"
                this.state.site = this.state.yardDistance[0].kansasDistance
            }else if (yard.site === "0050") {
                this.state.siteClass = "gary-container"
                this.state.site = this.state.yardDistance[0].garyDistance
            }
            yardElements.push(
                <div key={yard._id} className={this.state.siteClass}>
                    <p className="site">Site: {yard.site}</p>
                    <p className="distance">Distance: {this.state.site}</p>
                    <p className="inv-track-hun">30859: {yard.trackSpikesHundred}</p>
                    <p className="inv-track-fif">35068: {yard.trackSpikesFifty}</p>
                    <p className="inv-washers-one">080936: {yard.washersOne}</p>
                    <p className="inv-washers-eighth">081124: {yard.washersOneEighth}</p>
                    <p className="inv-gauge">864: {yard.gaugeRods}</p>
                    <p className="inv-gauge-a">863: {yard.gaugeRodsA}</p>
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
        
        

        const renderYardDataByID = () => {
            
        }
        console.log(this.state.yardDistance, "Yard Distances!")

        return (
            <div className="home-container">
                {this.displayYards(this.state.yards)}

                <Zip siteCallBack={this.siteData} className="zip-container"/>

                
            </div>
        )
    }
}

export default Home