export interface MenuItem {
    menuId: string;
    nome: string;
    ingredientes: string;
    descricao: string;
    preco: number;
    img: string;
  }
  
  export async function fetchMenuData(): Promise<MenuItem[]> {
    try {
      const response = await fetch('http://localhost:3000/users/menuall');
      if (!response.ok) {
        throw new Error('Erro ao buscar o cardápio');
      }
      const data: MenuItem[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw error;
    }
  }
  