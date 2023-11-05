import React from 'react';

export const SoundNotification: React.FC = () => {
  const playNotificationSound = () => {
    const audio = new Audio('caminho/do/arquivo/de/audio.mp3'); 
    audio.play();
  };

  return (
    <button onClick={playNotificationSound}>
      Acionar Notificação Sonora
    </button>
  );
};
