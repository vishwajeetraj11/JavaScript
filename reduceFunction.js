const Numbers = [2, 3, 1, 4, 5, 6];

const reducer = (accumulator, currentValue) => {
	console.log(`Accumulator: ${accumulator}`);
	console.log(`Current Array Element: ${currentValue}`);
	return accumulator + currentValue;
};

// Without Accumulator/intialValue
// const sum = Numbers.reduce(reducer);

// With Accumulator/intialValue
const sum = Numbers.reduce(reducer);
console.log(`Sum: ${sum}`);

