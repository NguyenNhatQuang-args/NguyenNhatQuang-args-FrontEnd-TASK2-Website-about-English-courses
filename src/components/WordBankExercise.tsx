import React, { useState, useEffect } from 'react';
import { type WordBankItem, type WordBankExercise } from '../api/types';

interface Props {
  data: WordBankExercise;
  onComplete: (isCorrect: boolean) => void;
}

const WordBankExerciseComponent: React.FC<Props> = ({ data, onComplete }) => {
  const [selectedWords, setSelectedWords] = useState<WordBankItem[]>([]);
  const [bankWords, setBankWords] = useState<WordBankItem[]>([]);

  // Logic 1: Shuffle (trộn) từ khi bắt đầu
  useEffect(() => {
    const shuffled = [...data.quesion].sort(() => Math.random() - 0.5);
    setBankWords(shuffled);
    setSelectedWords([]);
  }, [data]);

  // Logic 2: Click từ dưới Bank chuyển lên Answer
  const handleSelect = (word: WordBankItem) => {
    setSelectedWords([...selectedWords, word]);
    setBankWords(bankWords.filter(w => w.id !== word.id));
  };

  // Logic 3: Click từ Answer trả về Bank
  const handleRemove = (word: WordBankItem) => {
    setBankWords([...bankWords, word]);
    setSelectedWords(selectedWords.filter(w => w.id !== word.id));
  };

  // Logic 4: Kiểm tra kết quả
  const handleCheck = () => {
    const userString = selectedWords.map(w => w.name).join(' ').toLowerCase();
    const isCorrect = userString === data.answer.toLowerCase();
    onComplete(isCorrect);
  };

  return (
    <div className="word-bank-container p-4">
      {/* Vùng hiển thị câu trả lời (Answer Area) */}
      <div className="flex flex-wrap gap-2 min-h-[60px] border-b-2 border-gray-200 mb-8 p-2">
        {selectedWords.map((word) => (
          <button 
            key={word.id} 
            onClick={() => handleRemove(word)}
            className="px-4 py-2 bg-white border-2 border-gray-300 rounded-xl shadow-sm font-bold"
          >
            {word.name}
          </button>
        ))}
      </div>

      {/* Vùng chứa các từ để chọn (Bank Area) */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {bankWords.map((word) => (
          <button 
            key={word.id} 
            onClick={() => handleSelect(word)}
            className="px-4 py-2 bg-white border-2 border-gray-300 border-b-4 rounded-xl font-bold active:border-b-0 active:translate-y-1"
          >
            {word.name}
          </button>
        ))}
      </div>

      <button 
        onClick={handleCheck}
        disabled={selectedWords.length === 0}
        className="w-full py-4 bg-green-500 text-white rounded-2xl font-bold disabled:bg-gray-300"
      >
        KIỂM TRA
      </button>
    </div>
  );
};

export default WordBankExerciseComponent;