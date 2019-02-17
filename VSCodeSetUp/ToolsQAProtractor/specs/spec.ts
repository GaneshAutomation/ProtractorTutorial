import {browser} from "protractor"
// spec.js 
describe('Protractor Demo App', () => {
    it('Verify Page Souce', () => {
      //debugger;
      browser.get('https://ganeshsirsi.github.io/protractor-demo/');
      browser.getPageSource().then( (source) => {
          console.log("",source);
      });
    });
  });
  