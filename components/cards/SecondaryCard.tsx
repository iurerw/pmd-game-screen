import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Card from "../Card";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
type SecondaryCardProps = {
    name: string,
    nickname: string,
    imgUrl: string,
    _class: "warrior" | "mage", 
    hp: number,
    mp: number,
    level: number,
    role:string,
}


export default function SecondaryCard(this: any, {
  name,
  nickname,
  imgUrl,
  _class, 
  hp, 
  mp,
  level,
  role
}:SecondaryCardProps) {

  
    return (
    <Card>
        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <Image source={{ uri: imgUrl }} width={100} height={100} />
          </View>
          <View style={styles.statsRight}>
            <Text style={styles.playerName}>{name}</Text>
            <View style={styles.nicknameBar}>
              <Text style={styles.text}>{nickname}</Text>
              <View style={styles.class}>  
                {getClass(_class)}
                <AntDesign name="up-square-o" size={24} color="black" />
              </View>
            </View>
            <View style={styles.statusBar}>
              <View style={styles.barContainer}>
                <View style={{ ...styles.hpBar, width: `${hp}%` }} />
              </View>
              <View style={styles.barContainer}>
                <View style={{ ...styles.mpBar, width: `${mp}%` }} />
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Level {level}</Text>
              <Text style={styles.text}>{role}</Text>
            </View>
          </View>
        </View>
    </Card>
  );
}

function getClass(_class:"warrior" | "mage"){
    switch(_class)
    {
      case "warrior": return <MaterialCommunityIcons name="sword" size={24} color="black" style={styles.class} />
      case "mage": return <FontAwesome name="fire" size={24} color="black" style={styles.class}/>
    }
}
const styles = StyleSheet.create({
  
  cardFooter:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  statusBar:{
    gap:5
  },
  nicknameBar:{
    flexDirection:"row",
  },
  playerName:{
    fontWeight:"bold",
    fontSize: 16
  },
  class:{
    flexDirection:"row",
    textAlign:"right",
    flex:1
  },
  nameBar:{

  },
  inviteCard:{
    textAlign:"center"
  }, 
  statsContainer: {
    flexDirection: "row",
    width: "100%",
    gap:10
  },
  statsRight: {
    flex: 1,
    gap:3
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  mpBar:{
    backgroundColor: "rgb(020 100 225)",
    height: 6,
    borderRadius: 4,
    position: "absolute",
  },
  barContainer: {
    width: "100%",
    height: 6,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  hpBar: {
    backgroundColor: "rgb(255 97 101)",
    height: 6,
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