import SocialProofNotification from '../landing/SocialProofNotification';

export default function SocialProofNotificationExample() {
  return (
    <div className="bg-black min-h-[200px] relative">
      <p className="text-white p-4 text-sm">Aguarde a notificacao aparecer...</p>
      <SocialProofNotification />
    </div>
  );
}
