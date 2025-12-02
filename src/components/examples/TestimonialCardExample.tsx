import TestimonialCard from '../landing/TestimonialCard';
import maleAvatar from '@assets/generated_images/male_testimonial_avatar_portrait.png';

export default function TestimonialCardExample() {
  return (
    <div className="bg-black p-4 max-w-md">
      <TestimonialCard
        name="Carlos Silva"
        location="Sao Paulo, SP"
        text="Mudou completamente minha vida! Em apenas 2 semanas ja vi resultados incriveis. Recomendo demais!"
        image={maleAvatar}
        rating={5}
      />
    </div>
  );
}
