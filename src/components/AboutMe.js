import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../images/Foto_graduacion_jpg.jpg';

class AboutMe extends Component {
  render() {
    return (
      <section id='about'>
        <Grid>
          <Cell col={3}>
            <img
              src={Me}
              alt='Alvaro Serrano'
              className='profile-pic'
              style={{ marginLeft: '2rem' }}
            />
          </Cell>
          <Cell col={9}>
            <h2>
              <strong>About me</strong>
            </h2>
            <p style={{ marginRight: '1.5rem', color: '#fff' }}>
              After finishing high school in Spain, I made the decision to move
              to the United States for college. I chose Western Michigan
              University to major in Computer Science. <br />
              WMU has allowed me to get my first job as a web developer during
              my freshman year. Since then, I continue learning about web
              development, network security, operating systems and ethical
              hacking.
              <br />
              My strongest point is my ability to learn things guided by my
              curiosity and passion for Computer Science.
            </p>
            <h2>
              <strong>Learn more</strong>
            </h2>
            <ul>
              <li>
                <a href='https://github.com/alvaroserrrano'>Github</a>
              </li>
              <a href='https://www.linkedin.com/in/alvaro-serrano-rivas-055351177/'>
                Linkedin
              </a>
              <li />
            </ul>
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default AboutMe;
