import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import SecondaryCard from "@/components/cards/SecondaryCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://cdn-icons-png.flaticon.com/512/2603/2603009.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>

      <Card>
        <View>
          <Text style={styles.inviteCard}>Invite a Member</Text>
        </View>
      </Card>

      <SecondaryCard 
      name="Sophiala"
      nickname="@bestieee"
      imgUrl=""
      _class="warrior"
      hp={100}
      mp={70}
      level={12}
      />
      <SecondaryCard 
      name="Sophiala"
      nickname="@bestieee"
      imgUrl=""
      _class="warrior"
      hp={25}
      mp={50}
      level={12}
      />
      <SecondaryCard 
      name="Sophiala"
      nickname="@bestieee"
      imgUrl=""
      _class="warrior"
      hp={70}
      mp={10}
      level={12}
      />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  inviteCard:{
    textAlign:"center"
  }
})