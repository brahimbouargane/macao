import { useEffect, useState } from 'react';

const BotpressChat = () => {
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    // Function to initialize Botpress
    const initBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          // Your chat configuration
          composerPlaceholder: 'Bienvenue chez Pastor Macao ! Comment pouvons-nous vous aider aujourd’hui ?🍫✨',

          botConversationDescription: 'Bienvenue chez Pastor Macao ! Comment pouvons-nous vous aider aujourd’hui ?🍫✨',
          botId: 'BA2OKE2M',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: '9272b8b5-5c7c-4fed-abb4-df3fbd421f0d',
          botName: 'Pastor Macao',

          // Webhook for custom actions (optional)
          webhookUrl: 'https://www.pastor-macao.com/Index/index/FR',

          // Styling
          theme: 'light',
          themePath: 'default',
          stylesheet: 'https://files.bpcontent.cloud/2025/02/16/21/20250216211050-G471OZC2.js',

          // Layout settings
          containerWidth: '100%',
          layoutWidth: '100%',
          hideWidget: false,
          disableAnimations: false,
          showPoweredBy: false,
          enableTranscriptDownload: false,

          // Custom styling
          className: 'webchat-iframe',
          cssCommon: {
            // Custom CSS variables
            '--font-family': 'Inter, sans-serif',
            '--main-bg-color': '#ffffff',
            '--chat-bg-color': '#f5f5f5',
            '--header-bg-color': '#ffffff',
            '--header-color': '#000000',
            '--content-color': '#000000',
            '--primary-color': '#f53b3b',
            '--secondary-color': '#f53b3b',
            '--hover-bg-color': '#eff6ff',
            '--composer-bg-color': '#ffffff',
            '--composer-border-color': '#e5e7eb',
            '--composer-text-color': '#000000',
            '--bot-message-bg-color': '#e5e7eb',
            '--bot-message-color': '#000000',
            '--user-message-bg-color': '#2563eb',
            '--user-message-color': '#ffffff'
          },

          // Callbacks
          onReady: () => {
            console.log('Chat widget is ready');
            setChatVisible(true);
          },
          onClose: () => {
            console.log('Chat widget closed');
          },
          onOpen: () => {
            console.log('Chat widget opened');
          },
          onMessageSent: (message) => {
            console.log('Message sent:', message);
          },
          onMessageReceived: (message) => {
            console.log('Message received:', message);
          }
        });
      }
    };

    // Load the inject script
    const loadInjectScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
      script.async = true;
      script.onload = () => {
        // Load the config script after inject.js is loaded
        const configScript = document.createElement('script');
        configScript.src = 'https://files.bpcontent.cloud/2025/02/16/21/20250216211050-G471OZC2.js';
        configScript.async = true;
        configScript.onload = () => {
          // Initialize Botpress after both scripts are loaded
          initBotpress();
        };
        document.body.appendChild(configScript);
      };
      document.body.appendChild(script);

      // Cleanup function
      return () => {
        // Remove scripts and cleanup
        const scripts = document.querySelectorAll('script[src*="botpress"]');
        scripts.forEach((script) => document.body.removeChild(script));

        // Cleanup chat widget
        if (window.botpressWebChat) {
          window.botpressWebChat.destroy();
        }
      };
    };

    // Start loading process
    const cleanup = loadInjectScript();

    // Cleanup on component unmount
    return cleanup;
  }, []);

  // Custom methods to control the chat widget
  const methods = {
    openChat: () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      }
    },
    closeChat: () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'hide' });
      }
    },
    toggleChat: () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'toggle' });
      }
    },
    sendMessage: (message) => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendMessage(message);
      }
    }
  };

  return null; // Component doesn't render any visible elements
};

export default BotpressChat;
