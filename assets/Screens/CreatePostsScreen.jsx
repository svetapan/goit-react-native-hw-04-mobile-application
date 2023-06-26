import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

const CreatePostsScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const [isImageAdd, setIsImageAdd] = useState(false);
  const [isTitleEntered, setIsTitleEntered] = useState(false);
  const [isLocationEntered, setIsLocationEntered] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(image !== "" && isTitleEntered && isLocationEntered);
  }, [image, isTitleEntered, isLocationEntered]);

  const pablishPost = () => {
    if (isFormValid) {
      setImage(image);
      setTitle(title);
      setLocation(location);

      navigation.navigate("Home");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonReturn}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.iconReturn}
              source={require("../images/arrow-return.png")}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleContainerText}>Створити публікацію</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.publicationContainer}>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.cameraButton}
                // onPress={addImage}
              >
                <Image
                  style={styles.cameraImage}
                  source={require("../images/camera.png")}
                />
              </TouchableOpacity>
              {/* <Image  style={styles.image}/> */}
            </View>

            <Text style={styles.text}>
              {isImageAdd ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput
              style={[
                [styles.input],
                focusedInput === "title" && [styles.inputFocused],
              ]}
              name="title"
              value={title}
              placeholder="Назва..."
              onChangeText={(text) => {
                setTitle(text);
                setIsTitleEntered(text.trim() !== "");
                console.log("Title:", text);
              }}
              onFocus={() => setFocusedInput("title")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          <View style={styles.inputHolder}>
            <Image
              style={styles.mapImage}
              source={require("../images/map.png")}
            />
            <TextInput
              style={[
                [styles.inputMap],
                focusedInput === "location" && [styles.inputFocused],
              ]}
              name="location"
              value={location}
              placeholder="Місцевість"
              onChangeText={(text) => {
                setLocation(text);
                setIsLocationEntered(text.trim() !== "");
                console.log("Location:", text);
              }}
              onFocus={() => setFocusedInput("location")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          <TouchableOpacity
            style={[styles.buttonValid, !isFormValid && styles.button]}
            onPress={pablishPost}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButtonDel}>
          <TouchableOpacity style={styles.buttonDel}>
            <Image
              style={styles.buttonDelIcon}
              source={require("../images/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
    paddingBottom: 22,
  },
  header: {
    position: "relative",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    hesght: 44,
  },
  titleContainer: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  titleContainerText: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    paddingBottom: 11,
    paddingTop: 11,
  },
  buttonReturn: {
    position: "absolute",
    marginTop: 10,
    height: 24,
    left: 16,
  },
  iconReturn: {
    width: 24,
    height: 24,
  },
  mainContent: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  publicationContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  cameraButton: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  cameraImage: {
    width: 24,
    height: 24,
  },
  //     image {
  //     flex: 1,
  //   },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  input: {
    fontFamily: "Roboto-Regular",
    minWidth: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 16,
    paddingTop: 16,
  },
  inputFocused: {
    color: "#000",
  },
  mapImage: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    marginTop: -12,
  },
  inputHolder: {
    position: "relative",
    marginBottom: 16,
  },
  inputMap: {
    minWidth: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingLeft: 28,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
    minWidth: 343,
    padding: 16,
    marginTop: 27,
  },
  buttonValid: {
    backgroundColor: "#FF6C00",
    color: "#fff",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  containerButtonDel: {
    marginTop: "auto",
  },
  buttonDel: {
    width: 70,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#E8E8E8",
    marginRight: "auto",
    marginLeft: "auto",
  },
  buttonDelIcon: {
    width: 24,
    height: 24,
  },
});
