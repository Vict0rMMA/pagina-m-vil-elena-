import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { Brand, Cta, Intro } from "./scenes";
import { Caption, Flash, Grade, Particles, Reveal, Shot, clamp, useFonts, useUnit } from "./kit";
import { C, DURATION } from "./theme";

const Music: React.FC = () => (
  <Audio
    src={staticFile("audio/music-v2.mp3")}
    volume={(f) => interpolate(f, [0, 20, DURATION - 40, DURATION], [0, 0.9, 0.9, 0], clamp)}
  />
);

export const Anuncio: React.FC = () => {
  useFonts();
  const { u, landscape } = useUnit();
  const big = (landscape ? 64 : 76) * u;
  return (
    <AbsoluteFill style={{ background: C.dark }}>
      {/* Escena 1 · 0–3 s */}
      <Sequence durationInFrames={102} layout="none">
        <Intro />
      </Sequence>

      {/* Escena 2 · 3–9.6 s: presentación */}
      <Shot src="adj1.jpg" from={90} len={66} enter="flash" zoom={[1.02, 1.3]} origin={[30, 72]} />
      <Shot src="adj7.jpg" from={156} len={66} enter="wipeUp" zoom={[1.0, 1.28]} origin={[28, 55]} />
      <Shot src="adj6.jpg" from={222} len={66} enter="slideLeft" zoom={[1.25, 1.04]} origin={[35, 55]} />

      {/* Escena 3 · 9.6–16.2 s: variedad */}
      <Shot src="adj10.jpg" from={288} len={66} enter="flash" zoom={[1.0, 1.22]} origin={[50, 60]} />
      <Shot src="adj8.jpg" from={354} len={66} enter="iris" zoom={[1.0, 1.28]} origin={[32, 62]} />
      <Shot src="adj9.jpg" from={420} len={66} enter="slideRight" zoom={[1.22, 1.02]} origin={[32, 50]} />

      {/* Ambiente sobre las escenas 2–3 */}
      <Sequence from={0} durationInFrames={490} layout="none">
        <Grade />
      </Sequence>
      <Sequence from={90} durationInFrames={400} layout="none">
        <Particles count={34} seed="s" speed={0.8} />
      </Sequence>

      <Caption from={40} to={96}>
        <Reveal text="Hay detalles que hacen especial cada momento…" size={big} italic weight={700} />
      </Caption>
      <Caption from={100} to={284}>
        <Reveal text="Velas artesanales hechas para sorprender." size={big} italic weight={700} color={C.cream} />
      </Caption>
      <Caption from={296} to={482}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 * u, alignItems: "center" }}>
          <Reveal text="Personaliza tus ideas." size={big} italic weight={700} color={C.gold} />
          <Reveal text="Celebra a tu manera." size={big} italic weight={700} delay={16} />
        </div>
      </Caption>

      {/* Escena 4 · 11–15 s: marca */}
      <Sequence from={486} durationInFrames={117} layout="none">
        <Brand />
      </Sequence>

      {/* Escena 5 · 15–20 s: llamado a la acción */}
      <Sequence from={591} durationInFrames={159} layout="none">
        <Cta />
      </Sequence>

      {[90, 288, 486, 591].map((f) => (
        <Flash key={f} at={f} />
      ))}
      <Music />
    </AbsoluteFill>
  );
};

