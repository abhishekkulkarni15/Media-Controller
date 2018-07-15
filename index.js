var mediaController = require('node-media-controller');
var serialport = require('serialport');

var portName = 'COM15';
var myPort = new serialport(portName, {
	baudRate: 115200
});

var Readline = serialport.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser
myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
	console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
	if(data.toString() == "A"){
		console.log("Previous");
		mediaController.executeCommand('previous', function(err, result) {
		if(!err) {
			console.log('done!');
		}
	});
	}
	else if(data.toString() == "B"){
		console.log("Next");
		mediaController.executeCommand('next', function(err, result) {
		if(!err) {
			console.log('done!');
		}
	});
	} 
	else {
		console.log("Next");
		mediaController.executeCommand('play', function(err, result) {
		if(!err) {
			console.log('done!');
		}
	});
	}
}

function showPortClose() {
	console.log('port closed.');
}

function showError(error) {
	console.log('Serial port error: ' + error);
}

mediaController.getCommands();
// ['play', 'pause', 'next', 'previous', 'skip'];

mediaController.executeCommand('next', function(err, result) {
	if(!err) {
		console.log('done!');
	}
});
