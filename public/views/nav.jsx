
'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  displayName: 'nav',

  render: function render() {
    var activeClass = 'left-nav-selected';

    return (
      <section className='left-nav' id='left-nav'>
        <div className='left-nav-title'>{this.props.name}</div>
        <nav className='left-nav-links'>
          <ul>
            <li className='left-nav-link' id='nav-section1'>
              <Link to='completed' className={this.props.navSelection==='nav-section1'?activeClass:''} 
                    activeClassName={activeClass}>completed</Link>
            </li>
            <li className='left-nav-link' id='nav-section2'>
              <Link to='pending' className={this.props.navSelection==='nav-section2'?activeClass:''} 
                    activeClassName={activeClass}>Pending</Link>
            </li>
            <li className='left-nav-link' id='nav-section3'>
              <Link to='notstarted' className={this.props.navSelection==='nav-section3'?activeClass:''} 
                    activeClassName={activeClass}>Not Started</Link>
            </li>       
          </ul>
        </nav>
      </section>
    );
  }
});
