import { throws } from 'assert'
import React, { Component } from 'react'
import './home.css'
import Zip from './zipGet'

class Home extends Component {
    state = {
       yards: [],
       yardDistance: "",
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
            // if (yard.site === "0070") {
            //     this.state.yardDistance
            // } else if (yard.site === "0013") {
            //     this.state.yardDistance
            // }
            yardElements.push(
                <div key={yard._id} className="site-container">
                    <p className="site">Site: {yard.site}</p>
                    <p className="distance">Distance: {this.state.yardDistance}</p>
                    <p className="inv-track">Spikes: {yard.trackSpikes}</p>
                    <p className="inv-bolts">Bolts: {yard.bolts}</p>
                    <p className="inv-washers">Washers: {yard.washers}</p>
                </div>
            )
        }
        return yardElements
    }

    render() {
        return (
            <div className="home-container">
                {this.displayYards(this.state.yards)}
            </div>
        )
    }
}

export default Home