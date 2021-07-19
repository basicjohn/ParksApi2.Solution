#!bin/bash

# prompt the user for a create react app directory name
echo -n "Enter the create react app directory name: "
read DNAME

# conditional, test whether create react app directory name was provided
if [[ -n $DNAME ]]
then

  # conditional, test whether cra directory exists in the current dir
  if [[ -d "$DNAME" ]]
  then
    echo "Setup up Create React App Project $DNAME"

    echo "Removing default files..."
    rm $DNAME/src/App.css
    rm $DNAME/src/index.css
    rm $DNAME/src/logo.svg
    rm $DNAME/src/App.js
    echo "Done"

    echo "Creating project directories"
    mkdir $DNAME/src/pages
    mkdir $DNAME/src/components
    mkdir $DNAME/src/fonts
    mkdir $DNAME/src/images
    echo "Done"

    echo "Creating boilerplate project files..."
    echo "
      /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
      */
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      body {
        background: rgb(214, 225, 235);
        font-size: 18px;
        font-family: Jetbrains, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      a {
        text-decoration: none;
        color: unset;
        font-size: 1.1rem;
      }
      h1,h2,h3,h4,h5 {
        font-weight: bold;
        margin: 3px;
        padding: 3px;
      }
      h1 {
        font-size: 2.7rem;
      }
      h2 {
        font-size: 2.2rem;
      }
      h3 {
        font-size: 1.7rem;
      }
      h4 {
        font-size: 1.25rem;
      }
    " >> $DNAME/src/index.css

    echo "
      import React, { Component } from 'react'
      import Home from './pages/Home'
      import Footer from './components/Footer'
      import Navbar from './components/Navbar'
      class App extends Component {
        constructor(props) {
          super(props)
          this.state = {
            currentPage: this.getCurrentLocation()
          }
        }
        getCurrentLocation = () => {
          return window.location.pathname.slice(1)
        }
        navigateTo = (event, location) => {
          event.preventDefault()
          this.setState({currentPage: location})
          window.history.replaceState({}, 'Squash Shoes', location)
        }
        render() {
          return (
            <div>
              <Navbar />
              <Home />
              <Footer />
            </div>
          )
        }
      }
      export default App
    " >> $DNAME/src/App.js

    echo "
      import Header from './../components/Header'
      function Home() {
        return(
          <div style={{ minHeight: '100vh' }}>
          <Header title='Home' />
            // main content goes here
          </div>
        )
      }
      export default Home
    " >> $DNAME/src/pages/Home.js

    echo "
      import React from 'react'
      import PropTypes from 'prop-types'
      function Header(props) {
        return (
          <div>
            <h1>{props.title}</h1>
          </div>
        )
      }
      Header.propTypes = {
        title: PropTypes.string.isRequired
      }
      export default Header
      " >> $DNAME/src/components/Header.js

    echo "
      function Footer() {
        const footerStyle = {
          backgroundColor: 'rgb(76, 195, 255)',
          marginTop: '120px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center'
        }
        return (
          <div style={footerStyle}>
            <h3>Footer</h3>
            <span>&nbsp;-&nbsp;</span>
            <p>&copy; 2021 Tom</p>
          </div>
        )
      }
      export default Footer
    " >> $DNAME/src/components/Footer.js

    echo "
      import { GiConverseShoe } from 'react-icons/gi'
      function Navbar(props) {
        const navbarStyles = {
          display: 'flex',
          flexDirection: 'row',
          background: 'rgba(200,200,200,0.7)',
          alignContent: 'center',
          alignItems: 'center',
          marginBottom: '22px',
          overflow: 'none'
        }
        const linkStyles = {
          minWidth: '160px',
          lineHeight: '90px',
          display: 'flex',
          flexDirection: 'row',
          border: '1px groove gray',
          paddingLeft: '10px',
          paddingRight: '22px',
          fontWeight: '500',
        }
        const linkDivStyles = {
          paddingTop: '25px',
          lineHeight: '50px',
          paddingRight: '10px'
        }
        return (
          <div style={navbarStyles}>
            <a type='submit'
              onClick={event => props.navigateTo(event, 'home')}
              style={linkStyles} href='/'
            >
              <div style={linkDivStyles}><GiConverseShoe style={{ fontSize: '40px'}} /></div>
              <span>Home</span>
            </a>
          </div>
        )
      }
      export default Navbar
    " >> $DNAME/src/components/Navbar.js

    echo "Done"
    echo "Installing React Icons dependency"
    cd $DNAME
    npm i react-icons --save &&

    echo "Done. Project setup complete. Exiting."
    exit 1

  else
    echo "$DNAME not found. You must provide a create react app directory name. Please try again."
    exit 0
  fi
else
  echo "You must provide a create react app directory name. Please try again."
  exit 0
fi