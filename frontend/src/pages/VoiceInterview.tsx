import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";

const VoiceInterview = () => {
  const [aiReply, setAiReply] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support voice recognition.</div>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();

    // fake AI reply (we will upgrade later to real AI)
    setAiReply("Good answer. Can you explain more deeply?");
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Voice AI Interview</h1>

      <p className="mb-4 text-green-400">
        Listening: {listening ? "ON" : "OFF"}
      </p>

      <div className="bg-gray-900 p-6 rounded-xl mb-6">
        <p className="text-gray-300">You said:</p>
        <p className="text-xl">{transcript}</p>
      </div>

      <button
        onClick={startListening}
        className="bg-green-600 px-6 py-3 rounded mr-4"
      >
        Start Speaking
      </button>

      <button
        onClick={stopListening}
        className="bg-red-600 px-6 py-3 rounded"
      >
        Stop
      </button>

      {aiReply && (
        <div className="mt-6 bg-blue-900 p-6 rounded-xl">
          🤖 AI: {aiReply}
        </div>
      )}

      <button
        onClick={resetTranscript}
        className="mt-6 text-sm text-gray-400"
      >
        Reset
      </button>
    </div>
  );
};

export default VoiceInterview;