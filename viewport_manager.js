var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');

client.connect(8888, '127.0.0.1', function(err, connection) {
  if(err) return console.error(err);
  switch(process.argv[2]) {
    case 'getPoints':
      console.log('requesting points');
      client.end('getPoints;');
      break;
    case 'unconfigure':
      console.log('set configured to false -> run auto-config');
      client.end('unconfigure;');
      break;
    case 'hideCams':
      console.log('hiding cams');
      client.end('hideCams;');
      break;
    case 'drawCams':
      console.log('showing cams');
      client.end('drawCams;');
      break;
    default:
      printUsage();
  }
});

client.on('readable', function() {
  var chunk;
  while(null !== (chunk = client.read())) {
    console.log(chunk);
  }
});

function printUsage() {
  console.log("Usage: node viewport_manager.js [command]");
  console.log("==========================================");
  console.log("The following commands are available:\n");
  console.log("\tgetPoints");
  console.log("\tunconfigure");
  console.log("\thideCams");
  console.log("\tdrawCams");
  process.exit(1); // exit with error (return value 1)
}

