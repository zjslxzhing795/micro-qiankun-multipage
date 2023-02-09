import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import { BasicLayout, BlankLayout } from "./layouts";
import Page404 from "./pages/404";

const Loading = () => <span>Loading...</span>;

const lazy = (Name) =>
    Loadable({
        loader: () => import(`./pages/${Name}`),
        loading: Loading,
    });

// TODO:what is React.createElement?
const RouteWithLayout = ({ layout, component, ...rest }) => {
    // eslint-disable-line
    return (
        <Route
            {...rest}
            render={(props) =>
                React.createElement(
                    layout,
                    props,
                    React.createElement(component, props)
                )
            }
        />
    );
};
const blankRoutes = [
    {
        path: "/login",
        exact: false,
        component: "Login",
    },
];

const basicRoutes = [
    {
        path: "/",
        exact: true,
        component: "RoomManage",
    },
    {
        path: "/nav1/b",
        exact: false,
        component: "About",
    },
    {
        path: "/counter",
        exact: false,
        component: "Counter",
    },
    {
        path: "/live",
        exact: false,
        component: "Live",
    },
];

export default (
    <Switch>
        {basicRoutes.map((item) => (
            <RouteWithLayout
                key={item.path}
                layout={BasicLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}

        {blankRoutes.map((item) => (
            <RouteWithLayout
                key={item.path}
                layout={BlankLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}

        <Route component={Page404} />
    </Switch>
);
