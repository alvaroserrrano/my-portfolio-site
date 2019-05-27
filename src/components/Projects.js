import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  List,
  ListItem,
  ListItemContent
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        // project 1
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.androidguys.com%2Fwp-content%2Fuploads%2F2015%2F07%2F1799752.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Test web server set up implementing LAMP stack(Oracle Linux,
                  Apache, MariaDB and PHP).
                  <br />
                  <br />
                  Linux system administration tasks: virtualization, command
                  line interface, shell features, package management, file
                  permissions, access control, accounts management, processes,
                  file system, networking, SSH, Bash scripts and SSL
                  certificates.
                  <br />
                  <br />
                  Expertise in troubleshooting of Computer hardware related
                  problems such like UPS, printers and Drivers.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/hige-itapps'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Test
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href='https://webauth.wmich.edu/login?service=https%3A%2F%2Fiefdf.wmich.edu%2Fhome%2Fhome.php'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Production
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmetrouk2.files.wordpress.com%2F2017%2F02%2Fhippo-campus.png&f=1) center / cover'
                  }}
                />
                <CardText>
                  I created this website as the final project for my Web
                  Technologies class at WMU during my freshman year.
                  <br />
                  <br />
                  This is a website for a music band called Hippo Campus. I
                  developed the full. stack application using HTML, CSS, SASS,
                  Javascript, jQuery, Ajax, MySQL and PHP
                  <br />
                  <br />
                  Since it is an unofficial website, the sign up does not work.
                  In order to log in and access the website you can use{' '}
                  <strong>Username: </strong> peterParker and{' '}
                  <strong>Password: </strong> password.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/hippoCampus-2'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href='https://hippo-campus.000webhostapp.com/login.php'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        // project 2
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'blackf',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fhistorycooperative.org%2Fwp-content%2Fuploads%2F2016%2F09%2FECommerce-process.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Real-world application based on an ecommerce site for buying
                  cell phones.
                  <br />
                  <br />I used styled components over CSS.
                  <br />
                  <br />I used React Context to manage the state of the
                  application
                  <br />
                  <br />
                  This is only a front-end application which does not have a
                  database to control the backend and whose data is retrieved
                  from a JSON object (data.js).
                  <br />
                  <br />
                  You can add items to the cart and remove them.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/EcommerceSite/tree/master/ecommerce'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://react-ecommerce-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'blackf',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.framedrecipes.com%2Fwp-content%2Fuploads%2F2014%2F09%2FDSC_9130_Uthappam_Final.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Real-world application that fetches data from Food2Fork API.
                  <br />
                  <br />
                  Asynchronous JavaScript
                  <br />
                  <br />
                  Styled with bootstrap
                  <br />
                  <br />
                  Includes hardcoded data in order not to consume API calls
                  during development
                  <br />
                  <br />
                  You can search for recipes and see details, be redirected to
                  the publisher´s site...
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='
                        https://github.com/alvaroserrrano/React-Recipes/tree/master/recipe'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://react-recipes-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'blackf',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftwinpalms-phuket.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGrand-deluxe-lagoon-2.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  This app features a resort webpage. I created the content with
                  'Contentful' in order to store and edit content in one hub{' '}
                  <br />
                  <br />I wrote random text for the room´s information
                  <br />
                  <br />I used React Context to manage the state of the
                  application and implemented higher order componene
                  <br />
                  <br />
                  This is only a front-end application which does not have a
                  database to control the backend and whose data is retrieved
                  from a CMS (Content Management System)
                  <br />
                  <br />
                  The users can filter rooms based on his/her preferences.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/react_resorts'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://resorts-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        //project 3
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flaptopshop.al%2Fwp-content%2Fuploads%2F2018%2F04%2F1-1.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  First project using JavaScript in the backend with Node.js.{' '}
                  <br />
                  <br />I used the following modules: filesystem, url, and http.{' '}
                  <br />
                  <br />I used HTML templates and replaced Strings in order to
                  make my code reusable
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/laptopShop'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/laptopShop'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brainvire.com%2Fwp-content%2Fuploads%2FExpress.JS-%25E2%2580%2593-An-Ideal-Node.JS-Framework-to-develop-Enterprise-Web-Applications.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Created this tutorial to teach Node and Express to beginners{' '}
                  <br />
                  <br />
                  Teaching NodeJS with this tutorial takes approximately 2.5
                  hours + extra time allowed for questions <br />
                  <br />
                  The students are introduced to the main modules and concepts
                  such as Express, Path, HTTP, Joi, ejs, middleware...
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/node-tutorial/tree/master'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freelancinggig.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F10%2FCareer-Path-for-a-Java-Developer.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  This is a job find app for developers. You can add new job
                  postings and view the current offers as well as search for
                  jobs matching your skills <br />
                  <br />I used Sequelize for this project, which is an ORM
                  (Object Relational Mapping) for relational databases such as
                  PostgreSQL
                  <br />
                  <br />I used NodeJS, Express, HTML, CSS, Postgres, Sequelize
                  and handlebars (template).
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/gigs-job-search'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href='https://dev-job-search-alvaro-serrano.herokuapp.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live de,mo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        // project 4
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.framedrecipes.com%2Fwp-content%2Fuploads%2F2014%2F09%2FDSC_9130_Uthappam_Final.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Modern JavaScript for 2018: NPM, Webpack, Babel and ES6
                  modules
                  <br />
                  <br />
                  Includes features like the 'this' keyword, function
                  constructors, prototypal inheritance, first-class functions,
                  closures, ES6.
                  <br />
                  <br />
                  Implemented MVC (Model, View, Controller)
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/forkify'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://js-forkify-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbudget.alabama.gov%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F08%2Fgeneral-budget.png&f=1) center / cover'
                  }}
                />
                <CardText>
                  Modern JavaScript for 2018: NPM, Webpack, Babel and ES6
                  modules
                  <br />
                  <br />
                  DOM manipulation techniques and different functions that
                  implement algorithms and perform calculations based on user
                  input
                  <br />
                  <br />
                  ES6 and asynchronous javascript not included. This is a great
                  project to practice Javascript for beginners
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/budgetApp/tree/master'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://js-budget-controller-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6u2jUHgIuz0%2Fmaxresdefault.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  JSON autocompletion for capital lookup in the US
                  <br />
                  <br />
                  High-order array functions to search through data in JSON
                  format
                  <br />
                  <br />
                  DOM manipulation techniques, ES6 and asynchronous Javascript
                  <br />
                  <br />
                  This is a great project to practice Javascript for beginners
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/autocomplete-capital-search'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button colored>
                    <a
                      href='https://capital-lookup-auto-complete.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.slidesharecdn.com%2Freactreduxintroduction-151124165017-lva1-app6891%2F95%2Freact-redux-introduction-1-638.jpg%3Fcb%3D1448383914&f=1) center / cover'
                  }}
                />
                <CardText>
                  Redux Crash Course taught by 'Traversy Media'
                  <br />
                  <br />
                  Introduction to Redux: state, reducers, actions, store...
                  <br />
                  <br />
                  Redux helps you write applications that behave consistently,
                  run in different environments (client, server, and native),
                  and are easy to test.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/redux-crash-course'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href='https://redux-intro-alvaro-serrano.netlify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Falanterriaga.com%2Fwp-content%2Fuploads%2F2018%2F11%2FBlog-Article-MERN-Stack.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  First full stack application using the MERN stack alongside
                  Redux for state management, Reactstrap and
                  react-transition-group
                  <br />
                  <br />
                  This is a really simple application that only allows to
                  retrieve, add or delete items from your shopping list
                  <br />
                  <br />
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/full_stack_shopping-list-'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmarketingland.com%2Fwp-content%2Fml-loads%2F2015%2F12%2Fcomputer-network-laptops2-ss-1920.jpg&f=1) center / cover'
                  }}
                />
                <CardText>
                  Full stack application based on a social networking site for
                  developers.
                  <br />
                  <br />
                  You can create a profile, learn about other developers,
                  publish your Github repositories, add posts, likes,
                  comments... and much more!
                  <br />
                  <br />I used the MERN stack, mongoose, redux, JSON web token,
                  Bcrypt, mongoDB Atlas...
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/devConnector'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href='https://vast-inlet-98158.herokuapp.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      Live demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clusterdb.com%2Fwp-content%2Fuploads%2F2017%2F03%2FLogo.png&f=1) center / cover'
                  }}
                />
                <CardText>
                  Full stack application using the MERN stack.
                  <br />
                  <br />
                  This full stack application is a social network for developers
                  who can create their own portfolio and interact with other
                  developers.
                  <br />
                  <br />
                  <strong>Technologies used: </strong> ES6, Asynchronous
                  Javascript, React hooks, Redux, JWT (JSON Web Tokens), Postman
                  HTTP client, Mongoose / MongoDB / Atlas, Bcrypt Password
                  hashing, Heroku and Git deployment.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/full_stack_shopping-list-'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 col-lg-4  my-3'>
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '170px',
                    background:
                      'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flaraveldaily.com%2Fwp-content%2Fuploads%2F2015%2F06%2Flaravel-logo-big.png&f=1'
                  }}
                />
                <CardText>
                  This is an Instagram clone based on a crash course using
                  Laravel
                  <br />
                  <br />
                  I used this project to learn the Laravel web framework by
                  copying Instagram´s functionality
                  <br />
                  <br />
                  You can follow people, like posts, add your own postsm update
                  your profile...
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href='https://github.com/alvaroserrrano/freeCodeGram'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(66, 83, 175)'
                      }}
                    >
                      GitHub
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
                </CardMenu>
              </Card>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='categoryTabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab> LAMP </Tab>
          <Tab> React </Tab>
          <Tab> Node </Tab>
          <Tab> JavaScript</Tab>
          <Tab> Redux</Tab>
          <Tab>MERN</Tab>
          <Tab>Laravel</Tab>
        </Tabs>
        <section className='projects-grid'>
          <Grid className='projects-grid'>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
