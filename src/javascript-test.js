/**
 * Tests the pure-javascript functionality of the FeatureManager
 */
(function (method) {
    
    // The FeatureManager global exists as the library root
    var featureName = 'test-feature';

    // Create a feature manager instance
    var featureManager = new FeatureManager.FeatureManager();
    // Create a feature
    var feature = new FeatureManager.Feature(featureName, true);

    // Add a feature to the feature manager instance
    featureManager.addFeature(feature);

    // Output if the feature is enabled or not
    if (featureManager.isEnabled(featureName)) {
        console.log(method, 'feature', featureName, 'ENABLED');
        document.getElementById('message').innerHTML = 'feature "' + featureName + '" is ENABLED! [' + method + ']';
    } else {
        console.log(method, 'feature', featureName, 'DISABLED');
        document.getElementById('message').innerHTML = 'feature "' + featureName + '" is DISABLED! [' + method + ']';
    }

})('pure-javascript');