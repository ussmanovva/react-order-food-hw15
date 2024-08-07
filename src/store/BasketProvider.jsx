import { createContext, useReducer } from "react";

export const BasketContext = createContext();

const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      const existingTamak = state.find((food) => food.id === action.payload.id);
      
      if (!existingTamak) {
        return [...state, action.payload];
      } else {
        return state.map((food) => 
          food.id === action.payload.id 
            ? { ...food, amount: +food.amount + +action.payload.amount } 
            : food
        );
      }

    case "REMOVE_FOOD":
      const foodIndex = state.findIndex((food) => food.id === action.payload.id);
      
      if (foodIndex !== -1) {
        const updatedItems = [...state];
        updatedItems[foodIndex].amount -= 1;
        
        if (updatedItems[foodIndex].amount === 0) {
          updatedItems.splice(foodIndex, 1);
        }

        return updatedItems;
      }
      return state;

    default:
      return state;
  }
};

const BasketProvider = ({ children }) => {
  const [items, dispatch] = useReducer(basketReducer, []);

  const onAddFood = (tamak) => {
    dispatch({ type: "ADD_FOOD", payload: tamak });
  };

  const onRemoveFood = (id) => {
    dispatch({ type: "REMOVE_FOOD", payload: { id } });
  };

  const initialValue = {
    items,
    onAddFood,
    onRemoveFood,
  };

  return (
    <BasketContext.Provider value={initialValue}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
