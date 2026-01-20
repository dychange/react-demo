import type { FC } from "react";
import styles from "../../assets/styles/QuestionCard.module.scss";

interface Props {
  id: number;
  title: string;
  isPublished: boolean;
  handlePublish: (id: number) => void;
  deleteQuestion: (id: number) => void;
}

const QuestionCard: FC<Props> = (props: Props) => {
  const { id, title, isPublished, handlePublish, deleteQuestion } = props;

  function PublishTag({ status }: { status: boolean }) {
    return (
      <span className={status ? styles["published"] : styles["unpublished"]}>
        {status ? "已发布" : "未发布"}
      </span>
    );
  }

  return (
    <>
      <div key={id} className={styles["question-item"]}>
        <div>{title}</div>
        <PublishTag status={isPublished} />
        <button
          onClick={() => {
            handlePublish(id);
          }}>
          {isPublished ? "取消发布" : "发布"}
        </button>
        <button onClick={() => deleteQuestion(id)}>删除</button>
      </div>
    </>
  );
};

export default QuestionCard;
