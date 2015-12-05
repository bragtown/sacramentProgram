'use strict';

/**
 * @ngdoc function
 * @name programApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the programApp
 */
angular.module('programApp')
  .controller('MainCtrl', function ($scope) {
    $scope.image = {
    	name: "Meridian Idaho",
    	source: "http://www.ldschurchtemples.com/meridian/images/meridian-mormon-temple.jpg"
    }
    $scope.ward = "Spanish Fork 16th"
    $scope.presiding = "Bishop Daniel Wright"
    $scope.conducting = "Bishop Daniel Wright"
    $scope.organist = "Sister Suzanne Fuhriman"
    $scope.chorister = "Sister Kalli Unopulos"
    $scope.hymns = {
    	opening:{
    		number: "96",
    		name: "Dearest Children, God is Near You"
    	},
    	sacrament:{
    		number: "175",
    		name: "O God, the Eternal Father"
    	},
    	intermediate:{
    		number: "63",
    		name: "Great King in Heaven"
    	},
    	closing:{
    		number: "201",
    		name: "Joy to the World"
    	}
    }
    $scope.youthSpeakers = ["Sister Joanna Perez"];
	$scope.pSpeakers = ["Sister Loreli Perez"];
	$scope.aSpeakers = ["Brother Tom Robertshaw"];
	$scope.invocation = "Sister Julia Hone";
	$scope.benediction = "Brother John Lee";
	$scope.reminders = [
		{
			title: "Full Time Missionary Contact Info",
			data: [
				{
					name: "Elders",
					info: "(801) 473-5946"
				},
				{
					name: "Sisters",
					info: "(801) 690-0566"
				}
			]
		},
		{
			title: "Temple Recommend Interviews",
			data: [
				{
					name: "Stake-Stake Offices",
					info: "7PM Thursday Nights"
				},
				{
					name: "Ward",
					info: "12-12:30 Sunday Afternoons"
				}
			]
		}

	];
	$scope.sReminders = [
		"To schedule an appointment with Bishop Wright call Jordan Braginton at (801) 376-8864",
		"Ward Choir Practice after Church!"
	]
	$scope.announcements = [
		{
			name: "2015 Christmas Devotional",
			data: "Sunday, December 6th, 2015"
		},
		{
			name: "Relief Society Christmas Dinner",
			data: "Tues. Dec. 1 at 6:30 in the Cultural Hall"
		}
	];
	$scope.sAnnouncements = [
		"The Stake is again hosting the Christmas Creche on December 10-11. This is a call for nativities to be displayed for this special Christmas Event. If you have a nativity that you would like to display, or if you participated last year we invite you to show your nativity again. If you have family in the area who would like to share their nativity please invite them to participate. We are also looking for art work for the nativity, of Jesus and His life. Please help us make this a special Christmas Event -Contact(Ward Committe Rep) Gene Lilly for more information"
	]
	$scope.emergencyPrep = {
		spiritual: "Read conference talks in this month's Ensign.  Pick one per week, or more.  Talk about them in FHE",
		storage: ["50 cans of soup, stew, or chili per person",
				  "10 lbs cheese - dried, bottled, frozen or wax sealed per person",
				  "Shaving supplies (enough for 1 year)",
				  "3 gallons of dish soap",
				  "2 gallons water per person (or more if you have space)"],
		provident: "Make a goal to read 30 minutes/day to your children or grandchildren.",
		contact: "If you need more info, contact Nita Prue 801-794-1909 or Evelyn Caldwell 801-798-8372"
	}

  });
