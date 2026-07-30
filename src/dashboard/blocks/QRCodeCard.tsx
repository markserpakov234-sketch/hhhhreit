import { QrCode, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';

const SITE_URL = 'https://твой-сайт.ru';

export default function QRCodeCard() {
  return (
    <div
      className="
      h-full
      flex
      flex-col
      items-center
      justify-center
      relative
      overflow-hidden
      "
    >
      {/* Светящийся фон */}

      <div
        className="
        absolute
        w-72
        h-72
        rounded-full
        bg-cyan-400/20
        blur-3xl
        animate-pulse
        "
      />

      {/* Заголовок */}

      <div
        className="
        relative
        z-10
        flex
        items-center
        gap-2
        mb-5
        "
      >
        <Smartphone
          size={28}
          className="
          text-cyan-300
          "
        />

        <h2
          className="
          text-2xl
          font-black
          "
        >
          СКАНИРУЙ
        </h2>
      </div>

      {/* QR контейнер */}

      <div
        className="
        relative
        z-10
        p-5
        rounded-[32px]
        bg-white
        shadow-[0_0_50px_rgba(34,211,238,.5)]
        "
      >
        <QRCode value={SITE_URL} size={190} />

        {/* Линия сканирования */}

        <div
          className="
          absolute
          left-3
          right-3
          top-1/2
          h-1
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
          animate-pulse
          "
        />
      </div>

      <div
        className="
        relative
        z-10
        mt-5
        text-center
        "
      >
        <p
          className="
          text-white
          font-bold
          text-lg
          "
        >
          Узнай рейтинг
        </p>

        <p
          className="
          text-white/50
          text-sm
          "
        >
          своего города
        </p>
      </div>

      <QrCode
        size={70}
        className="
        absolute
        bottom-5
        right-5
        text-white/10
        "
      />
    </div>
  );
}
