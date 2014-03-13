/* global app:true */
'use strict';

app.controller('PostsCtrl', function($scope, Post){
	$scope.posts = Post.all;
	$scope.post = {url: 'http://', 'title': ''};

	$scope.submitPost = function() {
		Post.save($scope.post).then(function(){
			$scope.post = {url: 'http://', 'title': ''};
		});
	};

	$scope.deletePost = function(postId) {
		Post.delete(postId);
	};
});
