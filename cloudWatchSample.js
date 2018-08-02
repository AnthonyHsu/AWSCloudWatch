const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

let cloudwatch;

if (!cloudwatch) {
    cloudwatch = new AWS.CloudWatch();
}

let params = {
    MetricData: [ /* required */
        {
            MetricName: 'PrimeVisionFilterCount',
            Timestamp: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
            Unit: "None",
            Value: 10.0
        },
        /* more items */
    ],
    Namespace: 'uis-prime-vision-filter'
};

function putMetricData()    {
    console.log('invoke real object!');
    return cloudwatch.putMetricData(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
};

putMetricData(); 

exports.putMetricData = putMetricData;