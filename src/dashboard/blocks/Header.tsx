import { useEffect, useState } from 'react';
import { CalendarDays, Clock3, Sparkles } from 'lucide-react';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const clock = time.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className="
      w-full
      flex
      items-center
      justify-between
      "
    >
      {/* Левая часть */}

      <div
        className="
        flex
        items-center
        gap-5
        "
      >
        <div
          className="
          w-16
          h-16
          rounded-3xl
          bg-gradient-to-br
          from-orange-400
          via-pink-500
          to-purple-600
          flex
          items-center
          justify-center
          shadow-[0_0_35px_rgba(236,72,153,.45)]
          "
        >
          <Sparkles
            size={34}
            className="
            text-white
            "
          />
        </div>

        <div>
          <h1
            className="
            text-4xl
            font-black
            tracking-tight
            "
          >
            РЕСПУБЛИКА
            <span
              className="
              text-orange-300
              "
            >
              {' '}
              ВИТАЛИЯ
            </span>
          </h1>

          <p
            className="
            text-white/60
            text-lg
            font-medium
            "
          >
            Рейтинг городов смены
          </p>
        </div>
      </div>

      {/* Правая часть */}

      <div
        className="
        flex
        items-center
        gap-6
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white/10
          px-5
          py-3
          border
          border-white/10
          backdrop-blur-xl
          "
        >
          <CalendarDays
            size={24}
            className="
            text-cyan-300
            "
          />

          <span
            className="
            text-lg
            font-bold
            "
          >
            {date}
          </span>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white/10
          px-5
          py-3
          border
          border-white/10
          backdrop-blur-xl
          "
        >
          <Clock3
            size={24}
            className="
            text-yellow-300
            "
          />

          <span
            className="
            text-3xl
            font-black
            "
          >
            {clock}
          </span>
        </div>
      </div>
    </div>
  );
}
