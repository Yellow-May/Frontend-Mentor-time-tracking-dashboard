const fetchData = async () => await (await fetch("/dist/data.json")).json();
const data = await fetchData();

console.log(data);
