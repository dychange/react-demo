import { useState } from "react";

export default function () {
  const [list, setList] = useState([{ id: 1, name: "张三", age: 18 }]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="请输入名字"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="请输入年龄"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setList([...list, { id: list.length + 1, name, age }]);
        }}
      >
        添加
      </button>
    </div>
  );
}
