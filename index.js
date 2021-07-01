const createPhoneNumber = (numbers) => {
	let result = '(';

	for (let i = 0; i < numbers.length; i++) {
		if (i < 3) {
			result += i === 2 ? `${numbers[i]}) ` : numbers[i].toString();
		} else {
			result += i === 5 ? `${numbers[i]}-` : numbers[i].toString();
		}
	}

	return result;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
