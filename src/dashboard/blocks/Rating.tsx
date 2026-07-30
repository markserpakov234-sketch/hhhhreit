import { useEffect, useState } from 'react';
import { Trophy, Star, Crown, Medal } from 'lucide-react';

interface CityRating {
  city: string;
  points: number;
}

const RATING_URL =
  'https://script.google.com/macros/s/AKfycbzy9p9q5i9tMqKegiBWs8G5C--KIbA6anyDoHWh_1sWud5q1xcl5_lsXJiC-aumQN9sUA/exec';

export default function Rating() {
  const [data, setData] = useState<CityRating[]>([]);

  const loadRating = async () => {
    try {
      const response = await fetch(RATING_URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json: unknown = await response.json();

      if (!Array.isArray(json)) {
        throw new Error('Некорректный формат данных');
      }

      const result = json
        .filter(
          (
            item
          ): item is {
            city: unknown;
            points: unknown;
          } => typeof item === 'object' && item !== null && 'city' in item
        )
        .map<CityRating>((item) => ({
          city: String(item.city),
          points: Number(item.points ?? 0),
        }))
        .filter((item) => item.city.trim() !== '')
        .sort(
          (a: CityRating, b: CityRating) =>
            b.points - a.points || a.city.localeCompare(b.city, 'ru')
        );

      setData(result);
    } catch (error) {
      console.error('Rating error:', error);
    }
  };

  useEffect(() => {
    loadRating();

    const timer = setInterval(loadRating, 15000);

    return () => clearInterval(timer);
  }, []);

  const getPlaceStyle = (index: number) => {
    if (index === 0)
      return `
        bg-gradient-to-r
        from-yellow-300
        via-yellow-400
        to-orange-400
        text-black
        shadow-[0_0_35px_rgba(250,204,21,.55)]
        scale-[1.03]
      `;

    if (index === 1)
      return `
        bg-gradient-to-r
        from-gray-200
        via-gray-300
        to-gray-400
        text-black
        shadow-[0_0_25px_rgba(255,255,255,.35)]
      `;

    if (index === 2)
      return `
        bg-gradient-to-r
        from-orange-700
        via-orange-500
        to-amber-500
        text-white
        shadow-[0_0_25px_rgba(249,115,22,.4)]
      `;

    return `
      bg-white/5
      border-white/10
      text-white
    `;
  };

  const PlaceIcon = ({ place }: { place: number }) => {
    if (place === 0) return <Crown size={22} />;

    if (place === 1) return <Medal size={22} />;

    if (place === 2) return <Trophy size={22} />;

    return (
      <span
        className="
          text-white/50
          font-black
          text-lg
          w-6
          text-center
        "
      >
        {place + 1}
      </span>
    );
  };

  return (
    <div
      className="
        h-full
        flex
        flex-col
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          mb-4
        "
      >
        <Trophy size={32} className="text-yellow-300" />

        <div>
          <h2
            className="
              text-3xl
              font-black
              tracking-wide
            "
          >
            РЕЙТИНГ ГОРОДОВ
          </h2>

          <p
            className="
              text-white/50
              text-sm
            "
          >
            {data.length} команд • текущие результаты
          </p>
        </div>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-3
          flex-1
          overflow-hidden
        "
      >
        {data.map((item, index) => (
          <div
            key={`${item.city}-${index}`}
            className={`
              h-[52px]
              rounded-2xl
              border
              px-4
              flex
              items-center
              justify-between
              backdrop-blur-xl
              transition-all
              duration-700
              ${getPlaceStyle(index)}
            `}
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <PlaceIcon place={index} />

              <span
                className="
                  font-bold
                  text-lg
                  truncate
                "
              >
                {item.city}
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-1
                font-black
                text-xl
                shrink-0
              "
            >
              <Star
                size={20}
                className="
                  fill-yellow-300
                  text-yellow-300
                "
              />

              {item.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
