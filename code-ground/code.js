// const isPalidrone = (str) => str.split("").reverse().join("") === str;

// console.log(isPalidrone("racecar"));

var inputData = [
	{
		id: 1,
		title: "hippo",
		faveFood: "carrots",
	},
	{
		id: 2,
		title: "Cat",
		faveFood: "carrots",
	},
	{
		id: 3,
		title: "ducks",
		faveFood: "breadcrumbs",
	},
];

const findAnimal = animal => {
	const foundAnimal = inputData.find(animalObj => animalObj.title === animal);

	if (foundAnimal) {
		const { faveFood } = foundAnimal;
		return faveFood;
	}

	return "Animal not found";
};

console.log(findAnimal("hippo"));
