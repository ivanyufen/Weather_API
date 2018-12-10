import React from 'react';
import axios from 'axios';
import ShowData from './showData';


class App extends React.Component {

    state = { cityName: "", data: null, apikey: "2cd8bca4b3a1e7360bf854c1f7cfff01" }

    searchWeather = () => {
        // const url = "http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=2cd8bca4b3a1e7360bf854c1f7cfff01";
        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&appid=" + this.state.apikey;
        axios.get(url).then(
            (x) => {
                this.setState({
                    data: x.data
                })
                console.log(this.state.data)
            }
        ).catch(
            (err) => {
                this.setState({
                    data: "error"
                })
            }
        )
    }

    displayWeather() {
        return (
            <ShowData cityName={this.state.data.name} cityTemp={(this.state.data.main.temp - 273).toFixed(2)} cityLon={this.state.data.coord.lon} cityLat={this.state.data.coord.lat} />
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="p-3 text-center bg-dark text-white">
                    <h1><i class="fas fa-cloud-sun" style={{ color: "yellow" }}></i> Laporan Cuaca <i class="fas fa-cloud-sun" style={{ color: "yellow" }}></i></h1>
                </div>
                <div className="container">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="input-group my-3">
                            {/*  */}
                            <input type="text" id="searchbar" className="form-control" placeholder="Ketik kota anda.. " onChange={(e) => { this.setState({ cityName: e.target.value }) }} autoFocus />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-outline-secondary" onClick={this.searchWeather}>Search Weather</button>
                            </div>
                        </div>
                    </form>
                </div>


                {this.state.data ? (this.state.data === "error" ? <h2 className="text-center">Can't find city name!</h2> : this.displayWeather()) : <h2 className="text-center">Please Input city name!</h2>}

            </React.Fragment >
        )
    }
}

export default App;