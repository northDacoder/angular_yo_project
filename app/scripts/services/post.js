'use strict';

app.factory('Post', function($resource){
	return $resource('https://yoyo.firebaseio.com/:id.json');	
});