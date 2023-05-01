import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const QuizContext = createContext();
export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [stap, setStap] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [niveau, setNiveau] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'Category 1', score: 0, total: 0, info: "test" },
    { name: 'Category 2', score: 0, total: 0, info: "text" },
    { name: 'Category 3', score: 0, total: 0, info: "test2" },
    { name: 'Category 4', score: 0, total: 0, info: "test2" },
  ]);


  const questions = [
    // Questions for category 1
    {
      isCategoryDescription: true,
      category: 'Category 1',
      description: 'This category tests your knowledge of geography.'
    },
    {
      category: 'Category 1',
      question: 'What is the capital of France?',
      options: [
        {
          text: 'Paris',
        },
        {
          text: 'Berlin',
          imgUrl: 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg'
        },
        {
          text: 'Madrid',
          imgUrl: 'https://example.com/madrid.jpg'
        },
        {
          text: 'London',
          imgUrl: 'https://example.com/london.jpg'
        }
      ],
      answer: 'Paris',
      isMultipleChoice: true
    },
    {
      category: 'Category 1',
      question: 'AAA?',
      options: [
        {
          text: 'Tokyo',
          imgUrl: 'https://example.com/paris.jpg'
        },
        {
          text: 'Berlin',
          imgUrl: 'https://example.com/berlin.jpg'
        },
        {
          text: 'Madrid',
          imgUrl: 'https://example.com/madrid.jpg'
        },
        {
          text: 'London',
          imgUrl: 'https://example.com/london.jpg'
        }
      ],
      answer: 'Tokyo',
      isMultipleChoice: true
    },
    // Questions for category 2
    {
      isCategoryDescription: true,
      category: 'Category 2',
      description: 'This category tests your knowledge of mountains.'
    },
    {
      category: 'Category 2',
      question: 'What is the highest mountain in the world?',
      options: [
        {
          text: 'Mount Everest',
          imgUrl: 'https://example.com/paris.jpg'
        },
        {
          text: 'Berlin',
          imgUrl: 'https://example.com/berlin.jpg'
        },
        {
          text: 'Madrid',
          imgUrl: 'https://example.com/madrid.jpg'
        },
        {
          text: 'London',
          imgUrl: 'https://example.com/london.jpg'
        }
      ],
      answer: 'Mount Everest',
      isMultipleChoice: false
    }
  ];

  const handleAnswer = useCallback((answer) => {
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
    
    nextStap();
  }, [answers, stap]);

  const nextStap = useCallback(() => {
    if (stap >= 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setStap(stap + 1);
  }, [currentQuestion, stap]);


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
      categories,
      stap,
      nextStap,
      setNiveau,
      niveau,
      questions
    }),

    [loading, currentQuestion, answers, handleAnswer, categories, stap, nextStap, setNiveau, niveau, questions]
  );

  return (
    <QuizContext.Provider value={values}>
      {children}
    </QuizContext.Provider>
  );
};