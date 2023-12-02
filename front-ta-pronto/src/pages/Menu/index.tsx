import React, { useEffect, useState } from "react";
import { useOrderListContext } from "../../context/OrderListContext";
import { BasePage } from "../../components/BasePage";
import { Fetchs } from "../../components/Fetchs";
import { MenuFilter } from "../../components/MenuFilter";
import { MenuItemCard } from "./MenuItemCard";
import { MenuItemCounter } from "./MenuItemCounter";
// import { MenuFetcher } from "./MenuFetcher";
import { MenuViewer } from "./MenuViewer";
import { MenuFilters } from "./MenuFilters";

export interface MenuItem {
  menuId: string;
  nome: string;
  ingredientes: string;
  descricao: string;
  preco: number;
  img: string;
}


interface MenuState {
  menuItems: MenuItem[];
  counters: { [menuId: string]: number };
  selectedItems: string[];
  selectedItemNames: string[];
}

export function Menu(): JSX.Element {
  // const { setOrders } = useOrderListContext();
  const [menuState, setMenuState] = useState<MenuState>({
    menuItems: [],
    counters: {},
    selectedItems: [],
    selectedItemNames: [],
  });

  // const handleValueChange = (novoValor: string | string[]) => {
  //   if (Array.isArray(novoValor)) {
  //     const stringSeparatedByComma = novoValor.join(", ");
  //     setOrders(stringSeparatedByComma);
  //   } else {
  //     setOrders(novoValor);
  //   }
  // };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/menuall");
        if (!response.ok) {
          throw new Error("Erro ao buscar o cardápio");
        }
        const data: MenuItem[] = await response.json();
        const initialCounters: { [menuId: string]: number } = {};
        data.forEach((item) => {
          initialCounters[item.menuId] = 0;
        });
        setMenuState({
          ...menuState,
          menuItems: data,
          counters: initialCounters,
        });
      } catch (error) {
        // Handle error
      }
    };

    fetchMenu();
  }, []);

  const handleIncrement = (menuId: string, itemName: string) => {
    setMenuState((prevMenuState) => {
      const updatedCounters = {
        ...prevMenuState.counters,
        [menuId]: (prevMenuState.counters[menuId] || 0) + 1,
      };
  
      return {
        ...prevMenuState,
        counters: updatedCounters,
        selectedItems: [...prevMenuState.selectedItems, menuId],
        selectedItemNames: [...prevMenuState.selectedItemNames, itemName],
      };
    });
  };
  
  const handleDecrement = (menuId: string, itemName: string) => {
    setMenuState((prevMenuState) => {
      const canDecrement =
        prevMenuState.counters[menuId] && prevMenuState.counters[menuId] > 0;
  
      if (canDecrement) {
        const updatedCounters = {
          ...prevMenuState.counters,
          [menuId]: prevMenuState.counters[menuId] - 1,
        };
  
        const updatedSelectedItems = prevMenuState.selectedItems.filter(
          (item) => item !== menuId
        );
  
        const updatedSelectedItemNames = prevMenuState.selectedItemNames.filter(
          (item) => item !== itemName
        );
  
        return {
          ...prevMenuState,
          counters: updatedCounters,
          selectedItems: updatedSelectedItems,
          selectedItemNames: updatedSelectedItemNames,
        };
      }
      return prevMenuState;
    });
  };
  
  useEffect(() => {
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(menuState.selectedItems)
    );
    // const stringSeparatedByComma = menuState.selectedItemNames.join(", ");
    // handleValueChange(stringSeparatedByComma);
  }, [menuState.selectedItemNames]);

  return (
    <>

      <BasePage title={"Cardápio"} subtitle="Escolha sua comida"></BasePage>
      {/* <MenuFilter></MenuFilter> */}
      <MenuViewer></MenuViewer>
      {/* <MenuFetcher></MenuFetcher> */}

    </>
  );
}
