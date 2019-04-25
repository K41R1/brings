const fs = require('fs');
const https = require('https');
const notifier = require('libnotify');

module.exports = async function (data) {
    const name = data.title.toLowerCase().split(" ").join("-");
    const file = fs.createWriteStream(process.env.WALLPAPERS_DIR+name);
    https.get(data.url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close();
            notifier.notify('Wallpaper Downloaded With Success', {
                image: 'dialog-information'
            });
        })
    })
};
