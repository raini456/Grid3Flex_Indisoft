var app = angular.module("mainApp", ['ngRoute']);
angular.element(function () {
    angular.bootstrap(document, ['mainApp']);
});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/kanzlei', {
                    templateUrl: 'kanzlei/main.html',
                    controller: 'indexCtrl'
                })
                .when('/team', {
                    templateUrl: 'kanzlei/team.html',
                    controller: 'teamCtrl'
                })                
                .when('/miete', {
                    templateUrl: 'kanzlei/mietrecht.html',
                    controller: 'mieteCtrl'
                })
                .when('/verkehr', {
                    templateUrl: 'kanzlei/verkehrsrecht.html',
                    controller: 'verkehrCtrl'
                })
                .when('/familie', {
                    templateUrl: 'kanzlei/familienrecht.html',
                    controller: 'familieCtrl'
                })
                .when('/weitere', {
                    templateUrl: 'kanzlei/weitere.html',
                    controller: 'weitereCtrl'
                })
                .when('/kontakt', {
                    templateUrl: 'kanzlei/email.html',
                    controller: 'emailCtrl'
                })
                .when('/anfahrt', {
                    templateUrl: 'kanzlei/anfahrt.html',
                    controller: 'anfahrtCtrl'
                })
                .when('/impressum', {
                    templateUrl: 'kanzlei/impressum.html',
                    controller: 'impressumCtrl'
                })
                .when('/datenschutz', {
                    templateUrl: 'kanzlei/datenschutz.html',
                    controller: 'datenschutzCtrl'
                })
                .when("/gebiete", {
                    templateUrl: 'kanzlei/gebiete.html',
                    controller: 'gebieteCtrl'
                })
                .when("/person", {
                    templateUrl: 'kanzlei/person.html',
                    controller: 'personCtrl'
                })
                .when("/email", {
                    templateUrl: 'kanzlei/email.html',
                    controller: 'emailCtrl'
                })
                .when("/anfahrt", {
                    templateUrl: 'kanzlei/anfahrt.html',
                    controller: 'anfahrtCtrl'
                })
                .when("/impressum", {
                    templateUrl: 'kanzlei/impressum.html',
                    controller: 'impressumCtrl'
                })
                .when("/datenschutz", {
                    templateUrl: 'kanzlei/datenschutz.html',
                    controller: 'datenschutzCtrl'
                })
                .otherwise({
                    redirectTo: 'kanzlei/main.html'
                });
    }]);
app.controller('mainCtrl', function () {

});
app.controller('indexCtrl', function ($scope) {});
app.controller('headerCtrl', function ($scope) {
    $('.articles .miete').click(function(){
        window.location="#/miete";
    }); 
    $('.articles .verkehr').click(function(){
        window.location="#/verkehr";
    }); 
    $('.articles .familie').click(function(){
        window.location="#/familie";
    }); 
});
app.controller('asideLeftCtrl', function ($scope) {    
    $('#sandwich').click(function () {
        $('#navi .navSmall').slideDown('slow');
        $(this).slideUp('fast');        
    });
    $('#navi .navSmall li').click(function(){
        $('#navi .navSmall').slideUp('slow');
        $('#sandwich').slideDown('slow');
    });
    $('#schwerpunkte').click(function(){               
        $('#submenu').slideToggle('slow');
    }); 
    $('#navi .navBig .liBig').click(function(){
        $('#submenu').slideUp('slow');        
    });
    $('.liBigSub').click(function(){
        $('.liBigSub').css({
            color:'black'
        });
        $(this).css({
            color:'whitesmoke'
        });
        
    });
});
app.controller('asideRightCtrl', function ($scope) {    
    $('.box .email').click(function(){        
        window.location="#/email";    
    });
});

app.controller('gebieteCtrl', function () {
    $('.familienrecht').click(function () {
        $('#familienrecht').slideDown('slow');
        $('#arbeitsrecht, #erbrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.arbeitsrecht').click(function () {
        $('#arbeitsrecht').slideDown('slow');
        $('#familienrecht, #erbrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.erbrecht').click(function () {
        $('#erbrecht').slideDown('slow');
        $('#familienrecht, #arbeitsrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.verkehrsrecht').click(function () {
        $('#verkehrsrecht').slideDown('slow');
        $('#arbeitsrecht, #erbrecht, #familienrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.mietrecht').click(function () {
        $('#mietrecht').slideDown('slow');
        $('#verkehrsrecht, #arbeitsrecht, #erbrecht, #familienrecht, #sozialrecht').slideUp('slow');
    });
    $('.sozialrecht').click(function () {
        $('#sozialrecht').slideDown('slow');
        $('#mietrecht, #verkehrsrecht, #arbeitsrecht, #erbrecht, #familienrecht').slideUp('slow');
    });
});
app.controller('emailCtrl', function ($scope) {
    $('#dataCheck').change(function () {
        if (document.getElementById('dataCheck').checked == true) {
            $("#inputSubmit").slideDown('slow');
        } else {
            $("#inputSubmit").slideUp('slow');
        }
    });

});
app.controller('fallCtrl', function ($scope) {});
app.controller('praxisCtrl', function ($scope) {});
app.controller('anfahrtCtrl', function ($scope) {});
app.controller('impressumCtrl', function ($scope) {});
app.controller('datenschutzCtrl', function ($scope) {});
app.controller('leistungenCtrl', function ($scope) {});
app.controller('teamCtrl', function ($scope) {
    $scope.changePic1 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team1.jpg")'
        });
        $('.label1').css({
            backgroundColor: 'orange'
        });
        $('.label2, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic2 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team2.jpg")'
        });
        $('.label2').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic3 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team3.jpg")',
            transition: 'opacity 2s ease-in-out'
        });
        $('.label3').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic4 = function () {
        $('#picTeam').fadeIn(300).css({
            backgroundImage: 'url("assets/team4.jpg")'
        });
        $('.label4').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic5 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team5.jpg")'
        });
        $('.label5').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic6 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team6.jpg")'
        });
        $('.label6').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label5').css({
            backgroundColor: '#efefef'
        });
    };
});
