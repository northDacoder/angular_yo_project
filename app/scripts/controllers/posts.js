/* global app:true */
'use strict';

app.controller('PostsCtrl', function($scope){
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};

	$scope.submitPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http://', title: ''};
	};

	$scope.deletePost = function() {
		$scope.posts.splice(index, 1);
	};
});

app.factory('Post', function($resource){
	return $resource('https://yoyo.firebaseio.com');	
});
