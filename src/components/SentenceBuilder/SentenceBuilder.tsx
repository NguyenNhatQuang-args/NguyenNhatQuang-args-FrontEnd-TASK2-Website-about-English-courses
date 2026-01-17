import { useState } from 'react';
import './SentenceBuilder.css';

interface Word {
  id: number;
  text: string;
}

const initialWords: Word[] = [
  { id: 1, text: 'I' },
  { id: 2, text: 'am' },
  { id: 3, text: 'learning' },
  { id: 4, text: 'English' },
  { id: 5, text: 'banana' },
];

export default function SentenceBuilder() {
  // Hàng dưới
  const [availableWords, setAvailableWords] = useState<Word[]>(initialWords);
  // Hàng trên
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);

  const handleSelectWord = (word: Word) => {
    setSelectedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter(w => w.id !== word.id));
  };

  const handleRemoveWord = (word: Word) => {
    setSelectedWords(prev => prev.filter(w => w.id !== word.id));
    setAvailableWords(prev => [...prev, word]);
  };

  return (
    <div className="sentence-builder">
      <h2>Sentence Builder</h2>

      {/* Hàng trên */}
      <div className="answer-row">
        {selectedWords.length === 0 && (
          <span className="placeholder">Click từ bên dưới để tạo câu</span>
        )}

        {selectedWords.map(word => (
          <button
            key={word.id}
            className="word-btn"
            onClick={() => handleRemoveWord(word)}
          >
            {word.text}
          </button>
        ))}
      </div>

      {/* Hàng dưới */}
      <div className="word-bank">
        {availableWords.map(word => (
          <button
            key={word.id}
            className="word-btn"
            onClick={() => handleSelectWord(word)}
          >
            {word.text}
          </button>
        ))}
      </div>
    </div>
  );
}
