const AWS = require('aws-sdk');

const logger = require('./logger');
// Send this metric to N.Virginia region
AWS.config.update({region: 'us-east-1'});

let cloudWatch;

let params = {
    MetricData: [
        {
            MetricName: 'PrimeVisionFilterCount',
            Timestamp: new Date,
            Value: 10
        }
    ],
    Namespace: 'uis-prime-vision-filter'
};

function putMetricData(count)    {
    if (typeof count === 'undefined' || !Number.isInteger(count) || count < 0) {
        console.log(`Parameter count is invalid: ${count}`);
    }

    if (!cloudWatch) {
        cloudWatch = new AWS.CloudWatch();
    }

    logger.traceLog('invoke real object!');
    return new Promise((resolve, reject) => {
        params.MetricData[0].Value = count;
        params.MetricData[0].Timestamp = new Date();
    
        logger.traceLog(`Metric data: ${JSON.stringify(params.MetricData[0])}`);
    
        logger.traceLog('Put metrics to CloudWatch');
        cloudWatch.putMetricData(params, (err, data) => {
          if (err) {
            logger.traceLog('Error: sending metrics to cloudWatch.');
            logger.traceLog(err, err.stack);
            reject(err.stack);
          } else {
            logger.traceLog('Sending metrics to cloudWatch successfully');
            logger.traceLog(data);
            resolve(data);
          }
        });
      });


    
};

// putMetricData(12); 

exports.putMetricData = putMetricData;