const initialStateProducts = { products: [], total: 0 };
const initialStateCategories = { categories: [] };

export const productReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload.products, total: action.payload.total };
    default:
      return state;
  }
};

export const categoryReducer = (state = initialStateCategories, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
