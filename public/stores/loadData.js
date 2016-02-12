'use strict';

exports.getData = function (callback){

	var jsonData = {'completed': [{'name' : 'c1'}, {'name': 'c2'}, {'name' : 'c3'}, {'name': 'c4'}], 'pending': [{'name': 'p1'}, {'name': 'p2'}, {'name': 'p3'}, {'name': 'p4'}], 'notStarted': [{'name':'ns1'}, {'name': 'ns2'}]};
	
	var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


	var tasks = {
  	completed: [
    {
      id: "c1",
      content: "environment setup"
    },
    {
      id: "c2",
      content: "servers ready"
    }
  ],
  pending: [
  {
  	id: "p1",
  	content: "services"
  },
  {
  	id: "p2",
  	content: "framework"
  },
  {
  	id: "p3",
  	content: "prototyping"
  }
  ],
  notStarted: [
  {
  	id: "ns1",
  	content: "usability testing"
  },
  {
  	id: "ns2",
  	content: "backend implementation"
  }
  ]
};

	callback(null, tasks);
};