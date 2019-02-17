// conf.js
exports.config = {
    framework: 'jasmine',
    specs: ['./specs/*.ts'],
    directConnect: true,

    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
  }
