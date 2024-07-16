upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', { templateUrl: 'content-admin-panel/page/portfolio-home.html', controller: 'Home_Index_Controller' })



    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true);


});