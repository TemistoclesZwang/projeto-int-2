import { useCustomContext } from "../c1";

// Novo componente para alterar o valor do contexto
export function ValueChanger() {
    const { setValue } = useCustomContext();
  
    const handleValueChange = () => {
      setValue('Neww Value');
    };
  
    return (
      <div>
        <button onClick={handleValueChange}>Change Value</button>
      </div>
    );
  }