import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        position: "relative",
    },
    fab: {
        margin: "auto",
        position: "absolute",
        bottom: 40,
        right: 20,
        backgroundColor: "lime",
    },
    heading: {
        color: "white",
        marginTop: 20,
        marginHorizontal: 10,
        fontWeight: "800"
    },
    divider: {
        marginVertical: 10
    },
    description: {
        color: "slate",
        marginHorizontal: 10
    },
    author: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontStyle: "italic"
    },
    chip: {
        backgroundColor: "lime",
    }
})