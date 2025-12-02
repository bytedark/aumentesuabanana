import CountdownTimer from '../landing/CountdownTimer';

export default function CountdownTimerExample() {
  return (
    <div className="bg-black p-8 flex flex-col items-center gap-4">
      <p className="text-[#FFD300] text-lg font-bold uppercase tracking-wider">Oferta expira em:</p>
      <CountdownTimer initialHours={1} initialMinutes={45} initialSeconds={30} />
    </div>
  );
}
