import { View, Text, Pressable, StyleSheet } from 'react-native'

export const PrimaryButton = ({ children }) => {
    function pressHandler() {
        console.log('pressed')
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{ color: '#640233' }}
                style={({ pressed }) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // android property for box shadow
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
})
