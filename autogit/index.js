var shell = require('shelljs');

module.exports = function(url, app){
    app.post(url, function(req, res){
        res.send("RELOADING APP");
        shell.exec('git pull');
    })
}
