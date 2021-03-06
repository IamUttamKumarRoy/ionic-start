angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('myCtrl', function($scope,$ionicBackdrop,$timeout,$ionicLoading) {
    
    $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Loading...'
      });
    }

    $scope.hideLoading = function(){
      $ionicLoading.hide();
    }

    $scope.items = [
       {id: 1},
       {id: 2},
       {id: 3},
       {id: 4}
    ]

    $scope.moveItem = function(item, fromIndex, toIndex) {
       $scope.items.splice(fromIndex, 1);
       $scope.items.splice(toIndex, 0, item);
    }    
    $scope.checkboxModel = {
       value1 : false,
       value2 : false
    }
    $scope.toggleModel = {
      value1 : true,
      value2 : false,
      value3 : false
    }
    $scope.onTouchFunction = function() {
      console.log('Working');
    }
   $scope.showBackdrop = function() {
      $ionicBackdrop.retain();
    
      $timeout(function() {
         $ionicBackdrop.release();
      }, 3000);
   };
})
.controller('MyController', function($scope, $ionicModal) {

   $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
      $scope.modal = modal;
   });
  
   $scope.openModal = function() {
      $scope.modal.show();
   };
  
   $scope.closeModal = function() {
      $scope.modal.hide();
   };
  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action
   });

});