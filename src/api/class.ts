import { type WordBankExercise } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const lessonApi = {
  /** Lấy chi tiết bài tập theo Lesson ID */
  getExercise: async (id: string): Promise<WordBankExercise> => {
    try {
      const response = await fetch(`${API_URL}/lessons/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      // Trả về dữ liệu mock nếu API lỗi để bạn vẫn có thể test logic
      return {
        quesion: [{ id: 1, name: "you" }, { id: 2, name: "can" }, { id: 3, name: "i" }, { id: 4, name: "help" }],
        answer: "Can i help you"
      };
    }
  }
};