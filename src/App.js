import React from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { create } from 'jss';
import rtl from 'jss-rtl';

import { MuiThemeProvider, StylesProvider, createMuiTheme, jssPreset, } from '@material-ui/core/styles';
import i18n from "./i18n/i18n";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import { useTranslation } from 'react-i18next';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Footer from 'components/Footer/Footer';

import "./App.css";

var hist = createBrowserHistory();

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {

    const { t } = useTranslation();

    const theme = createMuiTheme({
        direction: i18n.dir(),
        typography: {
            fontFamily: 'Vazir',
        },
    });

    document.body.dir = i18n.dir();
    document.title = t('site.ganjehozour');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        document.body.dir = i18n.dir();
        document.title = t('site.ganjehozour');
    }

    return (
        <StylesProvider jss={jss}>
            <MuiThemeProvider theme={theme}>
                <Router history={hist}>
                    <Header
                        brand={t('site.ganjehozour')}
                        rightLinks={<HeaderLinks />}
                        fixed
                        color="transparent"
                        changeLanguage={changeLanguage}
                        changeColorOnScroll={{
                            height: 400,
                            color: "white"
                        }}
                    />
                    <Switch>
                        <Route path="/landing-page" component={LandingPage} />
                        <Route path="/profile-page" component={ProfilePage} />
                        <Route path="/login-page" component={LoginPage} />
                        <Route path="/" component={Components} />
                    </Switch>
                    <Footer />
                </Router>
            </MuiThemeProvider>
        </StylesProvider>
    )
}

export default App;