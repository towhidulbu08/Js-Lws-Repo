async function fetchData() {
  const response = await fetch("demo.txt");
  console.log(response);
  const textData = await response.text();
  const data = JSON.parse(textData);
  console.log(data);
}

fetchData();
