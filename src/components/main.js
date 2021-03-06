import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route path="/aboutme" component={AboutMe}/>
        <Route exact path = "/" component={LandingPage}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;