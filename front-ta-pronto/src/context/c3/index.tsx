import { useCustomContext } from "../c1";

// Novo componente para alterar o valor do contexto
export function ValueChanger() {
    const { setNewEmail } = useCustomContext();
  
    const handleValueChange = () => {
      setNewEmail('novo email');
    };
  
    return (
      <div>
        <button onClick={handleValueChange}>Change Value</button>
      </div>
    );
  }