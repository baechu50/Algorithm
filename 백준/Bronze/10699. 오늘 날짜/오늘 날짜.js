const date = new Date();
const formattedDate = date.toISOString().split("T")[0];
console.log(formattedDate);