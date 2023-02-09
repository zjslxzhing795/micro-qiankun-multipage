import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import "@alifd/next/reset.scss";
import RoomManage from "./pages/RoomManage";

const mountEl = document.getElementById("root");
// ReactDOM.render(<App />, mountEl);

function render(props) {
    const { container } = props;
    ReactDOM.render(
        <RoomManage />,
        container ? container.querySelector("#root") : mountEl
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log("[react16] react app bootstraped");
}

export async function mount(props) {
    console.log("[react16] props from main framework", props);
    console.log(props.container.innerHTML);
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
        container ? container.querySelector("#root") : mountEl
    );
}
