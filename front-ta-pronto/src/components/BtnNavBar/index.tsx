import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';


interface NavButtonProps {
  to: string;
  icon: any; // Substitua 'any' pelo tipo correto do seu ícone do FontAwesome
  text: string;
}

export function BtnNavBar({ to, icon, text }: NavButtonProps) {
  return (
    <li>
      <button className="btn-nav">
        <FontAwesomeIcon icon={icon} size="lg" className="icons" />
        <Link to={to} aria-label={text}>
          <span className="hidden-text">{text}</span>
        </Link>
      </button>
    </li>
  );
}

