xml2js = Npm.require('xml2js');

xml2js.parseStringSync = Meteor.wrapAsync(xml2js.parseString);
