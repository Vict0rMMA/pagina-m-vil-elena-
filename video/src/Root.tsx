import { Composition } from "remotion";
import { Anuncio } from "./Anuncio";
import { Anuncio as AnuncioRedes } from "./AnuncioV2";
import { DURATION as DUR_REDES } from "./AnuncioV2/theme";
import { DURATION, FPS } from "./Anuncio/theme";

const formatos = [
  { id: "Anuncio-9x16", width: 1080, height: 1920 },
  { id: "Anuncio-1x1", width: 1080, height: 1080 },
  { id: "Anuncio-16x9", width: 1920, height: 1080 },
];

export const RemotionRoot: React.FC = () => (
  <>
    {formatos.map((f) => (
      <Composition key={f.id} {...f} component={Anuncio} durationInFrames={DURATION} fps={FPS} />
    ))}
    {/* Versión con collage y redes sociales al final */}
    <Composition id="Elena-Redes-9x16" width={1080} height={1920} component={AnuncioRedes} durationInFrames={DUR_REDES} fps={FPS} />
  </>
);
