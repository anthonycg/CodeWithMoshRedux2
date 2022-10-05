// Write code in a functional style to convert the input to the output:

const input = { tag: "JAVASCRIPT" };
const output = "(javascript)";

const addFormat = (extraction) => {
    console.log(`"(${extraction(input).toLowerCase()})"`);
};

const extract = (object) => {
    return object.tag;
};

addFormat(extract);

// We have a recipe object as follows:
// recipe = { name: “Spaghetti Bolognese”,
//     ingredients: [“egg”, “salt”]
// }

// Assuming that this object is immutable, write code to
// -Add a new ingredient (“cream”)
// -Replace “egg” with “egg white”
// -Remove an ingredient (“egg”)

const recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };
const newRecipe = Object.assign({}, recipe, {ingredients: ["cream,", "egg white", "salt"]})
console.log(newRecipe)

const newRecipe2 = {...recipe, ingredients: ["creamer", "egg white", "saltyy"]}
console.log(newRecipe2)
