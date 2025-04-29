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
        imgUrl="https://i.ibb.co/7dh9kYv0/dragon.png"
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
      imgUrl="https://i.ibb.co/7dh9kYv0/dragon.png"
      _class="mage"
      hp={60}
      mp={70}
      level={12}
      role="Leader"
      />
      <SecondaryCard 
      name="DarKLink"
      nickname="@shadow"
      imgUrl="https://pm1.aminoapps.com/6360/3c6324d9d8901153eca1b2f459de7e55d59fb00e_hq.jpg"
      _class="warrior"
      hp={25}
      mp={50}
      level={10}
      role="Member"
      />
      <SecondaryCard 
      name="Link"
      nickname="@hyruleHero"
      imgUrl="https://www.pngfind.com/pngs/m/48-483948_link-zelda-pixel-art-hd-png-download.png"
      _class="mage"
      hp={70}
      mp={10}
      level={6}
      role="Member"
      />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  inviteCard:{
    textAlign:"center"
  }
})