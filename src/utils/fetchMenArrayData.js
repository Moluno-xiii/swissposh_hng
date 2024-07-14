export const fetchMenArrayData = async () => {
  const response = await fetch(
    "https://reverse-proxy-tp0r.onrender.com/products?organization_id=b10d95a3d180490d940e7f1475f90195&reverse_sort=false&page=1&size=10&Appid=B8KBBEX6DB6IB5Z&Apikey=1067ceca93244c2fbf0925ec925de4fa20240714004338071383",
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
