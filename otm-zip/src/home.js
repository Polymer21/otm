import React, { Component } from 'react'

class Home extends Component {
    state = {
        yards: [],
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
            yardElements.push(
                <div>
                    <p>{yard.siteId}</p>
                    <p>{yard.inventory}</p>
                    <p>{yard.distance}</p>
                </div>
            )
        }
        return yardElements
    }


    render() {
        return (
            <div>
                {this.displayYards(this.state.yards)}
            </div>
                
        )
    }
}

export default Home