// rrd import
import { useParams } from "react-router-dom";

// custom hooks
import { useFetch } from "../hooks/useFetch";

// react hooks
import { useEffect } from "react";

// components
import { Test } from "../components";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/quizzes/?title=${title}`);

  useEffect(() => {
    document.title = "Quiz" + "" + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {quizzes && <Test questions={quizzes[0]} />}
    </section>
  );
}

export default Quiz;
