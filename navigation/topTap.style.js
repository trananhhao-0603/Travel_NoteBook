import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const styles = StyleSheet.create({
    profile: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 110,
        alignItems: "center",
    },
    image:{
        resizeMode:'cover',
        width: 100,
        height: 100,
        borderColor: COLORS.lightWhite,
        borderWidth: 2,
        borderRadius: 90
    },
    name:{
        backgroundColor: COLORS.lightGrey,
        padding: 2,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 12
    }
})

export default styles