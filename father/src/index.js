import React from "react";
import ReactDOM from "react-dom";
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import "@alifd/next/reset.scss";
import App from "./App";
// import { registerMicroApps, start } from "qiankun";

// registerMicroApps([
//     {
//         name: "child",
//         entry: "//localhost:8888",
//         container: "#child",
//         activeRule: "#/nav1/b",
//     },
// ]);
// // 启动 qiankun
// start();

const mountEl = document.getElementById("root");
ReactDOM.render(<App />, mountEl);
