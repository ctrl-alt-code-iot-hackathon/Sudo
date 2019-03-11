var server = require('ws').Server;
var s = new server({port: 5001});


s.on('connection',function(ws){
	 ws.on('message',function(coods){
	 	console.log("Received: Accident At"+ coods);
	// var obj = {lat:25.5941, lng:85.1376};
		s.clients.forEach(function e(client){
			if(client==ws)
				client.send(coods);
		});
		ws.on('close',function(){
			console.log("client disconnected");
		});
		//ws.send(JSON.stringify(obj));
	 });
});
