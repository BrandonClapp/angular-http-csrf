(function (angular) {
    'use strict'
    angular.module('CSRFToken', [])
		.provider('CSRFToken', ['$httpProvider', function ($httpProvider) {

		    var csrfToken;
		    var header = 'X-XSRF-Token';

		    this.useToken = function (token, customHeaderName) {

		        if (customHeaderName) {
		            header = customHeaderName;
		        }

		        if (!token) {
		            console.warn('No CSRF token was provided.');
		        }

		        $httpProvider.defaults.headers.common[header] = token;
		    }

		    this.$get = function () {
		        return {
		            getToken: function () {
		                return csrfToken;
		            },
		            getHeader: function () {
		                return header;
		            }
		        };
		    }

		    return this;
		}]);
})(angular);