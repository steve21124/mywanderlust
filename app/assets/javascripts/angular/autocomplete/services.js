'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('odyssey.services', ['ngResource', 'rails'],
    function ($provide) {
        $provide.factory('foursquareResource', function ($http, $resource, $log) {
        	delete $http.defaults.headers.common["X-Requested-With"];
            return $resource('https://api.foursquare.com/v2/venues/:venueId/:aspect',
                {
                    'venueId': '4fc77712e4b081ac0cd040e6',
                    'aspect': '',
                    'client_id' : 'FW1TXGRD1EPVYDAUCKURLR2LDKK2PTITI0HAQACIJK3TAPNF',
                    'client_secret' : 'V2SO4SQYZBXXJMRHLRRGPTL1VK2VONLBNQMQQ0CPAJDT0YQM',
                    'v' : '20130715'
                });
        });
    })
    .factory('foursqResource', function($http, $resource){
        delete $http.defaults.headers.common["X-Requested-With"];
        return $resource('https://api.foursquare.com/v2/venues/:aspect',
            {
                'client_id' : 'FW1TXGRD1EPVYDAUCKURLR2LDKK2PTITI0HAQACIJK3TAPNF',
                'client_secret' : 'V2SO4SQYZBXXJMRHLRRGPTL1VK2VONLBNQMQQ0CPAJDT0YQM',
                'v' : '20130715'
            });
    })
    .factory('Trip', ['railsResourceFactory', function (railsResourceFactory) {
            return railsResourceFactory({url: '/trips', name: 'trip'});
    }])
    .factory('Destination', ['railsResourceFactory', function (railsResourceFactory) {
            return railsResourceFactory({url: '/destinations', name: 'destination'});
    }])
	.service('currentCity', function () {
        var current_city = {
        	name: "",
        	formatted_address: "",
        	location: {
        		lat: "",
        		lng: ""
        	}
        }

        return {
            getProperty: function () {
                return current_city;
            },
            setProperty: function(value) {
                current_city = value;
            }
        };
    });
