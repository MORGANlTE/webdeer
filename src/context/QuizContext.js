import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const QuizContext = createContext();
export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {

  const BASE_URL = 'https://webdeer-backend.onrender.com/api';

  const [ended, setEnded] = useState(false);
  const [stap, setStap] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [niveau, setNiveau] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'Operationele internet vaardigheid', score: 0, total: 0, urls:["https://www.seniorweb.nl/onderwerp/internetbrowsers"] },
    { name: 'Formele internet vaardigheid', score: 0, total: 0, urls:["https://www.mediawijsheid.nl/veelgestelde-vraag/wat-is-digitaal-burgerschap/"] },
    { name: 'Informatie internet vaardigheid', score: 0, total: 0, urls:["https://www.mediawijsheid.nl/nepnieuws/", "https://www.seniorweb.nl/onderwerp/zoeken-op-internet"]},
    { name: 'Strategische internet vaardigheid', score: 0, total: 0, urls:["https://auxipress.be/nl/uw-online-reputatie-beheren-en-beschermen/"] },
    { name: 'Veiligheid internet vaardigheid', score: 0, total: 0, urls:["https://veiliginternetten.nl/", "https://www.dnsbelgium.be/nl/slim-online/tips-veiligheid-internet"] },
  ]);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/questions`);
      const json = await response.json();
      setQuestions(json);
      setLoading(false);
    };
    fetchData();
  }, []);
  // const questions = [
  //   // Questions for category 1
  //   {
  //     is_category_description: true,
  //     category: 'Category 1',
  //     question: 'This category tests your knowledge of geography.'
  //   },
  //   {
  //     category: 'Category 1',
  //     question: 'What is the capital of France?',
  //     options: [
  //       {
  //         text: 'Paris',
  //       },
  //       {
  //         text: 'Berlin',
  //         imgUrl: 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg'
  //       },
  //       {
  //         text: 'Madrid',
  //         imgUrl: 'https://example.com/madrid.jpg'
  //       },
  //       {
  //         text: 'London',
  //         imgUrl: 'https://example.com/london.jpg'
  //       }
  //     ],
  //     answer: 'Paris',
  //     is_multiple_choice: true
  //   },
  //   {
  //     category: 'Category 1',
  //     question: 'AAA?',
  //     options: [
  //       {
  //         text: 'Tokyo',
  //         imgUrl: 'https://example.com/paris.jpg'
  //       },
  //       {
  //         text: 'Berlin',
  //         imgUrl: 'https://example.com/berlin.jpg'
  //       },
  //       {
  //         text: 'Madrid',
  //         imgUrl: 'https://example.com/madrid.jpg'
  //       },
  //       {
  //         text: 'London',
  //         imgUrl: 'https://example.com/london.jpg'
  //       }
  //     ],
  //     answer: 'Tokyo',
  //     is_multiple_choice: true
  //   },
  //   // Questions for category 2
  //   {
  //     isCategoryDescription: true,
  //     category: 'Category 2',
  //     description: 'This category tests your knowledge of mountains.'
  //   },
  //   {
  //     category: 'Category 2',
  //     question: 'What is the highest mountain in the world?',
  //     options: [
  //       {
  //         text: 'Mount Everest',
  //         imgUrl: 'https://example.com/paris.jpg'
  //       },
  //       {
  //         text: 'Berlin',
  //         imgUrl: 'https://example.com/berlin.jpg'
  //       },
  //       {
  //         text: 'Madrid',
  //         imgUrl: 'https://example.com/madrid.jpg'
  //       },
  //       {
  //         text: 'London',
  //         imgUrl: 'https://example.com/london.jpg'
  //       }
  //     ],
  //     is_multiple_choice: true
  //   }
  // ];

  const handleAnswer = useCallback((answer) => {
    setAnswers([...answers, answer])

    categories[currentCategory].total += 1
    if(answer.correct)
    categories[currentCategory].score += 1

    // // update the score and total for the category
    // const updatedCategories = [...categories];
    // const currentQuestionData = questions[currentQuestion];
    // const categoryIndex = updatedCategories.findIndex(category => category.name === currentQuestionData.category);
    // const currentCategory = updatedCategories[categoryIndex];
    // if (answer === currentQuestionData.answer) {
    //   currentCategory.score++;
    // }
    // currentCategory.total++;
    // setCategories(updatedCategories);
    
    nextStap();
  }, [answers, stap, categories, currentCategory, answers]);

  const nextStap = useCallback(() => {
    if(ended)
      return
    if (stap >= 2 && ended === false) {
      setCurrentQuestion(currentQuestion + 1);
      console.log(currentCategory)
      console.log(currentQuestion)

      if(currentQuestion >= 5)
      {
        console.log("hi")
        if(currentCategory >=5-1)
        {
          setEnded(true)
          //hier data versturen
          const uploadData = async () => {
            
            let level_estimate = niveau+1
            let level = 0;

            categories.forEach((option) => {
              if (option.score >= option.total / 2) {
                level++;
              }
            });
            let score = categories.reduce((total, option) => total + option.score, 0)
            let total_score = categories.reduce((total, option) => total + option.total, 0)

            const data = {
              level: level,
              level_estimate: level_estimate,
              score:score,
              total_score: total_score
            }


            const response = await fetch(`${BASE_URL}/results`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

          };
          uploadData();
        }
        else{
          setCurrentCategory(currentCategory + 1);
          setCurrentQuestion(0);
        }
      }
    }
    setStap(stap + 1);
  }, [currentQuestion, stap, questions, currentCategory, ended, categories, niveau]);


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
      questions,
      currentCategory,
      ended
    }),

    [loading, currentQuestion, answers, handleAnswer, categories, stap, nextStap, setNiveau, niveau, questions, currentCategory, ended]
  );

  return (
    <QuizContext.Provider value={values}>
      {children}
    </QuizContext.Provider>
  );
};