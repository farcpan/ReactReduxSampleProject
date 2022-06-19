import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import { SamplePage } from "./Components/SamplePage";
import { NextPage } from "./Components/NextPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/next">
                    <NextPage />
                </Route>
                <Route path="/">
                    <SamplePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
