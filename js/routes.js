angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('dCFSHomeScreen', {
    url: 'page10000000',//'/page4',
    templateUrl: 'templates/dCFSHomeScreen.html',
    controller: 'dCFSHomeScreenCtrl'
  })

  .state('searchForHomes', {
    url: '/page5',
    templateUrl: 'templates/searchForHomes.html',
    controller: 'searchForHomesCtrl'
  })

  .state('searchResults', {
    url: '/page6',
    templateUrl: 'templates/searchResults.html',
    controller: 'searchResultsCtrl'
  })

  .state('pagePage', {
    url: '/page7',
    templateUrl: 'templates/pagePage.html',
    controller: 'pagePageCtrl'
  })

  .state('childModules', {
    url: '/page1',
    templateUrl: 'templates/childModules.html',
    controller: 'childModulesCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('callACaseworker', {
    url: '/caseworker',
    templateUrl: 'templates/callACaseworker.html',
    controller: 'callACaseworkerCtrl'
  })

  .state('findAPlaceToStay', {
    url: '/shelter',
    templateUrl: 'templates/findAPlaceToStay.html',
    controller: 'findAPlaceToStayCtrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

        .state('menu.helloName', {
      url: '/page3',
      views: {
        'side-menu21': {
          templateUrl: 'templates/helloName.html',
          controller: 'helloNameCtrl'
        }
      }
    })

    .state('menu', {
      url: '/side-menu21',
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })

    .state('find', {
      url: '/page4',
      templateUrl: 'templates/find.html',
      controller: 'findCtrl'
    })

    .state('registerHome', {
      url: '/page5',
      templateUrl: 'templates/registerHome.html',
      controller: 'registerHomeCtrl'
    })

    .state('helpdeskChat', {
      url: '/page6',
      templateUrl: 'templates/helpdeskChat.html',
      controller: 'helpdeskChatCtrl'
    })

  .state('fosterForum', {
    url: '/page1',
    templateUrl: 'templates/fosterForum.html',
    controller: 'fosterForumCtrl'
  })

  .state('FAQ', {
    url: '/FAQ',
    templateUrl: 'templates/FAQ.html',
    controller: 'FAQCtrl'
  })

  .state('general', {
    url: '/general',
    templateUrl: 'templates/general.html',
    controller: 'generalCtrl'
  })

  .state('Resources', {
    url: '/resources',
    templateUrl: 'templates/resources.html',
    controller: 'resourcesCtrl'
  })

  .state('forum', {
    url: '/forum',
    templateUrl: 'templates/forum.html',
    controller: 'forumCtrl'
  })


  .state('blogHomescreen', {
    url: '/bloghome',
    templateUrl: 'templates/blogHomescreen.html',
    controller: 'blogHomescreenCtrl'
  })

  .state('blogResources', {
    url: '/blogresources',
    templateUrl: 'templates/blogResources.html',
    controller: 'blogResourcesCtrl'
  })

  .state('blogPostsList', {
    url: '/blogposts',
    templateUrl: 'templates/blogPostsList.html',
    controller: 'blogPostsListCtrl'
  })

  .state('postExample', {
    url: '/postex',
    templateUrl: 'templates/postExample.html',
    controller: 'postExampleCtrl'
  })

  .state('connectWithFosterFamilies', {
    url: '/page5',
    templateUrl: 'templates/connectWithFosterFamilies.html',
    controller: 'connectWithFosterFamiliesCtrl'
  })

  .state('searchForFosterFamilies', {
    url: '/page6',
    templateUrl: 'templates/searchForFosterFamilies.html',
    controller: 'searchForFosterFamiliesCtrl'
  })

  .state('familiesNearYou', {
    url: '/page7',
    templateUrl: 'templates/familiesNearYou.html',
    controller: 'familiesNearYouCtrl'
  })

  .state('familyProfileBio', {
    url: '/page8',
    templateUrl: 'templates/familyProfileBio.html',
    controller: 'familyProfileBioCtrl'
  })

  .state('pleaseWaitSearching', {
    url: '/pleasewaitsearching',
    templateUrl: 'templates/pleaseWaitSearching.html',
    controller: 'pleaseWaitSearchingCtrl'
  })
  
  .state('pleaseWaitCalling', {
    url: '/pleasewaitcalling',
    templateUrl: 'templates/pleaseWaitCalling.html',
    controller: 'pleaseWaitCallingCtrl'
  })
  
    .state('alertsPage', {
    url: '/page10',
    templateUrl: 'templates/alertsPage.html',
    controller: 'alertsPageCtrl'
  })

  .state('alertDetails', {
    url: '/page11',
    templateUrl: 'templates/alertDetails.html',
    controller: 'alertDetailsCtrl'
  })
  
  .state('pharmacyMap', {
    url: '/pharmaciesmap',
    templateUrl: 'templates/pharmacyMap.html',
    controller: 'pharmacyMapCtrl'
  })

    $urlRouterProvider.otherwise('/login')


});
