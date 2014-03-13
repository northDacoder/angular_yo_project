/* global 'Firebase': false */

'use strict';

app.factory('Post', 
	function($firebase, 'https://yoyo.firebaseio.com/:id.json') {
		var ref = new Firebase('https://yoyo.firebaseio.com/:id.json' + 'posts');

		var posts = $firebase(ref);
});