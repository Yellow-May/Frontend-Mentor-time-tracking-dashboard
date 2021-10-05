const fetchData = async () => await (await fetch("/dist/data.json")).json();
const data = await fetchData();

const currentArr = Array.from(document.getElementsByClassName("current"));
const previousArr = Array.from(document.getElementsByClassName("previous"));

const buttons = Array.from(
	document.getElementsByClassName("buttons")[0].getElementsByTagName("button")
);

buttons.forEach(btn => {
	btn.addEventListener("click", e => {
		const { title } = e.target;

		buttons.forEach(btnII =>
			btnII === e.target ? btnII.classList.add("active") : btnII.classList.remove("active")
		);

		currentArr.forEach(curr => {
			const { name } = curr.parentElement.parentElement.dataset;
			const { current } = data.find(d => d.title === name).timeframes[title];

			curr.textContent = `${current}hrs`;
		});
		previousArr.forEach(prev => {
			const { name } = prev.parentElement.parentElement.dataset;
			const { previous } = data.find(d => d.title === name).timeframes[title];
			const content = () =>
				title === "daily"
					? `Yesterday - ${previous}hrs`
					: title === "weekly"
					? `Last Week - ${previous}hrs`
					: `Last Month - ${previous}hrs`;

			prev.textContent = content();
		});
	});
});
