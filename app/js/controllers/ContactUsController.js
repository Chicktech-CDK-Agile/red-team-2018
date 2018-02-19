/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ContactUsCtrl', ['$scope', '$modal', 'navService', function($scope, $modal, navService) {
        $scope.contactinfo = {
            FirstName: '',
            LastName: '',
            PhoneNumber:'',
            Email:'',
            Comments:'',
            Birthdate:'',
            Gender:''
        };
        $scope.contactMe = function(widget){
            console.log(widget);


            var copy = angular.copy(widget);
            var modalInstance = $modal.open({
                templateUrl: 'app/partials/modalcontent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    widget: function() {
                        return copy;
                    }
                }
            });
            $scope.contactinfo.FirstName= '';
            $scope.contactinfo.LastName= '';
            $scope.contactinfo.PhoneNumber= '';
            $scope.contactinfo.Email= '';
            $scope.contactinfo.Comments= '';
            $scope.contactinfo.Birthdate= '';
            $scope.contactinfo.Gender= '';
        };

    }]);

