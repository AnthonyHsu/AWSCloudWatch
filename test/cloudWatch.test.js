const assert = require('assert');
const rewire = require('rewire');

const logger = require('../logger');
const mocks = require('../test/mocks.js');

const clouldWatchSample = rewire('../cloudWatchSample.js');


describe('CloudWatch test suite', (done) => {
    it('It should push metrics to cloudWatchMock.', () => {

        clouldWatchSample.__set__({
            cloudWatch: mocks.getCloudWatch()
        });

        return clouldWatchSample.putMetricData().then(
            (results) => {
                const msg = JSON.stringify(results);
                logger.traceLog(msg);
                assert(msg.includes('ResponseMetadata'));
                assert(msg.includes('RequestId'));
                assert(msg.includes('3d5b763aaa6c'));
            }
        ).then(done);

    });

});