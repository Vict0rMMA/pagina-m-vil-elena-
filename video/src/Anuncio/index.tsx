import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { Finale, Intro } from "./scenes";
import { Shot } from "./cine";
import { Flare, Grade, Petals, Rays, Smoke, Veil } from "./fx";
import { Caption, Particles, Reveal, clamp, useFonts, useUnit } from "./kit";
import { C, CUTS, DURATION } from "./theme";

const Music: React.FC = () => (
  <Audio
    src={staticFile("audio/music.mp3")}
    volume={(f) => interpolate(f, [0, 12, DURATION - 45, DURATION], [0, 1, 1, 0], clamp)}
  />
);

export const Anuncio: React.FC = () => {
  useFonts();
  const { u, landscape } = useUnit();
  const big = (landscape ? 62 : 74) * u;
  const [c2, c3, c4, c5] = CUTS;
  return (
    <AbsoluteFill style={{ background: C.dark }}>
      {/* Escena 1 · 0–4 s · el despertar de los sentidos */}
      <Sequence durationInFrames={c2 + 12} layout="none">
        <Intro />
      </Sequence>

      {/* Escena 2 · 4–8.7 s · el universo de las velas (travelling lateral, telas, luz) */}
      <Shot
        src="adj1.jpg"
        from={c2}
        len={70}
        a={{ f: [0.7, 0.55], t: [0.5, 0.52], s: 1.1, yaw: -7 }}
        b={{ f: [0.3, 0.68], t: [0.46, 0.56], s: 1.32, yaw: 6 }}
        focus={[[0.5, 0.55, 0.55], [0.4, 0.62, 0.42]]}
      />
      <Shot
        src="adj7.jpg"
        from={c2 + 70}
        len={70}
        a={{ f: [0.3, 0.6], t: [0.5, 0.55], s: 1.15, yaw: 6 }}
        b={{ f: [0.9, 0.24], t: [0.68, 0.4], s: 1.75, yaw: -4 }}
        focus={[[0.35, 0.55, 0.5], [0.7, 0.4, 0.3]]}
      />

      {/* Escena 3 · 8.7–13.7 s · belleza y detalles (macro, enfoque) */}
      <Shot
        src="adj5.jpg"
        from={c3}
        len={50}
        a={{ f: [0.5, 0.55], t: [0.5, 0.5], s: 1.05, yaw: 0 }}
        b={{ f: [0.3, 0.7], t: [0.5, 0.5], s: 2.1, yaw: -5 }}
        focus={[[0.5, 0.5, 0.6], [0.5, 0.5, 0.28]]}
      />
      <Shot
        src="pino-grande.jpg"
        from={c3 + 50}
        len={50}
        a={{ f: [0.5, 0.72], t: [0.5, 0.6], s: 1.0, yaw: 5 }}
        b={{ f: [0.5, 0.55], t: [0.5, 0.5], s: 1.28, yaw: -5 }}
      />
      <Shot
        src="adj8.jpg"
        from={c3 + 100}
        len={50}
        a={{ f: [0.33, 0.58], t: [0.5, 0.55], s: 1.1, yaw: -4 }}
        b={{ f: [0.33, 0.78], t: [0.5, 0.55], s: 1.55, yaw: 4 }}
        focus={[[0.42, 0.55, 0.4], [0.42, 0.62, 0.34]]}
      />

      {/* Escena 4 · 13.7–19.2 s · identidad (secuencia dinámica, música en su punto álgido) */}
      <Shot src="adj10.jpg" from={c4} len={41} fit="contain" a={{ f: [0.5, 0.5], t: [0.5, 0.5], s: 1.0, yaw: 7 }} b={{ f: [0.5, 0.5], t: [0.5, 0.5], s: 1.2, yaw: -6 }} />
      <Shot src="adj9.jpg" from={c4 + 41} len={41} a={{ f: [0.3, 0.5], t: [0.45, 0.5], s: 1.0, yaw: -6 }} b={{ f: [0.45, 0.52], t: [0.5, 0.5], s: 1.28, yaw: 5 }} focus={[[0.45, 0.5, 0.5], [0.45, 0.5, 0.4]]} />
      <Shot src="adj6.jpg" from={c4 + 82} len={41} a={{ f: [0.35, 0.6], t: [0.5, 0.55], s: 1.55, yaw: 6 }} b={{ f: [0.45, 0.55], t: [0.5, 0.52], s: 1.1, yaw: -3 }} focus={[[0.42, 0.55, 0.4], [0.45, 0.55, 0.55]]} />
      <Shot src="adj2.jpg" from={c4 + 123} len={42} a={{ f: [0.28, 0.42], t: [0.5, 0.45], s: 1.6, yaw: -5 }} b={{ f: [0.5, 0.55], t: [0.5, 0.5], s: 1.05, yaw: 4 }} focus={[[0.4, 0.45, 0.4], [0.5, 0.5, 0.6]]} />

      {/* Atmósfera: telas, luz volumétrica, humo, pétalos */}
      <Sequence from={c2} durationInFrames={c3 - c2 + 12} layout="none">
        <Rays opacity={0.4} />
        <Veil opacity={0.55} seed={1} />
        <Smoke opacity={0.2} seed={2} />
        <Particles count={26} seed="s2" speed={0.7} />
      </Sequence>
      <Sequence from={c3} durationInFrames={c4 - c3 + 12} layout="none">
        <Petals count={12} seed={3} />
        <Veil opacity={0.4} seed={5} />
        <Particles count={26} seed="s3" speed={0.8} />
      </Sequence>
      <Sequence from={c4} durationInFrames={c5 - c4 + 12} layout="none">
        <Rays opacity={0.35} />
        <Petals count={9} seed={8} />
        <Particles count={34} seed="s4" speed={1.1} />
      </Sequence>
      <Sequence from={0} durationInFrames={c5 + 6} layout="none">
        <Grade scrim={0.55} />
      </Sequence>

      {/* Textos */}
      <Caption from={44} to={c2 + 4}>
        <Reveal text="Hay momentos que merecen algo especial." size={big} italic weight={700} />
      </Caption>
      <Caption from={c2 + 14} to={c3 - 6}>
        <Reveal text="Diseños que transforman cada detalle." size={big} italic weight={700} />
      </Caption>
      <Caption from={c3 + 12} to={c4 - 6}>
        <Reveal text="Encuentra la vela perfecta para tu ocasión." size={big} italic weight={700} color={C.gold} />
      </Caption>
      <Caption from={c4 + 24} to={c5 - 4}>
        <Reveal text="Velas y Aromas Elena" size={big * 1.15} italic weight={700} color={C.gold} />
      </Caption>

      {/* Escena 5 · 19.2–25 s · cierre de marca */}
      <Sequence from={c5} durationInFrames={DURATION - c5} layout="none">
        <Finale />
      </Sequence>

      {CUTS.map((f) => (
        <Flare key={f} at={f} />
      ))}
      <Music />
    </AbsoluteFill>
  );
};
