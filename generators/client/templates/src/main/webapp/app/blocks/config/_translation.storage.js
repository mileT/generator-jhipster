(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .factory('translationStorage', translationStorage);

    translationStorage.$inject = ['$cookies', '$log', 'LANGUAGES'];

    function translationStorage($cookies, $log, LANGUAGES) {
        return {
            get: get,
            put: put
        };

        function get(name) {
            if (LANGUAGES.indexOf($cookies.getObject(name)) === -1) {
                $log.info('Resetting invalid cookie language "' + $cookies.getObject(name) + '" to prefered language "<%= nativeLanguageShortName %>"');
                $cookies.putObject(name, '<%= nativeLanguageShortName %>');
            }
            return $cookies.getObject(name);
        }

        function put(name, value) {
            $cookies.putObject(name, value);
        }
    }
})();
