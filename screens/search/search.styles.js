import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: SIZES.small,
        borderColor: COLORS.lightGreen,
        borderWidth: 1.5,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    input: {
        fontFamily:'regular',
        width:'100%',
        height:'100%',
        paddingHorizontal: 50
    },
    searchWrapper: {
        flex: 1,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchBtn: {
        width: 50,
        height:'100%',
        borderRadius: SIZES.medium-1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGreen
    },
    searchImage: {
        resizeMode: 'contain',
        width:'100%',
        height: SIZES.height/1.3,
        paddingHorizontal: 20
    },
    title: {
        marginHorizontal: 12,
        marginBottom: 10
    }
})

export default styles