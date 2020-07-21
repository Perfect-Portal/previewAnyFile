var exec = require( "cordova/exec" );

var PreviewAnyFile = function () {

};
PreviewAnyFile.prototype.preview = function ( path, successCallback, errorCallback, animated = true ) {
    exec( successCallback, errorCallback, "PreviewAnyFile", "preview", [ path, animated ] );
};
module.exports = new PreviewAnyFile();