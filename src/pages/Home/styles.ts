import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
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