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
              I will be starting my sophomore year in Fall 2019. During my
              freshman year I got a GPA of 3.76 and landed my first job as a web
              developer for the Haenicke Institute of Global Studies, where I
              created a test server with Oracle Linux and the LAMP (Linux,
              Apache, MariaDB and PHP) stack. <br />
              Even though I feel comfortable with the LAMP stack, my stack of
              choice is the MERN stack (MongoDB, Express, React and Node).
            </p>
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default AboutMe;
