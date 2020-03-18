const minimist = require('minimist')
const bmp = require("bmp-js");
const fs = require("fs");
const process = require("process");

let tileExports = {
    width: 0,
    height: 0
}

module.exports = () => {
    const args = minimist(process.argv.slice(2));

    console.log("TJCONC -- args:", args);

    process.exit();
};