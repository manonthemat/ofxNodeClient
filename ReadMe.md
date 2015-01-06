#ofxNodeClient
node scripts to access the input system of [https://github.com/manonthemat/blobTracker](https://github.com/manonthemat/blobTracker) from the outside.

Internally we use it with salt to get some screenshots from our minions' input systems for a virtual dodgeball game and to configure the viewport manually, when the auto-configuration fails.


##Commands
Example use from the CLI (without salt in place):

    SENDGRID_USER="sgrduser" SENDGRID_PW="sendgrdpw" SENDGRID_TEXT="hi" node request_screenshot.js matthias@virsix.com


The other javascript file in the repository is the viewport_manager.js.

    Usage: node viewport_manager.js [command]

These are the available commands:

	getPoints
	unconfigure
	saveConfig
	deleteConfig
	hideCams
	drawCams
	setTL [X] [Y]
	setTR [X] [Y]
	setBL [X] [Y]
	setBR [X] [Y]
	setArea [n]
	setCt [n]
