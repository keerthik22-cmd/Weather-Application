# 🌦️ Weather Forecast Application

A simple **Weather Forecast Application** built using **Node.js**, **Express**, and **Fetch API**.  
This app fetches **real-time weather data** from **multiple APIs** using **Promises** and **async/await**, with proper **error handling** and **loading states** for a smooth user experience.

---

## 🚀 Features

- 🌍 Fetches weather data from **multiple APIs** (I used OpenWeatherMap)
- ⚙️ Uses **Promises** and **async/await** for clean asynchronous handling
- ⚡ Implements **loading states** while fetching data
- 🧩 Includes **error handling** for invalid city names or API failures
- 💾 Uses **dotenv** to securely store API keys
- 🖥️ Simple and responsive front-end UI

---

## 🧠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, JavaScript (Fetch API)  
- **Environment Variables:** dotenv  
- **API Source:** OpenWeatherMap / WeatherAPI  

---

## 📁 Project Structure

-WeatherApplication/
│
├── server.js # Node.js server file
├── .env # API keys and environment variables
├── package.json # Project dependencies
├── public/
│ ├── index.html # Frontend HTML file
│ ├── style.css # Styling
│ └── script.js # Fetch and UI logic
└── README.md # Documentation file