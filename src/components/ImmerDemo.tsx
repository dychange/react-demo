import { type FC, useRef, useState } from "react";
import { produce } from "immer";

const ImmerDemo: FC = () => {
  const [user, setUser] = useState({ name: "张三", age: 18 });

  const changeAge = () => {
    setUser(
      produce(d => {
        d.age++;
      }),
    );
  };

  const ref = useRef(0);

  const updateRef = () => {
    console.log(ref);
    ref.current = 1;
    console.log(ref);
  };

  return (
    <>
      <div>
        <span>{user.name}</span>
        <span>{user.age}</span>
        <button onClick={changeAge}>修改年龄</button>
        <button onClick={updateRef}>修改useRef</button>
      </div>
    </>
  );
};

export default ImmerDemo;
