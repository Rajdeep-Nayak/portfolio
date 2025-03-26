import React, { useState } from "react";

const Portfolio = () => {
  const funFacts = [
    "🧩 I can solve a Rubik's Cube in under a minute.",
    "✍️ Watching J.A.R.V.I.S. in Avengers sparked my passion for AI!",
    "🐞 Once, I debugged a bug in my code at 3 AM and felt like a superhero. 🦸‍♂️",
    "🏏 I enjoy playing cricket and once dreamed of becoming a cricketer!",
    "💡 If not coding, you'd probably find me exploring new places or brainstorming startup ideas!",
  ];

  const [randomFact, setRandomFact] = useState("");

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setRandomFact(funFacts[randomIndex]);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold">Rajdeep Nayak</h1>
      <p className="text-lg mt-2">
        Transforming raw data into powerful insights with AI and Machine
        Learning.
      </p>

      {/* Education Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">🚀 Education</h2>
        <p>
          <b>B-Tech in Metallurgical Engineering</b>, IIT (BHU) Varanasi
        </p>
        <p>CGPA: 8.02</p>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">🛠 Skills</h2>
        <ul className="list-disc ml-5">
          <li>Python, C++, SQL</li>
          <li>Machine Learning & AI</li>
          <li>Deep Learning (U-Net, Semantic Segmentation)</li>
          <li>Data Science, DevOps</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">💡 Projects</h2>

        {/* Project 1: Self-Driving Car Segmentation */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            🚗 Self-Driving Car Segmentation
          </h3>
          <p>
            🛠 <b>Skills Used:</b> Deep Learning, U-Net, TensorFlow
          </p>
          <p>
            🏆 <b>Results:</b> IoU Score - 0.89, Pixel Accuracy - 94%
          </p>
          <a
            href="https://github.com/Rajdeep-Nayak/Semantic-Segmentation-U-Net"
            target="_blank"
            className="text-blue-600"
          >
            🔗 GitHub Repository
          </a>
        </div>

        {/* Project 2: Credit Card Fraud Detection */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            💳 Credit Card Fraud Detection
          </h3>
          <p>
            🛠 <b>Skills Used:</b> KNN, Logistic Regression, SVM, Data
            Preprocessing
          </p>
          <p>
            🏆 <b>Results:</b> Precision: 0.9998, Recall: 0.9793, F1-score:
            0.9894
          </p>
          <a
            href="https://github.com/Rajdeep-Nayak/CreditCard-Fraud-detection"
            target="_blank"
            className="text-blue-600"
          >
            🔗 GitHub Repository
          </a>
        </div>

        {/* Project 3: SMS Spam Detection */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">📩 SMS Spam Detection</h3>
          <p>
            🛠 <b>Skills Used:</b> Naive Bayes, Logistic Regression, NLP
          </p>
          <p>
            🏆 <b>Results:</b> Achieved 98% accuracy
          </p>
          <a
            href="https://github.com/Rajdeep-Nayak/sms-spam-detection"
            target="_blank"
            className="text-blue-600"
          >
            🔗 GitHub Repository
          </a>
        </div>
      </section>

      {/* Honors & Achievements */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">🏆 Honors & Achievements</h2>
        <ul className="list-disc ml-5">
          <li>🥇 Secured All India Rank 9995 in JEE Advanced 2022</li>
          <li>
            🏆 Won 1st place in 27th Regional Kho-Kho Meet (Navodaya Vidyalaya
            Samiti)
          </li>
          <li>
            🏏 Best Bowler Award in Intrafresher Tournament 2023 at IIT BHU
          </li>
          <li>
            📜 Completed <b>Summer Analytics 2024</b> by Consulting & Analytics
            Club, IIT Guwahati
          </li>
        </ul>
      </section>

      {/* Fun Facts Section with Surprise Me Button */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">🎉 Fun Facts</h2>

        {/* Surprise Button */}
        <button
          onClick={showRandomFact}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          🎲 Surprise Me!
        </button>

        {/* Display Random Fun Fact */}
        {randomFact && (
          <p className="mt-4 text-lg font-semibold">{randomFact}</p>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
