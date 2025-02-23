import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Seperator } from './Seperator';
import { BookType } from '../types';

export const BookItem = ({ item }: { item: BookType }) => {
    return (
        <View>
            <View style={styles.bookItem}>
                <Image source={{ uri: item.imageURL }} style={styles.bookImage} />
                <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
            <Seperator />
        </View>
    );
}

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: 'row',
        gap: 10,
    },
    bookImage: {
        width: 60,
        height: 60,
        borderRadius: 3
    },
    bookTitle: {
        flex: 1,
        flexShrink: 1,
        backgroundColor: '#ddd',
        padding: 6,
        borderRadius: 3,
    },
})