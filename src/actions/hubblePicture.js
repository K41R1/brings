const fs = require('fs');
const https = require('https');
const axios = require('axios');
const notifier = require('libnotify');
const end_point = 'http://hubblesite.org/api/v3/images/printshop';
const image_url = 'http://hubblesite.org/api/v3/image/';

module.exports = {
    hubblePicture: async function () {
        return await axios.get(end_point).then(async function (response) {
            let r = Math.round(Math.random() * response.data.length);
            let obj = response.data[r];
            let id = obj.id;
            let url = await axios.get(image_url + id).then(function (res) {
                const files = res.data.image_files;
                return files[0].file_url;
            });
            return {
                name: obj.name,
                url: url
            }
        })
    },
    downloadPicture: async function (image) {
        const name = image.name.split(" ").join("-").toLowerCase();
        const url = image.url;
        const file = fs.createWriteStream(process.env.WALLPAPERS_DIR+name);
        https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                notifier.notify(
                    'Picture Downloaded from Hubble Telescope website',
                    {
                        image: 'dialog-information'
                    }
                )
            })
        })
    }  
};