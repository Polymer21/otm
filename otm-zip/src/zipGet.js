import React, {Component} from 'react'
import axios from 'axios'
import './zip-get.css'


class Zip extends Component {
    state = {
            zipCodeInput: '',
            fromZipCode: '',
            toZipCodeSaltLake: '84130',
            toZipCodeStockton: '95215',
            toZipCodeMira: '91752',
            toZipCodeAla: '35061',
            toZipCodePhoenix: '85016',
            toZipCodeHamden: '06517',
            toZipCodeGranite: '62040',
            toZipCodeGary: '46402',
            toZipCodeKansas: '66106',
            toZipCodeNew: '70127',
            toZipCodeToledo: '43607',
            toZipCodePen: '15317',
            toZipCodeEagle: '77434',
            toZipCodeTaco: '98443',
            courses: [],
            saltLakeData: '',
            stocktonData: '',
            miraData: '',
            alaData: '',
            phoenixData: '',
            hamdenData: '',
            graniteData: '',
            garyData: '',
            kansasData: '',
            newData: '',
            toledoData: '',
            penData: '',
            eagleData: '',
            tacomaData: '',
            siteSource: [],
            siteChoice: '',
            sortType: true,
    }

        

     baseUrl = "https://rapidapi.p.rapidapi.com/rest/distance.json"
    
