// VoiceInput.jsx
import { useSpeechRecognition } from "./useSpeechRecognition";

export default function VoiceRec() {
  const { transcript, listening, start, stop, error } =
    useSpeechRecognition();

  return (
    <div style={{ maxWidth: 400 }}>
      <button onClick={start} disabled={listening}>
        🎤 Start
      </button>
      <button onClick={stop} disabled={!listening}>
        ⏹ Stop
      </button>

      <textarea
        rows={4}
        value={transcript}
        placeholder="Speak something..."
        readOnly
        style={{ width: "100%", marginTop: 10 }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
