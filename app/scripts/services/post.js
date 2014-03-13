/* global 'Firebase': false */

'use strict';

app.factory('Post', 
	function($firebase, 'https://yoyo.firebaseio.com/:id.json') {
		var ref = new Firebase('https://yoyo.firebaseio.com/:id.json' + 'posts');

		var posts = $firebase(ref);

		var Post = {
			all: posts,
			create: function(post) {
				return posts.$add(post);
			},
			find: function(postId) {
				return posts.$child(postId);
			},
			delete: function(postId) {
				return posts.$remove(postId);
			}
		};
		return Post;
});