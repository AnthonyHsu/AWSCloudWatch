exports.getCloudWatch = function() {
    console.log('invoke mock!');
    const mockCloudWatch = {};
    mockCloudWatch.putMetricData = function(params = {}, callback)  {
        callback(
            null,
            { "ResponseMetadata":
                    {
                        "RequestId": "989912c9-95e8-11e8-aefa-3d5b763aaa6c"
                    }
            }
        );
    };

    return mockCloudWatch;
};