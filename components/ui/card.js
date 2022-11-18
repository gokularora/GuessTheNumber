import { StyleSheet, View, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 25,
    marginTop: deviceWidth ? 20 : 35,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
