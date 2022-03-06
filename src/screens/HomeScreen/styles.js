import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    wrapperLogoTripPlanner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBackground: { 
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16,
    },
    pin: {
        marginTop: 16,
        marginBottom: 16,
    },
    arrow: {
        marginTop: 16,
        marginBottom: 16,
    },
    buttonEmptyStateBackground: { 
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16,
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center', 
        fontSize: 18,
        color: 'black',
    },
    buttonEmptyStateText: {
        textAlign: 'center', 
        fontSize: 18,
        color: 'black',
        width: 220
    }
})
