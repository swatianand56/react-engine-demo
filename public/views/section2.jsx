
'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function render() {

  	console.log("Inside section 3");
  	
  	var tasks = this.props.data.pending;

    return (
    	<section className="spa-section">
        	<h2>Pending Tasks</h2>
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
