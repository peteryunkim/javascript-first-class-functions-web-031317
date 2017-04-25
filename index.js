function receivesAFunction(callback) {
	callback();
}


function returnsANamedFunction() {
	function dude() {
		console.log('hi');
	}
	return dude;
}

function returnsAnAnonymousFunction() {
	return () => {console.log("hi")}
}