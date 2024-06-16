const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  switch (newQuery.category) {
    case "all":
      const { category, ...all } = currentQuery;
      return all;

    case "":
      const { search, ...rest } = currentQuery;
      return rest;

    // case "jewerrr":
    //   newQuery.category = "jewelery";
    //   return newQuery;

    // case "farzad":
    //   newQuery.category = "electronics";
    //   return newQuery;
    // default:
    //   return { ...currentQuery, ...newQuery };
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id == id);
  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumPrice,
  sumQuantity,
  productQuantity,
};
