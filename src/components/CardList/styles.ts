import { StyleSheet } from "react-native";

export const HEIGHT = 68;
export const MARGIN_BOTTOM = 12;

export const styles = StyleSheet.create({
    container: {

        width: '100%',
        height:HEIGHT,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 16,
        borderRadius: MARGIN_BOTTOM,
        backgroundColor: '#262626',

    },
    title:{

        color: 'white',
        fontSize: 20,
        
    }
})