const assert = require('assert');
const mocks = require('../test/mocks.js');
const rewire = require('rewire');

const clouldWatchSample = rewire('../cloudWatchSample.js');


describe('CloudWatch test suite', (done) => {
    it('It should push metrics to cloudWatchMock.', () => {

        clouldWatchSample.__set__({
            cloudWatch: mocks.getCloudWatch()
        });

        // clouldWatchSample.putMetricData();

        return clouldWatchSample.putMetricData().then(
            (results) => {
                console.log(results);
                // assert(results === undefined);
            }
        ).then(done);

    });

});