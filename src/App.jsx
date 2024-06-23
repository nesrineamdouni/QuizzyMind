import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import QuizzyMind from "./components/QuizzyMind";
import bravo from "./assets/bravo.png"; // Importation de l'image

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Londres",
          correct: false,
        },
        {
          text: "Berlin",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Michel-Ange",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the longest river in the world?",
      answers: [
        {
          text: "Nil",
          correct: false,
        },
        {
          text: "Amazone",
          correct: true,
        },
        {
          text: "Mississippi",
          correct: false,
        },
        {
          text: "Yangtsé",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the largest planet in the solar system?",
      answers: [
        {
          text: "Terre",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturne",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Where is the Tower of Pisa?",
      answers: [
        {
          text: "Florence, Italie",
          correct: true,
        },
        {
          text: "Rome, Italie",
          correct: false,
        },
        {
          text: "Venise, Italie",
          correct: false,
        },
        {
          text: "Milan, Italie",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Arctic ocean",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who wrote 'Hamlet' ?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is Australia's national animal?",
      answers: [
        {
          text: "Kangourou",
          correct: true,
        },
        {
          text: "Koala",
          correct: false,
        },
        {
          text: "Émeu",
          correct: false,
        },
        {
          text: "Dingo",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the highest peak in the world?",
      answers: [
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Kilimandjaro",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
        {
          text: "Mount Blanc",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the official currency of Japan?",
      answers: [
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Yuan",
          correct: false,
        },
        {
          text: "Won",
          correct: false,
        },
        {
          text: "Livre sterling",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the largest lake in Africa?",
      answers: [
        {
          text: "Lake Victoria",
          correct: true,
        },
        {
          text: "Lake Tanganyika",
          correct: false,
        },
        {
          text: "Lake Malawi",
          correct: false,
        },
        {
          text: "Lake Nyasa",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who wrote 'The Little Prince' ?",
      answers: [
        {
          text: "Antoine de Saint-Exupéry",
          correct: true,
        },
        {
          text: "Albert Camus",
          correct: false,
        },
        {
          text: "Victor Hugo",
          correct: false,
        },
        {
          text: "Marcel Proust",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the largest country in the world?",
      answers: [
        {
          text: "Russie",
          correct: true,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Chine",
          correct: false,
        },
        {
          text: "UNITED STATES",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who discovered penicillin?",
      answers: [
        {
          text: "Alexander Fleming",
          correct: true,
        },
        {
          text: "Louis Pasteur",
          correct: false,
        },
        {
          text: "Marie Curie",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the longest river in North America?",
      answers: [
        {
          text: "Mississippi",
          correct: true,
        },
        {
          text: "Colorado",
          correct: false,
        },
        {
          text: "Yukon",
          correct: false,
        },
        {
          text: "Saint-Laurent",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 500" },
        { id: 2, amount: "$ 1000" },
        { id: 3, amount: "$ 1500" },
        { id: 4, amount: "$ 2000" },
        { id: 5, amount: "$ 2500" },
        { id: 6, amount: "$ 3000" },
        { id: 7, amount: "$ 3500" },
        { id: 8, amount: "$ 4000" },
        { id: 9, amount: "$ 4500" },
        { id: 10, amount: "$ 5000" },
        { id: 11, amount: "$ 5500" },
        { id: 12, amount: "$ 6000" },
        { id: 13, amount: "$ 6500" },
        { id: 14, amount: "$ 7000" },
        { id: 15, amount: "$ 7500" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <div className="endTextContainer">
                <img src={bravo} alt="bravo" />
                <h1 className="endText">You earned: {earned}</h1>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <QuizzyMind
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
