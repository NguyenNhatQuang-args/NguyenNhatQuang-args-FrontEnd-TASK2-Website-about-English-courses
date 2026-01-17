export interface WordBankItem {
  id: number;
  name: string;
}

export interface WordBankExercise {
  quesion: WordBankItem[]; // Giữ nguyên typo từ yêu cầu để khớp API
  answer: string;
}