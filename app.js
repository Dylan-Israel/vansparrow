var homeApp1 = angular.module('homeApp1', ["ngSanitize", "ui.bootstrap"]);

homeApp1.controller('homeCtrl1', function($scope, $http) {
var vm = $scope;
vm.vanSparrowData= {
  intro: "VanSparrow",
  introJob: "| Designer",
  designByLink: "DesignByHumans.com/Shop.VanSparrow",
  designBy: "Design By Humans",
  email: "VanSpillman@gmail.com",
  society: "Society6",
  societyDesc: "For high quality art prints",
  portfolio:"Portfolio",
  myArt:"See More of My Art Below"
};
vm.menuItems = [
{name: "About Me", link:  "#about"},
{name: "Store", link: "#store"},
{name: "Portfolio", link: "#portfolio"}
];
vm.staticData={
  introName:"VanSparrow",
  introP1:"Graphic Designer, Artist and Illustrator.",
  introP2: "Created by Van Spillman."
};

vm.socialMedia=[
  {icon:"socialMedia fa fa-facebook-square fa-5x facebookIcon", link:"https://www.facebook.com/Sparrow-Apparel-70519729811/", text:"Facebook"},
  {icon:"socialMedia fa fa-instagram fa-5x instagramIcon", link: "https://www.instagram.com/vansparrow/", text: "Instagram"},
  {icon:"socialMedia fa fa-twitter fa-5x twitterIcon", link:"https://twitter.com/VanSparrow", text:"Twitter"},
  {icon:"socialMedia fa fa-twitch fa-5x twitchIcon", link:"https://www.twitch.tv/vansparrow", text:"Twitch"},
  {icon:"socialMedia fa fa-youtube-play fa-5x youTubeIcon", link:"https://www.youtube.com/channel/UCHVTqebPZ6iarF2Qg0dy3UA", text:"YouTube"}
];

$scope.myInterval = 5000;
$scope.noWrapSlides = false;
$scope.active = 0;
var slides = $scope.slides = [];
var currIndex = 0;

$scope.addSlide = function() {
  var newWidth = 600 + slides.length + 1;
  slides.push({
    image:  ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg','img/image5.jpg','img/image6.jpg', 'img/image7.jpg', 'img/image8.jpg', 'img/image9.jpg'][slides.length%9],
    // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
    id: currIndex++
  });
};

for (var i = 0; i < 9; i++) {
   $scope.addSlide();
 }

});
