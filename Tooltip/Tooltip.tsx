import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ColorValue,
  TextStyle,
} from "react-native";

type pageProps = {
  bgColor: ColorValue;
  textStyle: TextStyle;
  onPressed: () => void;
  measure: { x: number; y: number };
  state: {
    status: Boolean;
    rightPosition: number;
    text: String;
    bgColor: ColorValue;
    measure: {
      x: number;
      y: number;
    };
  };
};

const Tooltip = ({ textStyle, onPressed, state }: pageProps) => {
  return (
    <TouchableOpacity onPress={onPressed} style={styles.screen}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: state.bgColor,
            borderRadius: 10,
            right: state.rightPosition,
            top: state.measure.y - 5,
          },
        ]}
        onPress={onPressed}
      >
        <Text style={textStyle}>{state.text}</Text>
        <View style={[styles.triangle, { borderBottomColor: state.bgColor }]} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Tooltip;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: 100,
    height: 30,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },

  triangle: {
    width: 0,
    height: 0,
    position: "absolute",
    top: -10,
    right: 25,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    zIndex: 2,
  },
});
