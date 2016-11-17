// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  /* ----------- [ My Controller Options ] ----------------*/

  .state('app.ionic_colors', {
    url: '/ionic_colors',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_colors.html'
      }
    }
  })
  .state('app.ionic_header', {
    url: '/ionic_header',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_header.html'
      }
    }
  })

  .state('app.ionic_footer', {
    url: '/ionic_footer',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_footer.html'
      }
    }
  })

  .state('app.ionic_buttons', {
    url: '/ionic_buttons',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_buttons.html'
      }
    }
  })

  .state('app.ionic_lists', {
    url: '/ionic_lists',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_lists.html'
      }
    }
  })

  .state('app.ionic_cards', {
    url: '/ionic_cards',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_cards.html'
      }
    }
  })
  
  .state('app.ionic_forms', {
    url: '/ionic_forms',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_forms.html'
      }
    }
  })
  
  .state('app.ionic_toggle', {
    url: '/ionic_toggle',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_toggle.html'
      }
    }
  })

  .state('app.ionic_radio_button', {
    url: '/ionic_radio_button',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_radio_button.html'
      }
    }
  })

  .state('app.ionic_range', {
    url: '/ionic_range',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_range.html'
      }
    }
  })
  
  .state('app.ionic_select', {
    url: '/ionic_select',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_select.html'
      }
    }
  })

  .state('app.ionic_tabs', {
    url: '/ionic_tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_tabs.html'
      }
    }
  })
  
  .state('app.ionic_grid', {
    url: '/ionic_grid',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_grid.html'
      }
    }
  })

  .state('app.ionic_icons', {
    url: '/ionic_icons',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_icons.html'
      }
    }
  })

  .state('app.ionic_padding', {
    url: '/ionic_padding',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_padding.html'
      }
    }
  })

.state('app.ionic_js_action_sheet', {
    url: '/ionic_js_action_sheet',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_action_sheet.html',
        controller: 'myCtrl'
      }
    }
  })

  .state('app.ionic_js_backdrop', {
    url: '/ionic_js_backdrop',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_backdrop.html',
        controller: 'myCtrl'
      }
    }
  })

  .state('app.ionic_js_forms', {
    url: '/ionic_js_forms',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_forms.html',
        controller: 'myCtrl'
      }
    }
  })

  .state('app.ionic_js_events', {
    url: '/ionic_js_events',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_events.html',
        controller: 'myCtrl'
      }
    }
  })
  
  .state('app.ionic_js_header', {
    url: '/ionic_js_header',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_header.html',
        controller: 'myCtrl'
      }
    }
  })  
  
  .state('app.ionic_js_footer', {
    url: '/ionic_js_footer',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_footer.html',
        controller: 'myCtrl'
      }
    }
  })  
  
  .state('app.ionic_js_keyboard', {
    url: '/ionic_js_keyboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_keyboard.html',
        controller: 'myCtrl'
      }
    }
  })  
  
  .state('app.ionic_js_list', {
    url: '/ionic_js_list',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_list.html',
        controller: 'myCtrl'
      }
    }
  })  
  
  .state('app.ionic_js_loading', {
    url: '/ionic_js_loading',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_loading.html',
        controller: 'myCtrl'
      }
    }
  })  
  
  .state('app.ionic_js_modal', {
    url: '/ionic_js_modal',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic_js_modal.html',
        controller: 'MyController'
      }
    }
  })
/* ----------- [End My Controller Options] ----------------*/

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