    constructor() {
        super();
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    
    onChangeHandler = (e) => {
        this.setState({
            zipCodeInput: e.target.value
        })
        console.log(this.state.zipCodeInput)
    }


    handleSubmitClick = () => {
        this.setState({fromZipCode: this.state.zipCodeInput, isSubmitted: true},
            () => {
                this.saltLakeZip()
                this.stockZip()
                this.miraZip()
                this.alaZip()
                this.phoenixZip()
                this.hamdenZip()
                this.graniteZip()
                this.garyZip()
                this.kansasZip()
                this.newZip()
                this.toledoZip()
                this.penZip()
                this.eagleZip()
                this.tacoZip()
                this.getSaltLake()
                // this.sort()
            })
        console.log(this.state.fromZipCode, "SubmittedZipcode", "ZIPCODE DATA", this.state.zipData)
    }

    handleSortClick = () => {
        this.sort()

        console.log("SORT", this.sort)
    }

    saltLakeZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeSaltLake}`+ '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ saltLakeData: data.distance })
    }

    stockZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeStockton}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ stocktonData: data.distance })
    }
    
    miraZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeMira}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ miraData: data.distance})
    }

    alaZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeAla}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ alaData: data.distance})
    }

    phoenixZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodePhoenix}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ phoenixData: data.distance})
    }

   

    hamdenZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeHamden}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ hamdenData: data.distance})
    }

    graniteZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeGranite}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ graniteData: data.distance})
    }

    garyZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeGary}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ garyData: data.distance})
    }

    kansasZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeKansas}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ kansasData: data.distance})
    }

    newZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeNew}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ newData: data.distance})
    }

    toledoZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeToledo}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ toledoData: data.distance})
    }

    penZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodePen}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ penData: data.distance})
    }

    eagleZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeEagle}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ eagleData: data.distance})
    }

    tacoZip = async () => {
        let url = this.baseUrl + `/${this.state.fromZipCode}` + `/${this.state.toZipCodeTaco}` + '/mile'
        let data = await axios.get(url, {
            headers: {
                "x-rapidapi-key" : "90f2b5d08dmshd8dd492b31878ebp1e8a85jsncc52ec040754",
                "x-rapidapi-host" : "redline-redline-zipcode.p.rapidapi.com",
                "useQueryString" : true
        }})
        .then(({ data }) => data)
        this.setState({ tacomaData: data.distance})
    }
    
    getSaltLake = async () => {
        let url = 'http://localhost:3000/yards'
        let data = await axios.get(url)
        .then(({ data }) => data)
        console.log(data)
        // this.setState({ tacomaData: data.distance})
    }
 

    render () {

        let saltLakeDistance = this.state.saltLakeData
        let stocktonDistance = this.state.stocktonData
        let miraDistance = this.state.miraData
        let alaDistance = this.state.alaData
        let phoenixDistance = this.state.phoenixData
        let hamdenDistance = this.state.hamdenData
        let graniteDistance = this.state.graniteData
        let garyDistance = this.state.garyData
        let kansasDistance = this.state.kansasData
        let newDistance = this.state.newData
        let toledoDistance = this.state.toledoData
        let penDistance = this.state.penData
        let eagleDistance = this.state.eagleData
        let tacoDistance = this.state.tacomaData

        let zipContainerClass = 'zip-container'
        
        

        this.state.siteSource = [
            miraDistance,
            stocktonDistance,
            saltLakeDistance,
            alaDistance,
            phoenixDistance,
            hamdenDistance,
            graniteDistance,
            kansasDistance,
            newDistance,
            toledoDistance,
            penDistance,
            eagleDistance,
            tacoDistance,
        ]

        let min = this.state.siteSource[0]

        for(let i = 0; i < this.state.siteSource.length; i++)
            if(this.state.siteSource[i] < min ) {
                min = this.state.siteSource[i]
                console.log("setting Min", min)
            } 
        
            

            if(miraDistance === min) {
                this.state.siteChoice = 'MIRA'
            } else if (stocktonDistance === min) {
                this.state.siteChoice = 'Stockton'
            } else if (saltLakeDistance === min) {
                this.state.siteChoice = 'Salt Lake'
            } else if (alaDistance === min) {
                this.state.siteChoice = 'DOLOMITE'
            } else if (phoenixDistance === min) {
                this.state.siteChoice = 'Pheonix'
            } else if (hamdenDistance === min) {
                this.state.siteChoice = 'Hamden'
            } else if (graniteDistance === min) {
                this.state.siteChoice = 'Granite'
            } else if (garyDistance === min) {
                this.state.siteChoice = 'Gary'
            } else if (kansasDistance === min) {
                this.state.siteChoice = 'Kansas'
            } else if (newDistance === min) {
                this.state.siteChoice = 'New Orleans'
            } else if (toledoDistance === min) {
                this.state.siteChoice = 'Toledo'
            } else if (penDistance === min) {
                this.state.siteChoice = 'McMurray'
            } else if (eagleDistance === min) {
                this.state.siteChoice = 'Eagle Lake'
            } else if (tacoDistance === min) {
                this.state.siteChoice = 'Taco'
            }

            const sortTest =  this.state.siteSource.sort((a,b) => a - b)      


        console.log("SITE SOURCE", this.state.siteSource, "SITE TEST", min, "SITE CHOICE", this.state.siteChoice, "SORT PLEASE", sortTest, "LOCAL API", this.getSaltLake())

        return (
            <div className={zipContainerClass}>
                <input type="text" maxlength="5" placeholder="zipcode" onChange={this.onChangeHandler}/>
                <div onClick={this.handleSubmitClick}> submit </div>
                <h2>Salt Lake: {this.state.saltLakeData}</h2>
                <h2>Stockton: {this.state.stocktonData}</h2>
                <h2>Mira Loma: {this.state.miraData}</h2>
                <h2>Dolomite: {this.state.alaData}</h2>
                <h2>Phoenix: {this.state.phoenixData}</h2>
                <h2>Hamden: {this.state.hamdenData}</h2>
                <h2>Granite: {this.state.graniteData}</h2>
                <h2>Gary: {this.state.garyData}</h2>
                <h2>Kansas City: {this.state.kansasData}</h2>
                <h2>New Orleans: {this.state.newData}</h2>
                <h2>Toledo: {this.state.toledoData}</h2>
                <h2>McMurray: {this.state.penData}</h2>
                <h2>Eagle Lake: {this.state.eagleData}</h2>
                <h2>Tacoma: {this.state.tacomaData}</h2>
                <h2>Choice: {this.state.siteChoice}</h2>
            </div>
        )
    }
}

export default Zip