var hostname = require('os').hostname();
var sendgrid_user = process.env.SENDGRID_USER || 'your sendgrid username';
var sendgrid_password = process.env.SENDGRID_PW || 'your sendgrid password';
var sendgrid_default_recipient = process.env.SENDGRID_TO || 'matthias@virsix.com';
var sendgrid_from = process.env.SENDGRID_FROM || 'matthias@virsix.com';
var sendgrid_subject = process.env.SENDGRID_SUBJECT || 'screenshot from ' + hostname;
var sendgrid_text = process.env.SENDGRID_TEXT || 'this just in';
var sendgrid_filename = process.env.SENDGRID_FILENAME || 'screenshot.jpg';

var sendgrid = require('sendgrid')(sendgrid_user, sendgrid_password);

var net = require('net');
var client = new net.Socket();

function mailPhoto(file) {
  var email = new sendgrid.Email();
  if(!process.argv[2]) {
    recipient = sendgrid.default_recipient;
  } else {
    recipient = process.argv[2];
  }
  email.addTo(recipient);
  email.setFrom(sendgrid_from);
  email.setSubject(sendgrid_subject);
  email.setText(sendgrid_text);
  email.addFile({
    filename: sendgrid_filename,
    path: file
  });
  sendgrid.send(email, function(err, json) {
    if (err) {
      return console.error(err);
    }
    console.log(json);
  });
}

client.connect(8888, '127.0.0.1', function() {
  client.write('drawCams;screenshot;hideCams;');
  file = process.argv[3] || '/opt/virsix/of/apps/myApps/blobTracker/bin/data/screenshot.jpg';
  mailPhoto(file);
  client.end();
});

