import {
  useMemo,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";

const UseMemo: FC = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  const updateNum = (setMethod: Dispatch<SetStateAction<number>>) => {
    setMethod(p => p + 1);
  };

  return (
    <div>
      <div>sum:{sum}</div>
      <div>
        <span>num1:{num1}</span>
        <button onClick={() => updateNum(setNum1)}>add</button>
      </div>
      <div>
        <span>num2:{num2}</span>
        <button onClick={() => updateNum(setNum2)}>add</button>
      </div>
    </div>
  );
};

export default UseMemo;
