/* global app:true */
'use strict';

app.controller('PostsCtrl', function($scope, Post){
	Post.save($scope.post, function(ref){
		$scope.posts[ref.name] = $scope.post;
		$scope.post = {url: 'http://', title: ''};
	});

	$scope.submitPost = function() {
		Post.save($scope.post);
		$scope.post = {url: 'http://', title: ''};
	};

	$scope.deletePost = function(postId) {
		Post.delete({id: postId}, function() {
			delete $scope.posts[postId];
		});
	};
});
