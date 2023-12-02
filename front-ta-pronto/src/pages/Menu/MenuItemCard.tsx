import React from 'react';
import { MenuItem } from '.';

interface MenuItemCardProps {
  item: MenuItem;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function MenuItemCard({
  item,
  counter,
  onIncrement,
  onDecrement,
}: MenuItemCardProps): JSX.Element {
  return (
    <div className="containerCardapio" key={item.menuId}>
      <div className="infosCardapio">
        <p className="pratos">
          <strong>Nome:</strong> {item.nome} <br />
          <strong>Ingredientes:</strong> {item.ingredientes} <br />
          <strong>Descrição:</strong> {item.descricao} <br />
          <strong>Preço:</strong>{" "}
          <span className="cardapioPreco">R${item.preco.toFixed(2)}</span>
        </p>
        <div className="tools">
          <button className="cardapioBtn" onClick={onIncrement}>
            +
          </button>
          <strong>
            <span>{counter}</span>
          </strong>
          <button className="cardapioBtn" onClick={onDecrement}>
            -
          </button>
        </div>
        <div className="imgCardapio">
          <img src={item.img} className="imgCardapio" alt="cardapio" />
        </div>
      </div>
    </div>
  );
}
