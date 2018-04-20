// Destructured import
import { FeatureManager, Feature } from 'featureswitch-js';
// Star import
import * as FeatureManagerLib from 'featureswitch-js';

// Important to note: the package.json file lists the typings file, so autocomplete
// is automatically configured for IDE's which leverage the declaration in the
// pacjage.json

// Shared feature name
let featureName = 'test-feature';

/**
 * Tests basic functionality of the featureswitch-js package, using a destructured imports.
 */
((method: string) => {
        
        // Create a feature manager instance
        let featureManager = new FeatureManager();
        // Create a feature
        let feature = new Feature(featureName, true);
        
        // Add a feature to the feature manager instance
        featureManager.addFeature(feature);
        
        // Output if the feature is enabled or not
        if (featureManager.isEnabled(featureName)) {
                console.log(method, 'feature', featureName, 'ENABLED');
        } else {
                console.log(method, 'feature', featureName, 'DISABLED');
        }

})('destructuredImport');



/**
 * Tests basic functionality of the featureswitch-js package, using a star import.
 */
((method: string) => {
        
        // Create a feature manager instance
        let featureManager = new FeatureManagerLib.FeatureManager();
        // Create a feature
        let feature = new FeatureManagerLib.Feature(featureName, true);
        
        // Add a feature to the feature manager instance
        featureManager.addFeature(feature);
        
        // Output if the feature is enabled or not
        if (featureManager.isEnabled(featureName)) {
                console.log(method, 'feature', featureName, 'ENABLED');
        } else {
                console.log(method, 'feature', featureName, 'DISABLED');
        }

})('starImport        ');