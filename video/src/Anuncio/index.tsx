import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { Brand, Cta, Intro } from "./scenes";
import { Caption, Flash, Grade, Particles, Reveal, Shot, clamp, useFonts, useUnit } from "./kit";
import { C, DURATION } from "./theme";

const Music: React.FC = () => (
  <Audio
    src={staticFile("audio/music.mp3")}
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

      {/* Escena 2 · 3–7 s: presentación */}
      <Shot src="adj1.jpg" from={90} len={40} enter="flash" zoom={[1.02, 1.3]} origin={[30, 72]} />
      <Shot src="pesebre-arbolito-angel.jpg" from={130} len={40} enter="wipeUp" zoom={[1.0, 1.28]} origin={[55, 60]} pan={[2, -2]} />
      <Shot src="adj2.jpg" from={170} len={40} enter="slideLeft" zoom={[1.25, 1.04]} origin={[25, 65]} />

      {/* Escena 3 · 7–11 s: variedad */}
      <Shot src="adj5.jpg" from={210} len={30} enter="flash" zoom={[1.0, 1.25]} origin={[30, 62]} />
      <Shot src="noche-velitas-1.jpg" from={240} len={30} enter="iris" zoom={[1.0, 1.2]} origin={[50, 40]} pan={[-2, 2]} />
      <Shot src="vela-huella-mascota.jpg" from={270} len={30} enter="slideRight" zoom={[1.2, 1.02]} origin={[50, 70]} />
      <Shot src="pino-grande.jpg" from={300} len={30} enter="wipeUp" zoom={[1.0, 1.25]} origin={[50, 65]} />

      {/* Ambiente sobre las escenas 2–3 */}
      <Sequence from={0} durationInFrames={340} layout="none">
        <Grade />
      </Sequence>
      <Sequence from={90} durationInFrames={250} layout="none">
        <Particles count={34} seed="s" speed={0.8} />
      </Sequence>

      <Caption from={40} to={96}>
        <Reveal text="Hay detalles que hacen especial cada momento…" size={big} italic weight={700} />
      </Caption>
      <Caption from={100} to={208}>
        <Reveal text="Velas artesanales hechas para sorprender." size={big} italic weight={700} color={C.cream} />
      </Caption>
      <Caption from={216} to={328}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 * u, alignItems: "center" }}>
          <Reveal text="Personaliza tus ideas." size={big} italic weight={700} color={C.gold} />
          <Reveal text="Celebra a tu manera." size={big} italic weight={700} delay={16} />
        </div>
      </Caption>

      {/* Escena 4 · 11–15 s: marca */}
      <Sequence from={330} durationInFrames={132} layout="none">
        <Brand />
      </Sequence>

      {/* Escena 5 · 15–20 s: llamado a la acción */}
      <Sequence from={450} durationInFrames={150} layout="none">
        <Cta />
      </Sequence>

      {[90, 210, 330, 450].map((f) => (
        <Flash key={f} at={f} />
      ))}
      <Music />
    </AbsoluteFill>
  );
};

