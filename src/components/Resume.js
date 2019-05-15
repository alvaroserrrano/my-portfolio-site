import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../images/Foto_graduacion_jpg.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={Me}
                alt='Alvaro Serrano'
                style={{ height: '12.5rem' }}
              />
            </div>
            <h2 style={{ paddingTop: '2rem' }}>Alvaro Serrano</h2>
            <h4 style={{ color: 'grey' }}> Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Full stack web developer </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Phone</h5>
            <p>(+34) 674 459 450</p>
            <h5>Mail</h5>
            <p>alvaro.serrano@wmich.edu</p>
            <h5>My website</h5>
            <p>alvaro-serrano-rivas.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Deployed websites</h5>

            <a href='https://vast-inlet-98158.herokuapp.com/'>DevConnector</a>
            <br />
            <a href='https://react-ecommerce-alvaro-serrano.netlify.com/'>
              Ecommerce site
            </a>
            <br />
            <a href='https://react-recipes-alvaro-serrano.netlify.com/'>
              React recipes site
            </a>
            <br />
            <a href='https://js-budget-controller-alvaro-serrano.netlify.com/'>
              JS Budget Controller
            </a>
            <br />
            <a href='https://js-forkify-alvaro-serrano.netlify.com/'>
              JS Forkify
            </a>
            <br />
            <a href='https://capital-lookup-auto-complete.netlify.com/'>
              Capital lookup autocomplete
            </a>
            <br />
            <a href='https://redux-intro-alvaro-serrano.netlify.com/'>
              Introduction to Redux
            </a>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={'2012'}
              endYear={'2018'}
              collegeName={'Humanitas Bilingual School'}
              fieldOfStudy={'Field of study: Engineering'}
              description={'Final grade achieved: 9.58/10'}
            />
            <Education
              startYear={'Fall 2018'}
              endYear={'Spring 2022'}
              collegeName={'Western Michigan University'}
              fieldOfStudy={'Major: Computer Science'}
              description={'Current GPA : 3.86 / 4'}
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={'Now'}
              companyName={'Campus Pepe de la Sagra'}
              jobTitle={'Soccer coach'}
              jobDescription={
                'Leadership, teamwork, organization of teaming events, planning of practice sessions, calenda management, event scheduling and teamwork'
              }
            />
            <Experience
              startYear={2016}
              endYear={2016}
              companyName={'Secin Group'}
              jobTitle={'Civil engineering internship'}
              jobDescription={
                'Internship on a company specialized in the design and contruction of civil works and buildings. This experience provided me with an insight in the daily tasks of a multinational company. I used computer programs such as AutoCad and Revit'
              }
            />
            <Experience
              startYear={'Spring 2019'}
              endYear={'Now'}
              companyName={'Haenicke Institute of Global Education at WMU'}
              jobTitle={'Software developer and support technician'}
              jobDescription={
                'Installed Oracle Linux and implemented a test web server using the LAMP stack (Linux, Apache, MariaDB and PHP. I was introduced to system administration concepts such as: virtualization, SSH, shell features, file permissions, accounts management, Agile testing, networking...'
              }
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Skills</h2>
            <Skills
              nameOfSkill={'Foreign languages:'}
              description={'Spanish - English - French - Italian - German'}
            />
            <Skills
              nameOfSkill={'Technologies:'}
              description={
                'HTML - CSS - SASS - Vanilla JavaScript - ES6 - Bootstrap - jQuery - AJAX - React - Apache - MariaDB - MySql - MongoDB - Mongoose - Python - Java - PHP - Node - Express'
              }
            />
            <Skills
              nameOfSkill={'IT:'}
              description={
                'Version control - Linux - SSH - Shell Scripting - Virtualization - SSL certificates - Agile testing - Networking - Computer hardware troubleshooting - Microsoft Office'
              }
            />
            <Skills
              nameOfSkill={'Soft skills:'}
              description={
                'Team-work - Leadership - Discipline - Public speaking - Writing skills - Attention to detail - Solid work ethics - Web based instructional materials'
              }
            />
            <Skills
              nameOfSkill={'Online courses'}
              description={
                'The complete Javascript course (ude.my/UC-5HLOFF76) - MERN Front to Back: Full stack using React, Redux and Nodejs (ude.my/UC-ZNPYRQ60)'
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
