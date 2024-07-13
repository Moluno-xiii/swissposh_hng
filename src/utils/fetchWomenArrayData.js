export const fetchArrayData = async () => {
  const response = await fetch(
    "https://reverse-proxy-tp0r.onrender.com/products?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774",
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const fetchArrayDataMen = async () => {
  const response = await fetch(
    "https://reverse-proxy-tp0r.onrender.com/products?organization_id=b10d95a3d180490d940e7f1475f90195&reverse_sort=false&page=1&size=10&Appid=B8KBBEX6DB6IB5Z&Apikey=1067ceca93244c2fbf0925ec925de4fa20240714004338071383",
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
