import { StyleSheet } from "react-native";

const InputStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: "80%",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default InputStyles;
