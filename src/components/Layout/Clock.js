import React, { Component } from "react";
import $ from "jquery";

class Clock extends Component {
    componentDidMount() {
        var currentSec = getSecondsToday();

        var seconds = (currentSec / 60) % 1;
        var minutes = (currentSec / 3600) % 1;
        var hours = (currentSec / 43200) % 1;

        setTime(60 * seconds, "second");
        setTime(3600 * minutes, "minute");
        setTime(43200 * hours, "hour");

        function setTime(left, hand) {
        $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
        }

        function getSecondsToday() {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let diff = now - today; 
        return Math.round(diff / 1000);
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="blockclock">
                    <div className="clock">
                        <div className="clock__second"></div>
                        <div className="clock__minute"></div>
                        <div className="clock__hour"></div>
                        <div className="clock__axis"></div>
                        {Array(59).fill(1).map((el, i) =>
                            <section className="clock__indicator"></section>
                        )}
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Clock;