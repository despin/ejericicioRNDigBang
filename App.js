import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Slider from "./SliderWithLabels";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#084E83"
  },
  innerContainer: { backgroundColor: "#003B67", padding: 20, width: 380 },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  finalTotal: {
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
    marginBottom: 5,
    fontSize: 14
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
    color: "#FFF",
    textAlign: "center"
  },
  finalTotalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#00355D',
    padding: 5,
    alignItems: 'center'
  }
});

const App = props => {
  const [monto, setMonto] = useState(5000);
  const [plazo, setPlazo] = useState(3);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Simulá tu crédito</Text>
        <Slider
          currency={"$"}
          max={50000}
          min={5000}
          label={"MONTO TOTAL"}
          getter={monto}
          setter={setMonto}
        />
        <Slider
          max={12}
          min={3}
          label={"PLAZO"}
          getter={plazo}
          setter={setPlazo}
        />
        <View
          style={styles.finalTotalBox}
        >
          <Text style={styles.finalTotal}>COUTA FIJA POR MES:</Text>
          <Text style={[styles.finalTotal, { fontSize: 22 }]}>
            ${(monto / plazo).toFixed(2)}
          </Text>
        </View>
        <View style={{ heigth: 40, flexDirection: "row" }}>
          <TouchableOpacity style={{ flex: 2, backgroundColor: "#17AA8D", alignItems: "center", margin: 5, heigth: 40 }} >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", heigth: 40 }} >
              <Text style={{color: "#FFF", fontFamily: "Montserrat-Bold", alignItems: "center", justifyContent: "center", fontSize: 18}}>
                OBTENÉ CRÉDITO
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: "#0B558B", alignItems: "center", margin: 5, }} >
            <View style={{flex: 1 ,justifyContent: "center", alignItems: "center"}} >
              <Text style={{ color: "#FFF", fontFamily: "Montserrat-Bold", textAlignVertical: "center", fontSize: 12 }}>
                VER DETALLE DE CONSULTA
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
