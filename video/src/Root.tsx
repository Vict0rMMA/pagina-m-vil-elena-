import { Composition } from "remotion";
import { Anuncio } from "./Anuncio";
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
  </>
);
