const _ = {
	clamp(number, lower, upper) {
		return Math.min(Math.max(number, lower), upper);
	},
	inRange(number, start, end = start) {
		if (start == end) start = 0;
		else if (start > end) {
			let temporary = start;
			start = end;
			end = temporary;
		}
		return number >= start && number < end;
	},
	words(string) {
		return string.split(' ');
	},
	pad(string, number) {
		let padString = string;
		while (padString.length < number) {
			padString += ' ';
			padString.length < number ? (padString = ' ' + padString) : null;
		}
		return string.length > number ? string : padString;
	},
	has(object, key) {
		return Object.keys(object).includes(key);
	},
	invert(object) {
		const keyArrary = Object.keys(object);
		const valArray = Object.values(object);
		const newObject = {};
		for (let i = keyArrary.length - 1; i >= 0; i--) {
			newObject[valArray[i]] = keyArrary[i];
		}
		return newObject;
	},
	findKey(object, checker) {
		for (const key in object) {
			if (checker(object[key])) return key;
		}
	},
	drop(array, number = 1) {
		return array.slice(number);
	},
	dropWhile(array, predicate) {
		const number = array.findIndex((element, index, arrA) => {
			return !predicate(element, index, arrA);
		});
		return this.drop(array, number);
	},
	chunk(array, size = 1) {
		let newarr = [[]];
		let b = 0;
		let x = 0;
		for (let i = 0; i < array.length; i++) {
			if (newarr[b].length >= size) {
				newarr[++b] = new Array();
				x = 0;
			}
			newarr[b][x] = array[i];
			x++;
		}
		return newarr;
	},
};

// Do not write or modify code below this line.
module.exports = _;
