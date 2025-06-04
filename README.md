
# Microsoft Rewards Search Automation

A simple Edge browser extension that automates web searches using random, non-repeating sentences — helping users efficiently earn Microsoft Rewards points.

---

## ⚙️ Features

- 🔍 Automates Bing web searches with random queries
- ⏱️ Waits 5 seconds between each search (configurable)
- 🔁 Opens a new tab, searches, and then closes it automatically
- 🎯 Lets user choose how many searches to perform (1–50)
- 🟢 Start and 🔴 Stop buttons — always active for user control
- 💡 Designed to simulate realistic search activity for Microsoft Rewards

---

## 📁 Project Structure

```
MICROSOFT_REWARDS_SEARCH_AUTOMATION/
├── background.js       # Handles tab creation and search logic
├── icon.png            # Extension icon
├── manifest.json       # Extension metadata and permissions
├── popup.html          # Popup UI with Start/Stop and input
├── popup.js            # Popup logic and messaging to background
```

---

## 🚀 How to Use

1. Load the extension in Microsoft Edge:
   - Go to `edge://extensions`
   - Enable **Developer Mode**
   - Click **Load unpacked**
   - Select this folder

2. Click the extension icon to open the popup.

3. Enter the number of searches you want (max 50) and click **Start**.

4. Let it run. To stop early, click **Stop**.
5. if your using Chrome then use the below code (instead of the edge url) in background.js 
   const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

---

## 📌 Disclaimer

This extension is intended for educational and personal productivity use only. Use responsibly and within Microsoft Rewards program guidelines.

---

## 🛠️ Author

Created by **B M Yashwanth**
