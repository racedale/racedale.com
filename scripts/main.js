import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Slider from 'react-viewport-slider';
// import Iframe from './components/Iframe';

import NotFound from './components/NotFound';

var h = require('./helpers');

/*
  App
*/

var App = React.createClass({

  closeIframe : function() {
    document.querySelector('#work1').style.display = "none";
    document.querySelector('#work2').style.display = "none";
    document.querySelector('#work3').style.display = "none";
    document.querySelector('#work4').style.display = "none";
    document.querySelector('#work5').style.display = "none";
    document.querySelector('#work6').style.display = "none";
    document.querySelector('#work7').style.display = "none";
    document.querySelector('#work8').style.display = "none";

    document.querySelector('.header_preview').style.display = "none";

    var top = document.querySelector('.viewport-slider-item-4').offsetTop;
    window.scrollTo(0, top);
  },
  render: function () {
    return (
      <section>
        <Slider>

          <div itemClass="has-overlay-green" itemStyle={{ backgroundImage: 'url(./build/img/code.gif)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: '#285749' }}>
            <Contact />
          </div>

          <div itemStyle={{ backgroundColor: '#353330' }}>
            <Intro />
          </div>

          <div itemStyle={{ backgroundColor: '#aaa', color: '#333' }}>
            <Ideology />
          </div>

          <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(./build/img/cover-landscape.jpg)`, backgroundSize: 'cover' }}>
            <PastWork />
          </div>

        </Slider>
        <div className="header_preview">
          <a href="#" onClick={this.closeIframe}>X</a>
        </div>

        <footer>
          <h6 className="copyright">Copyright &copy; Dale Race</h6>
        </footer>
      </section>
    );
  }
});

//
// Contact
//

var Contact = React.createClass({
  contactMe : function() {
    window.location='mailto:?subject=Message about '+document.getElementById('contact_input').value;
  },
  render : function() {
    return (
      <div className="contact_me">
        <h1 className="content">Need a Web Dev?</h1>
        <h5 className="contact_description">Lucky you, I'm a Front-end Developer.  Send me an email below so we can discuss my next project. </h5>
        <div className="contact_form">

          <a href="mailto:race.dale@gmail.com?subject=Front End Development" target="email"> <button className="contact_button">Contact Me</button> </a>
        </div>
      </div>
    )
  }
});

//
// Intro
//

var Intro = React.createClass({

  render : function() {
    return (
      <div className="intro">
        <h2 className="content" style={{ textAlign: 'center' }}>Introduction</h2>
        <h5 className="intro_content" style={{ marginBottom: '0', textAlign: 'center' }}>My name is Dale Race and I'm a Visual Communications major.</h5>
        <p className="intro_content">But I'm not a graphic designer, I'm a Front-end Web Developer.  I think deep down I always knew that web development is what I wanted to do, but it took me awhile to get there.  I started as a Computer Science major in Fall 2010.  It took me a year and a half to realize that they only teach the boring systems programming stuff (Java & C languages) and none of the fun web stuff (HTML, CSS, & JS) that I wanted to do.  That's when I switched to VisComm, and found out it was the opposite problem.  It's almost purely graphic design, and the one web design class that I did take taught the kind of web dev that literally gets you laughed at by professionals.</p>
        <p className="intro_content">As far as web skills go, I'm entirely self-taught.  I started with free tutorials on YouTube.  I progressed to buying cheap specialized classes on Udemy when they were on sale (usually for 90% off), then got a subscription at Treehouse for about 8 months.  I started listening to podcasts (ShopTalkShow, Codepen Radio, Javascript Jabber) to stay up to date on the industry and learn who the leading contributers in the industry are, and what upcoming conferences there are.</p>
      </div>
    )
  }
});

//
// Ideology
//

var Ideology = React.createClass({

  render : function() {
    return (
      <div className="ideology">
        <h2 className="content">Ideology</h2>
        <h5 className="intro_content" style={{ marginBottom: '0', textAlign: 'center' }}>Opinions on current web trends, and what my personal methodologies are</h5>
        <p className="intro_content">This website was built with React.  Overkill? Totally.  But it was a fun way to start learning about a new technology.  While I like learning about and using new things when I can, most of my work uses traditional technologies like WordPress.  Though when it comes to WordPress I'm really liking Timber+Twig as a templating engine for it to separate the data from the design.  Genesis is something I've been wanting to get into, but haven't yet dropped the money into buying it just so I can start experimenting.  </p>
      </div>
    )
  }
});

//
// PastWork
//

var PastWork = React.createClass({
  openIframe1 : function() {
    document.getElementById('work1').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe2 : function() {
    document.getElementById('work2').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe3 : function() {
    document.getElementById('work3').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe4 : function() {
    document.getElementById('work4').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe5 : function() {
    document.getElementById('work5').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe6 : function() {
    document.getElementById('work6').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe7 : function() {
    document.getElementById('work7').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  openIframe8 : function() {
    document.getElementById('work8').style.display = "block";
    document.querySelector('.header_preview').style.display = "block";
  },
  render : function() {
    return (
      <div className="past_work">
        <h2 className="content">Past Work</h2>
        <h5 style={{ textAlign: 'center'}}>Check out a preview of some of the websites that I've made.</h5>
        <div className="work_gallery">
          <a href="http://www.evolve24.com" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/evolve24.jpg)' }} >
              <span>First</span>
          </div>
          </a>

          <a href="http://tmn.truman.edu" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/tmn.jpg)' }} >
              <span>Second</span>
            </div>
          </a>

          <a href="http://apo.truman.edu" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/apo-truman.jpg)' }} >
              <span>Third</span>
            </div>
          </a>

          <a href="http://www.racedale.com/portfolio/downtowncinema8/" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/downtowncinema8.jpg)' }} >
              <span>Fourth</span>
            </div>
          </a>
        </div>

        <div className="work_gallery">
          <a href="http://www.racedale.com/portfolio/redbarn" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/redbarn.jpg)' }} >
              <span>Fifth</span>
            </div>
          </a>

          <a href="http://www.racedale.com/blog" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/racedale-blog.jpg)' }} >
              <span>Sixth</span>
            </div>
          </a>

          <a href="http://www.racedale.com/portfolio/goetze" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/goetze.jpg)' }} >
              <span>Seventh</span>
            </div>
          </a>

          <a href="http://www.racedale.com/selfpromo" target="_blank">
            <div className="work" style={{ backgroundImage: 'url(./build/img/racedale.jpg)' }} >
              <span>Eighth</span>
            </div>
          </a>
        </div>
      </div>
    )
  }
});

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}/>
    <Route path="/presentation/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
