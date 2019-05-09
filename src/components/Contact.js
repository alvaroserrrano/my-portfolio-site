import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Me from '../images/Foto_graduacion_jpg.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Alvaro Serrano</h2>
                        <img src={Me} alt="Alvaro Serrano"
                        style={{height: '15.625rem'}}/>
                        <p style={{width :'75%', margin: 'auto', paddingTop: '1rem'}}> Full stack web developer</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.875rem', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        (+34) 674 459 450
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.875rem', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        alvaro.serrano@wmich.edu
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.875rem', fontFamily: 'Anton'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        <a href="https://www.linkedin.com/in/alvaro-serrano-rivas-055351177/" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>linkedIn</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.875rem', fontFamily: 'Anton'}}>
                                    <i className="fab fa-github-square" aria-hidden="true"></i>
                                        <a href="https://github.com/alvaroserrrano" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>Github</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;