'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

    //defaultClient.basePath = "http://localhost:64058";

    // Configure API key authorization: Apikey
    var Apikey = defaultClient.authentications['Apikey'];
    Apikey.apiKey = "c3543902-1862-498b-ba4a-256688c39435" // Get your own key at https://account.cloudmersive.com

    

    var api = new CloudmersiveImageApiClient.FaceApi()


    var imageBytes = fs.readFileSync('C:\\temp\\input.jpg');

    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
            res.end('Error\n');
        } else {
            console.log('API called successfully.');

            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data, 'binary');

            //res.end(data);
        }
    };
    
    api.faceCropFirst( Buffer.from(imageBytes.buffer), callback);


    
}).listen(port);
