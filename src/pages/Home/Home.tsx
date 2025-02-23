import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Image, Text } from 'react-native';
import { styles } from './styles';
import { BookItem } from '../../components/BookItem';
import { getBooks } from '../../actions';
import { BookType } from '../../types';

export const Home = () => {
	const [books, setBooks] = useState<BookType[] | undefined>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const data = await getBooks();
			setBooks(data);
		}
		fetchBooks();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={books}
				renderItem={BookItem}
				keyExtractor={(_, index) => index.toString()}
			/>
		</SafeAreaView>
	)
}
