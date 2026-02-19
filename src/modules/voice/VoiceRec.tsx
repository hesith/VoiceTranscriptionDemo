import type { FC } from "react";
import { useWebSpeech } from "../../hooks/useWebSpeech";
import { Record } from "./components/Record";

interface VoiceRecProps {
  title: string;
  description?: string;
}
export const VoiceRec: FC<VoiceRecProps> = ({ title, description }) => {
  const props = useWebSpeech();

  return (
    <div style={{ border: '1px dashed grey', borderRadius: 20, padding: 20 }}>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <Record {...props} />
    </div>
  );
}
