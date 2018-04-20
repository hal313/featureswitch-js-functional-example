"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Destructured import
var featureswitch_js_1 = require("featureswitch-js");
// Star import
var FeatureManagerLib = require("featureswitch-js");
// Important to note: the package.json file lists the typings file, so autocomplete
// is automatically configured for IDE's which leverage the declaration in the
// pacjage.json
// Shared feature name
var featureName = 'test-feature';
/**
 * Tests basic functionality of the featureswitch-js package, using a destructured imports.
 */
(function (method) {
    // Create a feature manager instance
    var featureManager = new featureswitch_js_1.FeatureManager();
    // Create a feature
    var feature = new featureswitch_js_1.Feature(featureName, true);
    // Add a feature to the feature manager instance
    featureManager.addFeature(feature);
    // Output if the feature is enabled or not
    if (featureManager.isEnabled(featureName)) {
        console.log(method, 'feature', featureName, 'ENABLED');
    }
    else {
        console.log(method, 'feature', featureName, 'DISABLED');
    }
})('destructuredImport');
/**
 * Tests basic functionality of the featureswitch-js package, using a star import.
 */
(function (method) {
    // Create a feature manager instance
    var featureManager = new FeatureManagerLib.FeatureManager();
    // Create a feature
    var feature = new FeatureManagerLib.Feature(featureName, true);
    // Add a feature to the feature manager instance
    featureManager.addFeature(feature);
    // Output if the feature is enabled or not
    if (featureManager.isEnabled(featureName)) {
        console.log(method, 'feature', featureName, 'ENABLED');
    }
    else {
        console.log(method, 'feature', featureName, 'DISABLED');
    }
})('starImport        ');
//# sourceMappingURL=typescript-test.js.map