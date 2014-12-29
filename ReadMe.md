node scripts to access the input system of https://github.com/manonthemat/blobTracker from the outside

Internally we use it with salt to get some screenshots from our minions' input systems for a virtual dodgeball game.

Example use from the CLI:
SENDGRID_USER="sgrduser" SENDGRID_PW="sendgrdpw" SENDGRID_TEXT="hi" node request_screenshot.js matthias@virsix.com /Users/matthiassieber/Documents/cpp/of_v0.8.4_osx_release/apps/myApps/blobTracker/bin/data/screenshot.jpg

