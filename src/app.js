require('custom-env').env();
const program = require('commander');
const pictureOfTheDay = require('./actions/pictureOfTheDay');
const downloader = require('./actions/downloader');

program
    .version('0.1.0')
    .option('-p, --pic', 'Picture of The Day')
    .option('-g, --galaxy', 'Random Galaxy Picture')
    .option('-n, --nebula', 'Random Nebula Picture')
    .parse(process.argv);

if (program.pic) {
    pictureOfTheDay().then(downloader)
}
