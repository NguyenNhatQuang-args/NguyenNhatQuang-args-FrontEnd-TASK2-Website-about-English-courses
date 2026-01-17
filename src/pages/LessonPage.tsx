import WordBankExerciseComponent from '../components/WordBankExercise';

const LessonPage = () => {
  const data_test = {
    quesion: [{ id: 1, name: "you" }, { id: 2, name: "can" }, { id: 3, name: "i" }, { id: 4, name: "help" }],
    answer: "Can i help you"
  };

  const handleComplete = (isCorrect: boolean) => {
    alert(isCorrect ? "That's correct.!" : "Incorrect!");
  };

  return (
    <div className="container mx-auto">
       <WordBankExerciseComponent data={data_test} onComplete={handleComplete} />
    </div>
  );
};  