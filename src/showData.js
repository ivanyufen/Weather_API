import React from 'react';

class ShowData extends React.Component {
    render() {
        const { cityName, cityTemp, cityLon, cityLat } = this.props;
        const url = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62526414.84006496!2d${cityLon}3d${cityLat}3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1544156777707`
        const url = https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126932.22077754834!2d${this.props.data.coord.lon}!3d${this.props.data.coord.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1544149304981`
        return (
            <React.Fragment>
                <div className="containe text-center">
                    <h2>Showing you weather in {cityName} </h2>
                    {/* <p>Name: {cityName}</p> */}
                    <p>Degree: {cityTemp} celcius</p>
                    <p>Longitude: {cityLon}</p>
                    <p>Latitude: {cityLat}</p>
                    <p>{url}</p>

                    <iframe src={url} width="600" height="450" frameborder="0" style="border:0"></iframe>
                </div>
            </React.Fragment>
        )
    }
}


export default ShowData;