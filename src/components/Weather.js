import React from "react";

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city && this.props.country && <p> Location:{this.props.city},{this.props.country}</p>}
//                 {this.props.temperature && <p>Temperature:{this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
//                 {this.props.description && <p>Condition:{this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// };

    const Weather = (props) => {
        return(
            <div className="weather_details">
                {props.city && props.country && <p className="wather_list"> Location:<span>{props.city},{props.country}</span></p>}
                {props.temperature && <p className="wather_list">Temperature:<span>{props.temperature}</span></p>}
                {props.humidity && <p className="wather_list">Humidity:<span>{props.humidity}</span></p>}
                {props.description && <p className="wather_list">Condition:<span>{props.description}</span></p>}
                {props.error && <p className="wather_error"><span>{props.error}</span></p>}
            </div>
        );
    }

export default Weather;