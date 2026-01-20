import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

function QuestionList() {
  useEffect(() => {
    console.log("ajax请求");
    return () => {
      console.log("销毁");
    };
  }, []);

  const [questions, setQuestions] = useState([
    { id: 1, title: "问卷1", isPublished: true },
    { id: 2, title: "问卷2", isPublished: false },
    { id: 3, title: "问卷3", isPublished: true },
    { id: 4, title: "问卷4", isPublished: false },
  ]);

  useEffect(() => {
    console.log("questions change");
  }, [questions]);

  const handlePublish = (id: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === id
          ? { ...question, isPublished: !question.isPublished }
          : question,
      ),
    );
  };

  const addQuestion = () => {
    const id = questions.length + 1;
    setQuestions([
      ...questions,
      { id, title: `问卷${id}`, isPublished: false },
    ]);
  };

  const deleteQuestion = (id: number) => {
    setQuestions(prevQuestions => prevQuestions.filter(i => i.id !== id));
  };

  return (
    <>
      <button onClick={addQuestion}>添加问卷</button>
      {questions.map(question => {
        const { id, title, isPublished } = question;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            handlePublish={handlePublish}
            deleteQuestion={deleteQuestion}
          />
        );
      })}
    </>
  );
}

export default QuestionList;
