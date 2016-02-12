
'use strict';

var React = require('react');

module.exports = React.createClass({


  render: function render() {

  	console.log("Inside section 3");
  	
  	var tasks = this.props.data.notStarted;

    return (
    	<section className="spa-section">
        	<h2>Not Started Tasks</h2>
        	<div><ul>{


        	tasks.map(function (task) {
     
      		    return (
        		    <li key={task.id}>
              			{task.content}
            		</li>
     		   		)
        		}
        	)
			}
		</ul></div>
        </section>
    );
  }
});
