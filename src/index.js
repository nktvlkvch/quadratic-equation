module.exports = function solveEquation(equation) {
  // your implementation
 	var arr = [],
 	myArray = equation.split(' '),
 	a = +myArray[0],
 	b = +(myArray[3] + myArray[4]),
 	c = +(myArray[7] + myArray[8]);
 	arr.push(Math.round((-1 * b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
	arr.push(Math.round((-1 * b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
	return arr.sort(function(x, y){return x - y});
 	

}

