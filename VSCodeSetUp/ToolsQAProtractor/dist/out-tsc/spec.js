"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
// spec.js 
describe('Protractor Demo App', function () {
    it('Verify Page Souce', function () {
        //debugger;
        protractor_1.browser.get('https://ganeshsirsi.github.io/protractor-demo/');
        protractor_1.browser.getPageSource().then(function (source) {
            console.log("", source);
        });
    });
});
//# sourceMappingURL=../../specs/dist/out-tsc/spec.js.map