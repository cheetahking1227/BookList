import { BookType } from "../types";

export const getBooks = async (): Promise<BookType[]> => {
    try {
        const response = await fetch('https://de-coding-test.s3.amazonaws.com/books.json');
        if (!response.ok) throw new Error('Failed to fetch books');
        return response.json();
    } catch (error) {
        console.error('Error fetching book list:', error);
        return [];
    }
};
