import React, { Component } from 'react'


export default class extends Component {

    state = {
        siteId: "",
        inventory: "",
        distance: 0
    }

    onChangeHandler = (e) => {
        switch(e.target.id) {
            case "siteid": 
                this.setState({ siteId: e.target.value})
                break
            case "inventory": 
                this.setState({ inventory: e.target.value })
                break
            case "distance":
                this.setState({ distance: Number(e.target.value) })
                break
            default: 
                throw Error("Invalid ID")
        }
        console.log(this.state)
    }

        async postData(path, yardData) {
        const url = `http://localhost:3001${path}`
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(yardData),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        console.log(response)
        return response
    }

    postHandler = async () => {
        await this.postData("/yards", this.state)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input id="siteid" type="text" placeholder="Site ID"onChange={this.onChangeHandler}/>
                <input id="inventory" type="text" placeholder="Inventory"onChange={this.onChangeHandler}/>
                <input id="distance" type="text" placeholder="Distance"onChange={this.onChangeHandler}/>
                <button onClick={this.postHandler}> Create </button>
            </div>
        )
    }
}