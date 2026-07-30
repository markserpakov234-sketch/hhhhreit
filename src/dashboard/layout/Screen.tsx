import Header from '../blocks/Header';
import Rating from '../blocks/Rating';
import Ads from '../blocks/Ads';
import QRCodeCard from '../blocks/QRCodeCard';

export default function Screen() {
  return (
    <div
      className="
        fixed
        inset-0
        overflow-hidden
        bg-gradient-to-br
        from-[#12002b]
        via-[#24105f]
        to-[#050014]
        text-white
        p-5
      "
    >
      {/* Световые пятна */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            -bottom-40
            -right-20
            w-[600px]
            h-[600px]
            rounded-full
            bg-orange-400/20
            blur-[130px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          h-full
          grid
          gap-5
          grid-cols-[minmax(0,1fr)_minmax(300px,18vw)]
        "
      >
        {/* Левая часть */}
        <div
          className="
            flex
            flex-col
            min-h-0
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            shadow-2xl
          "
        >
          <Header />

          <div className="flex-1 mt-5 min-h-0 overflow-hidden">
            <Rating />
          </div>
        </div>

        {/* Правая часть */}
        <div
          className="
            flex
            flex-col
            gap-5
            min-h-0
          "
        >
          <div
            className="
              flex-1
              min-h-0
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
            <QRCodeCard />
          </div>

          <div
            className="
              flex-1
              min-h-0
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