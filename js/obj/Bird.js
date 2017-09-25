var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v(   4,   0,   0 );
	v( - 4, - 2,   1 );
	v( - 4,   0,   0 );
	v( - 4, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 7, 6, 4 );
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );
	

	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vector3( x, y, z ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}

Bird.prototype = Object.create( THREE.Geometry.prototype );
Bird.prototype.constructor = Bird;




