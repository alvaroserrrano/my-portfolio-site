import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../images/Foto_graduacion_jpg.jpg';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={Me} alt='Alvaro Serrano' className='me' />
            <div className='banner-text'>
              <h1>Full stack web developer</h1>
              <hr />
              <p>
                HTML/CSS | SASS | jQuery | JavaScript | React | NodeJS | Express
                | Java | PHP | SQL | PostgreSQL | MongoDB | Mongoose
              </p>
            </div>
            <div className='social-links'>
              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/in/alvaro-serrano-rivas-055351177/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin-square' aria-hidden='true' />
              </a>
              {/* Github */}
              <a
                href='https://github.com/alvaroserrrano?tab=repositories'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fa fa-github-square' aria-hidden='true' />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
