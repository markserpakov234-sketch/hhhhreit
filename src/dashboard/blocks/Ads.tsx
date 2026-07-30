import { useEffect, useState } from 'react';
import {
  Megaphone,
  Sparkles,
  CalendarDays,
  Star,
  PartyPopper,
} from 'lucide-react';

const slides = [
  {
    title: 'ГАЛАКТИЧЕСКОЕ ШОУ',
    text: 'Сегодня нас ждёт большое событие',
    icon: PartyPopper,
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
  },
  {
    title: 'РЕСПУБЛИКА ВИТАЛИЯ',
    text: 'Создаём историю вместе',
    icon: Sparkles,
    gradient: 'from-blue-500 via-purple-500 to-indigo-500',
  },
  {
    title: 'БОЛЬШОЙ РЕЙТИНГ',
    text: 'Зарабатывайте звёзды для своего города',
    icon: Star,
    gradient: 'from-yellow-400 via-orange-400 to-red-400',
  },
  {
    title: 'НОВЫЕ СОБЫТИЯ',
    text: 'Следите за главными моментами смены',
    icon: CalendarDays,
    gradient: 'from-green-400 via-cyan-400 to-blue-500',
  },
];

export default function Ads() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const item = slides[index];

  const Icon = item.icon;

  return (
    <div
      className="
      h-full
      relative
      overflow-hidden
      rounded-[28px]
      "
    >
      {/* Фоновый градиент */}

      <div
        className={`
        absolute
        inset-0
        bg-gradient-to-br
        ${item.gradient}
        opacity-70
        transition-all
        duration-1000
        `}
      />

      {/* Световые эффекты */}

      <div
        className="
        absolute
        -top-20
        -right-20
        w-72
        h-72
        bg-white/30
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        justify-center
        p-8
        "
      >
        <Icon
          size={60}
          className="
          text-white
          mb-6
          animate-pulse
          "
        />

        <h2
          className="
          text-4xl
          font-black
          leading-tight
          "
        >
          {item.title}
        </h2>

        <p
          className="
          mt-4
          text-xl
          text-white/90
          font-medium
          "
        >
          {item.text}
        </p>

        <div
          className="
          mt-8
          flex
          items-center
          gap-2
          text-white/80
          "
        >
          <Megaphone size={20} />

          <span>Республика Виталия</span>
        </div>
      </div>

      {/* Индикатор слайдов */}

      <div
        className="
        absolute
        bottom-5
        left-8
        flex
        gap-2
        "
      >
        {slides.map((_, i) => (
          <div
            key={i}
            className={`
            h-2
            rounded-full
            transition-all
            ${i === index ? 'w-10 bg-white' : 'w-2 bg-white/40'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
