import { loadMicroApp } from "qiankun";
import React, { Component } from "react";
import PropTypes from "prop-types"; // eslint-disable-line

class About extends Component {
    containerRef = React.createRef();
    microApp = null;

    componentDidMount() {
        this.microAppAbout = loadMicroApp({
            name: "child-about",
            entry: "//localhost:8888/about.html",
            container: "#child-about",
            // container: this.containerRef.current,
            props: { brand: "qiankun-about" },
        });
        this.microAppRoomManage = loadMicroApp({
            name: "child-RoomManage",
            entry: "//localhost:8888/RoomManage.html",
            container: "#child-RoomManage",
            // container: this.containerRef.current,
            props: { brand: "qiankun-RoomManage" },
        });
        console.log("this.microApp=", this.microAppAbout);
    }

    componentWillUnmount() {
        this.microAppAbout.unmount();
        this.microAppRoomManage.unmount();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        this.microAppAbout.update({ name: "kuitos-about" });
        this.microAppRoomManage.update({ name: "kuitos-RoomManage" });
    }

    render() {
        return (
            <div ref={this.containerRef}>
                sss
                <div id="child-about" />
                <div id="child-RoomManage" />
            </div>
        );
    }
}

export default About;
