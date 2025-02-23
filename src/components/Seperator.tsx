import React from 'react'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    seperator: {
        marginVertical: 3,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})

export const Seperator = () => <View style={styles.seperator} />;

