import Header from '../blocks/Header';
import Rating from '../blocks/Rating';
import Ads from '../blocks/Ads';
import QRCodeCard from '../blocks/QRCodeCard';

export default function Screen() {
  return (
    <div
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-[#12002b]
        via-[#24105f]
        to-[#050014]
        text-white
        p-5
      "
    >
      {/* Световые пятна фона */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-500/30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-orange-400/20
            blur-[130px]
          "
        />
      </div>

      {/* Основная сетка */}
      <div
        className="
          relative
          z-10
          h-full
          grid
          grid-cols-[1fr_360px]
          gap-5
        "
      >
        {/* ЛЕВАЯ ЧАСТЬ — РЕЙТИНГ */}
        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            shadow-2xl
            overflow-hidden
          "
        >
          <Header />

          <div className="mt-5 h-[calc(100%-80px)]">
            <Rating />
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div
          className="
            flex
            flex-col
            gap-5
          "
        >
          {/* QR */}
          <div
            className="
              flex-[1]
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              shadow-2xl
            "
          >
            <QRCodeCard />
          </div>

          {/* Реклама */}
          <div
            className="
              flex-[1]
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-br
              from-orange-500/20
              to-pink-500/10
              backdrop-blur-xl
              p-6
              shadow-2xl
              overflow-hidden
            "
          >
            <Ads />
          </div>
        </div>
      </div>
    </div>
  );
}
