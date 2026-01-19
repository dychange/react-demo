import { useState } from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([
    { id: 1, title: "问卷1", isPublished: true },
    { id: 2, title: "问卷2", isPublished: false },
    { id: 3, title: "问卷3", isPublished: true },
    { id: 4, title: "问卷4", isPublished: false },
  ]);

  function PublishTag({ status }: { status: boolean }) {
    return (
      <span className={status ? "published" : "unpublished"}>
        {status ? "已发布" : "未发布"}
      </span>
    );
  }

  const handlePublish = (id: number) => {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question =>
        question.id === id
          ? { ...question, isPublished: !question.isPublished }
          : question,
      );
    });
  };

  return (
    <>
      {questions.map(question => {
        const { id, title, isPublished } = question;
        return (
          <div key={id} className="question-item">
            <div>{title}</div>
            <PublishTag status={isPublished} />
            <button
              onClick={() => {
                handlePublish(id);
              }}>
              {isPublished ? "取消发布" : "发布"}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default QuestionList;
