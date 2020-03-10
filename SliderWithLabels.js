import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
// import Slider from "@react-native-community/slider";
// import NumericInput from "@wwdrew/react-native-numeric-textinput";
import { Slider } from "@miblanchard/react-native-slider";

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Medium",
    color: "#FFF",
    textAlignVertical: "center"
  },
  values: {
    fontFamily: "Montserrat-Regular",
    color: "#FFF"
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center"
  },
  valueBoxText: {
    fontFamily: "Montserrat-Bold",
    color: "#FFF",
    fontSize: 20
  },
  valueBox: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#FFF",
    minWidth: 100,
    alignItems: "center",
    flexDirection: "row"
  }
});

const SliderWithLabels = props => {
  const label = props.label;
  const min = props.min || 0;
  const max = props.max || 1;
  const setter = props.setter;
  const getter = props.getter;
  const currency = props.currency || "";

  const numberWithCommas = num => {
    if (num !== undefined) {
      return num
        .toString()
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return num;
    }
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.labelRow}>
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View style={styles.valueBox}>
          <Text style={styles.valueBoxText}>{`${currency} `}</Text>
          <TextInput
            style={[styles.valueBoxText, { flex: 1, height: 40 }]}
            placeholder="getter"
            onChangeText={c => {
              if (parseInt(c) >= min) {
                if (parseInt(c) <= max) {
                  setter(parseInt(c));
                } else {
                  setter(max);
                }
              } else {
                setter(min);
              }
            }}
            value={String(getter)}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Slider
          value={getter}
          maximumValue={max}
          minimumValue={min}
          thumbTintColor="#FFF"
          maximumTrackTintColor="#999"
          minimumTrackTintColor="#CCC"
          onValueChange={value => setter(parseInt(value))}
        />
      </View>
      <View style={[styles.labelRow, { marginHorizontal: 10 }]}>
        <Text style={styles.values}>
          {currency} {numberWithCommas(min)}
        </Text>
        <Text style={styles.values}>
          {currency} {numberWithCommas(max)}
        </Text>
      </View>
    </View>
  );
};

export default SliderWithLabels;
