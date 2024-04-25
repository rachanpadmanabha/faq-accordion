import "./App.css";
import { ReactComponent as StarIcon } from "./assets/images/icon-star.svg";
import { ReactComponent as MinusIcon } from "./assets/images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "./assets/images/icon-plus.svg";
import { useState } from "react";


function App() {
  const [data, setData] = useState(_ => [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `Frontend Mentor
          offers realistic coding challenges to help developers improve their
          frontend coding skills with projects in HTML, CSS, and JavaScript.
    It's suitable for all levels and ideal for portfolio building.`,
      isOpened: true,
    },
    {
      question: " Is Frontend Mentor free?",
      answer: `Yes, Frontend Mentor offers both free and
          premium coding challenges, with the free option providing access to a
          range of projects suitable for all skill levels.`,
      isOpened: false,
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an
  excellent way to showcase your skills to potential employers!`,
      isOpened: false,
    },
    {
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer: `The best place to get help is inside Frontend Mentor's Discord community.
  There's a help channel where you can ask questions and get answers from other
  developers.`,
      isOpened: false,
    },
  ])

  function handleClick(index) {
    console.log(data, index)
    const newData = [...data]
    newData[index] = {
      ...newData[index],
      isOpened: !newData[index].isOpened,
    };
    setData(newData)
  }
  return (
    <>
      <div className="App" />
      <div className="color-layer" />
      <div className="faq-container">
        <div className="header">
          <StarIcon />
          <div className="heading">FAQs</div>
        </div>
        {data.map((elem, index) =>
        (
          <div className={`faq-block ${elem.isOpened ? "opened" : ""}`} key={index}>
            <div className="question-block" onClick={() => handleClick(index)}>
              <div className="question">{elem.question}</div>
              {elem.isOpened ? <MinusIcon /> : <PlusIcon />}
            </div>
            {elem.isOpened && <p className="answer">{elem.answer}</p>}
          </div>
        )
        )}

      </div>
    </>
  );
}

export default App;

