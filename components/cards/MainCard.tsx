import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({
  title,
  participating,
  imgUrl,
  name,
  hp,
  damageDone,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Text>{title}</Text>
          <Text style={styles.text}>{participating}/10 Participating</Text>
        </View>
        <Image source={{ uri: imgUrl }} width={100} height={100} />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={24} color="black" />
          </View>

          <View style={styles.statsRight}>
            <Text>{name}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "80%" }} />
            </View>

            <Text style={styles.text}>{hp} / 1500 HP</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{damageDone} Damage Done</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
    width:"110%",
    height:"10%", 
    marginBottom:-27,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
    justifyContent:"center"
  },
  footerText: {
    color: "white",
    textAlign:"center"
    },
  cardHeader:{
    alignItems:"center"
  },
  text:{
    color: "rgb(159 155 167)",
  }
});
