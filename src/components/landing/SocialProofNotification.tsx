import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const notifications = [
  { name: 'Joao', city: 'Sao Paulo', time: '2 min', result: 'Adquiriu o produto!' },
  { name: 'Carlos', city: 'Rio de Janeiro', time: '5 min', result: 'Adquiriu o produto!' },
  { name: 'Pedro', city: 'Belo Horizonte', time: '8 min', result: 'Adquiriu o produto!' },
  { name: 'Lucas', city: 'Salvador', time: '12 min', result: 'Adquiriu o produto!' },
  { name: 'Marcos', city: 'Curitiba', time: '15 min', result: 'Adquiriu o produto!' },
  { name: 'Rafael', city: 'Porto Alegre', time: '18 min', result: 'Adquiriu o produto!' },
  { name: 'Fernando', city: 'Florianopolis', time: '22 min', result: 'Adquiriu o produto!' },
  { name: 'Andre', city: 'Recife', time: '25 min', result: 'Adquiriu o produto!' },
  { name: 'Bruno', city: 'Brasilia', time: '28 min', result: 'Adquiriu o produto!' },
  { name: 'Gustavo', city: 'Fortaleza', time: '31 min', result: 'Adquiriu o produto!' },
  { name: 'Tiago', city: 'Manaus', time: '34 min', result: 'Adquiriu o produto!' },
  { name: 'Diego', city: 'Goiania', time: '37 min', result: 'Adquiriu o produto!' },
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentNotification(prev => (prev + 1) % notifications.length);
        }, 500);
      }, 4000);
    };

    const initialDelay = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const notification = notifications[currentNotification];

  return (
    <div
      className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
      data-testid="notification-social-proof"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-md shadow-lg p-3 md:p-4 flex items-center gap-3 max-w-[280px] sm:max-w-[320px] md:max-w-sm">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00FF66]/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#00FF66]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs sm:text-sm md:text-base font-semibold truncate">
            {notification.name}
          </p>
          <p className="text-[#00FF66] text-xs sm:text-sm font-bold">
            {notification.result}
          </p>
          <p className="text-zinc-500 text-xs">
            {notification.time} atras
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-zinc-500 hover:text-white transition-colors p-1"
          data-testid="button-dismiss-notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
