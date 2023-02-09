import React, { Component } from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createHistory from "history/createHashHistory";
import createStore from "./store";
import models from "./models";
import routes from "./routes";

// import './styles/global.scss';

const history = createHistory();
const store = createStore(models);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter
                    history={history}
                    basename={window.__POWERED_BY_QIANKUN__ ? "/child" : "/"}
                >
                    {routes}
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
