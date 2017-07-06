'use strict';

let os = require('os');
let ip = require('ip');
console.log(ip.address())
let ifaces = os.networkInterfaces();
exports.getIP = function() {
    Object.keys(ifaces).forEach((ifname) => {
        let alias = 0;
        ifaces[ifname].forEach((iface) => {
            // return 'IPv4' !== iface.family || iface.internal !== false;
            if ('IPv4' !== iface.family || iface.internal !== false) {
                return;
            }
            if (alias > -1) {
                console.log(ifname + ':' + alias, iface.address)
                    // return iface.address;

            } else {
                console.log(ifname, iface.address);
                // return iface.address;
            }
            ++alias;
        })
    })
}




// module.exports = getIP;