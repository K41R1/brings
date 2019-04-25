require('custom-env').env();
const program = require('commander');
const pictureOfTheDay = require('./actions/pictureOfTheDay');
const downloader = require('./actions/downloader');
const {hubblePicture, downloadPicture} = require('./actions/hubblePicture');

program
    .version('0.1.0')
    .option('-a, --interactive', 'Interactive Mode')
    .option('-p, --potd', 'Picture of The Day from Nasa')
    .option('--hubble', 'Random Picture from Hubble Api')
    .parse(process.argv);

hubblePicture().then(downloadPicture);