import { createContext, useContext, useState } from 'react';

const BudgetContext = createContext();

export default function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(0);

  return <BudgetContext.Provider>{children}</BudgetContext.Provider>;
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget can only be used inside BudgetContextProvider');
  }

  return context;
}
