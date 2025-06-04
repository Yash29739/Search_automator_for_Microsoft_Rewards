const WORDS = [
    "cat", "sunshine", "algorithm", "coffee", "quantum", "AI",
    "mystery", "travel", "paradox", "galaxy", "banana", "theory",
    "blue", "keyboard", "dream", "random", "unicorn", "data", "edge"
  ];
  
  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  function getRandomSentence(existingSentences) {
    while (true) {
      const length = 3 + Math.floor(Math.random() * 5);
      const sentence = Array.from({ length }, () =>
        WORDS[Math.floor(Math.random() * WORDS.length)]
      ).join(" ");
      if (!existingSentences.has(sentence)) {
        existingSentences.add(sentence);
        return sentence;
      }
    }
  }
  
  async function tabExists(tabId) {
    try {
      await chrome.tabs.get(tabId);
      return true;
    } catch {
      return false;
    }
  }
  
  // Control flag to stop the loop
  let stopFlag = false;
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startSearch") {
      stopFlag = false;
      const count = message.count;
      const seenSentences = new Set();
  
      (async () => {
        let previousTabId = null;
  
        for (let i = 0; i < count; i++) {
          if (stopFlag) {
            // Stop requested, break out early
            break;
          }
  
          const query = getRandomSentence(seenSentences);
          const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
  
          const tab = await chrome.tabs.create({ url });
          await delay(5000);
  
          if (previousTabId && await tabExists(previousTabId)) {
            await chrome.tabs.remove(previousTabId);
          }
  
          previousTabId = tab.id;
        }
  
        // Close last tab if not stopped early
        if (!stopFlag && previousTabId && await tabExists(previousTabId)) {
          await delay(5000);
          await chrome.tabs.remove(previousTabId);
        }
      })();
  
    } else if (message.action === "stopSearch") {
      stopFlag = true;
    }
  });
  