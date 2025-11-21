
import ScrambledText from "../components/ScrambledText/ScrambledText";
import { LayoutTextFlip } from "../components/UI/layout-text-flip";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative">
      <section className="relative py-30 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="container relative z-10 mx-auto px-10 text-center">
          <LayoutTextFlip />
          <div className="w-full md:w-1/2 text-lg text-justify mx-auto">
            <ScrambledText
              className="scrambled-text-profile"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=":.,"
            >
              Saya adalah Frontend Developer yang bersemangat menciptakan
              antarmuka yang intuitif, responsif, dan menarik. Saya menikmati
              proses mengubah ide menjadi pengalaman digital yang nyata—mulai
              dari mengoptimalkan performa, menyempurnakan detail UI, hingga
              memastikan aksesibilitas di berbagai perangkat. Meski berfokus
              pada frontend, saya juga memperluas kemampuan ke arah full-stack
              development untuk membangun solusi end-to-end yang indah dan
              andal. Saya percaya pada pembelajaran berkelanjutan, kode yang
              bersih, dan pembuatan produk yang benar-benar memberikan nilai.
              Setiap proyek adalah kesempatan untuk berkembang dan
              mengeksplorasi teknologi baru.
            </ScrambledText>
          </div>
        </div>
      </section>
    </div>
  );
}
