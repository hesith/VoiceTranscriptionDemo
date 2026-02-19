import type { FC } from "react";

interface RecordProps {
    start: () => void;
    stop: () => void;
    transcript: string;
    listening: boolean;
    error: string | null;
}

export const Record: FC<RecordProps> = ({ start, stop, transcript, listening, error }) => {
    return (<div style={{ maxWidth: 400 }}>
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
    </div>)
}