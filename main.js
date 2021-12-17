;(function(){
	const fs = require('fs');
	var config = {
		port: process.env.PORT || 8080,
		peers: process.env.PEERS && process.env.PEERS.split(',') || []
	};
	const Gun = require('gun');

	config.server = require('http').createServer(Gun.serve(__dirname));

	var gun = Gun({
        web: config.server.listen(config.port),
        peers: config.peers
    });
	console.log('Relay peer started on port ' + config.port + ' with /gun');

	// gun.get('Author').map().on((data) => {
	// 	console.info(data);
	// });

	module.exports = gun;
}());