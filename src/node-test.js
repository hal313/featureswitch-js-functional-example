(function test() {
    // Shared feature name
    var featureName = 'test-feature';

    /**
     * Function
     */
    (function requireAsLib(method) {

        // Require the feature manager library
        var FeatureManagerLib = require('featureswitch-js');


        // Create a feature manager instance
        var featureManager = new FeatureManagerLib.FeatureManager();
        // Create a feature
        var feature = new FeatureManagerLib.Feature(featureName, true);

        // Add a feature to the feature manager instance
        featureManager.addFeature(feature);

        // Output if the feature is enabled or not
        if (featureManager.isEnabled(featureName)) {
            console.log(method, 'feature', featureName, 'ENABLED');
        } else {
            console.log(method, 'feature', featureName, 'DISABLED');
        }

    })('requireAsLib   ');


    (function requireAsNeeded(method) {
        
        // Require the FeatureManager class
        var FeatureManager = require('featureswitch-js').FeatureManager;
        // Require the Feature class
        var Feature = require('featureswitch-js').Feature;
        

        // Create a feature manager instance
        var featureManager = new FeatureManager();
        // Create a feature
        var feature = new Feature(featureName, true);

        // Add a feature to the feature manager instance
        featureManager.addFeature(feature);

        // Output if the feature is enabled or not
        if (featureManager.isEnabled(featureName)) {
            console.log(method, 'feature', featureName, 'ENABLED');
        } else {
            console.log(method, 'feature', featureName, 'DISABLED');
        }

    })('requireAsNeeded');

})();