import ChatBot, { getDefaultStyles } from 'react-chatbotify'
import React from 'react';
import SmallLogoNew from '../Assets/SmallLogoNew.png';

const HKChatbot = () => {

  const defaultStyles = getDefaultStyles();
  const [styles, setStyles] = React.useState({...defaultStyles});

  const settings = {
    general: {
      embedded: false,
      primaryColor: "#ffffff",
      secondaryColor: "#ffffff",
    },
    chatHistory: {
			storageKey: "example_single_theme"
		},
    advance: {
      useAdvanceStyles: true,
    },
    chatButton: {
      show: true,
      icon: SmallLogoNew,
      styles: {
        ...styles.chatButton,
        background: "#ffffff",
        color: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        border: "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }
    },
    tooltip: {
      mode: "NEVER"
    },
    header: {
      title: (
        <div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
          () => window.open("https://github.com/tjtanjin/")
        }>
          Harmony Kloud Bot
        </div>
      ),
    }
    }


  // themes available for browsing at: https://gallery.react-chatbotify.com
  const themes = [
    // {id: "minimal_midnight", version: "0.1.0"},
    // {id: "simple_green", version: "0.1.0"},
    // {id: "simple_red", version: "0.1.0"},
    {id: "tranquil_teal", version: "0.1.0"},
    // {id: "terminal", version: "0.1.0"},
  ]

  return (
    <ChatBot themes={themes} settings={settings}/>
  );
};

export default HKChatbot;