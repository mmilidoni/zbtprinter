var exec = require('cordova/exec');

exports.print = function(str, mac, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'print', [str,mac]);
};
