import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const QuizContext = createContext();
export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'Category 1', score: 0, total: 0 },
    { name: 'Category 2', score: 0, total: 0 },
    { name: 'Category 3', score: 0, total: 0 },
    { name: 'Category 4', score: 0, total: 0 },
  ]);

  const questions = [
    // Questions for category 1
    {
      category: 'Category 1',
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'London'],
      answer: 'Paris'
    },
    {
      category: 'Category 1',
      question: 'What is the largest city in the world by population?',
      options: ['Tokyo', 'Shanghai', 'São Paulo', 'Delhi'],
      answer: 'Tokyo'
    },
    // Questions for category 2
    {
      category: 'Category 2',
      question: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Makalu', 'Cho Oyu'],
      answer: 'Mount Everest'
    }
  ];

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    // update the score and total for the category
    const updatedCategories = [...categories];
    const currentQuestionData = questions[currentQuestion];
    const categoryIndex = updatedCategories.findIndex(category => category.name === currentQuestionData.category);
    const currentCategory = updatedCategories[categoryIndex];
    if (answer === currentQuestionData.answer) {
      currentCategory.score++;
    }
    currentCategory.total++;
    setCategories(updatedCategories);
    
    // go to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };


//   //GET-request with woningID (get alle recensies v/d woning)
//   const GETRecensies = useCallback(async (woningID) => {
//     try {
//       setError("");
//       setLoading(true);
//       const dataDB = await recensieAPI.GETRecensiesByWoning(woningID);
//       setRECENSIE_DATA(dataDB.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const POSTRecensie = useCallback(
//     async (recensieBody) => {
//       try {
//         setError("");
//         setLoading(true);
//         await recensieAPI.POSTRecensie(recensieBody);
//         //recensies opnieuw ophalen
//         await GETRecensies(recensieBody.woningID);
//       } catch (error) {
//         // setError(error.response.data.message);
//         setError(error.response.data.message);

//         toast.error("Je hebt al een recensie op deze woning geschreven", {
//           position: toast.POSITION.BOTTOM_RIGHT,
//           pauseOnHover: false,
//           pauseOnFocusLoss: false,
//           autoClose: 2000,
//         });
//       } finally {
        
//         setLoading(false);
//       }
//     },
//     [setError, GETRecensies]
//   );

  const values = useMemo(
    () => ({
      loading,
      currentQuestion,
      answers,
      handleAnswer,
      categories
    }),

    [loading, currentQuestion, answers, handleAnswer, categories]
  );

  return (
    <QuizContext.Provider value={values}>
      {children}
    </QuizContext.Provider>
  );
};