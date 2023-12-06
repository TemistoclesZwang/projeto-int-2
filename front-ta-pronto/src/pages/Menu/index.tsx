import { useEffect, useState } from "react";
import { BasePage } from "../../components/BasePage";
import { MenuViewer } from "./MenuViewer";


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
