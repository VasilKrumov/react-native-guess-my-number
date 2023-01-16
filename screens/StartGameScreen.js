import { TextInput, View, StyleSheet } from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'

export const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Comfirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4, // android property for box shadow
        shadowColor: '#000', // ios property for box shadow
        shadowOffset: { width: 0, height: 2 }, // ios property for box shadow
        shadowRadius: 6, // ios property for box shadow
        shadowOpacity: 0.25, // ios property for box shadow
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
