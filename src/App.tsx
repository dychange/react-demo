import "./App.css";
// import List from "./components/List";
import QuestionList from "./components/QuestionComp/QuestionList";
// import ImmerDemo from "./components/ImmerDemo";
// import UseMemo from "./components/UseMemo";
// import usePageTitle from "./hooks/usePageTitle";
import useMouse from "./hooks/useMouse";
import { useTitle } from "ahooks";

function App() {
  useTitle("首页1");

  const { x, y } = useMouse();
  return (
    <>
      <div>
        鼠标位置：{x},{y}
      </div>
      <QuestionList />
      {/* <ImmerDemo /> */}
      {/* <UseMemo /> */}
      {/* <List /> */}
    </>
  );
}

export default App;
