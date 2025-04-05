import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const speakWelcomeMessage = () => {
      const voices = speechSynthesis.getVoices();
      const utterance = new SpeechSynthesisUtterance("Welcome to CCLMS!");
      
      if (voices.length > 0) {
        utterance.voice = voices[0]; // Use the first available voice
      }

      utterance.onend = () => {
        setIsVisible(false);
        onFinish();
      };

      speechSynthesis.speak(utterance);
    };

    // Ensure voices are loaded before speaking
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.onvoiceschanged = speakWelcomeMessage;
    } else {
      speakWelcomeMessage();
    }
  });

  if (!isVisible) return null;

  return (
    <div style={styles.container}>
      <h1>Welcome to Our Website</h1>
      <button onClick={() => {
  const utterance = new SpeechSynthesisUtterance("Hello, testing speech synthesis.");
  speechSynthesis.speak(utterance);
}}>
  Test Speech
</button>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    zIndex: 9999,
  },
};

export default SplashScreen;
