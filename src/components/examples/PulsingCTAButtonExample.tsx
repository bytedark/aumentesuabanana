import PulsingCTAButton from '../landing/PulsingCTAButton';

export default function PulsingCTAButtonExample() {
  return (
    <div className="flex flex-col gap-4 items-center bg-black p-8">
      <PulsingCTAButton onClick={() => console.log('CTA clicked')}>
        QUERO GARANTIR POR R$19,90
      </PulsingCTAButton>
      <PulsingCTAButton size="default" onClick={() => console.log('Small CTA clicked')}>
        COMPRAR AGORA
      </PulsingCTAButton>
    </div>
  );
}
