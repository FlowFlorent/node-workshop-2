var request = require("request");

function requestJson (url, cb) {
    request(url, function(err, res){
       if (err){
           cb(err);
       } 
       else {
           try {
               cb(null, JSON.parse(res.body));
           }
           catch {
               cb(err);
           }
       }
    });
}

