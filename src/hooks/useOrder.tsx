import { createContext, ReactNode, useContext, useState } from "react";

interface OrderProviderprops {
  children: ReactNode;
}

interface OrderContextData {
  isOpen: boolean;
  newOrder: () => void;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderprops): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const newOrder = async () => {
    setIsOpen(true);
  };

  return (
    <OrderContext.Provider value={{ isOpen, newOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder(): OrderContextData {
  const context = useContext(OrderContext);

  return context;
}
