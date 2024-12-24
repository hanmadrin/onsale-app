import React from 'react'; // Fixed quotes
import { StyleSheet, TextInput, View } from 'react-native'; // Fixed quotes
import { theme } from '../constants/theme'; // Fixed quotes
import { hp } from '../helpers/common'; // Fixed quotes

const Input = (props) => { // Corrected the arrow function
    return (
        <View style={[styles.container, props.containerStyles && props.containerStyles]}>
            {props.icon && props.icon}

            <TextInput
                style={{ flex: 1 }}
                placeholderTextColor={theme.colors.textLight} // Corrected the color usage
                ref={props.inputRef && props.inputRef} // Corrected ref usage
                {...props} // Spread props for TextInput
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Fixed quotes
        height: hp(7.2), // Responsive height
        alignItems: 'center', // Corrected `alignItems` spelling
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text, // Fixed trailing pipe
        borderRadius: theme.radius.xxl, // Fixed trailing pipe
        borderCurve: 'continuous', // Fixed quotes
        paddingHorizontal: 18,
        gap: 12, // Spacing between elements in the row
    },
});