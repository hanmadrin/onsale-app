import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Ensure you install expo/vector-icons
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { theme } from "../../constants/theme";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ONSALE</Text>
      </View>

      {/* Icons Section */}
      <View style={styles.iconsContainer}>
        {/* Sort Icon */}
        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
          <Text><MaterialCommunityIcons name="sort" size={24} color={theme.colors.text} /></Text>
        </TouchableOpacity>

        {/* Filter Icon */}
        <TouchableOpacity style={styles.iconButton}>
          <Text><Feather name="filter" size={24} color={theme.colors.text} /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fff",
    // elevation: 1, // For shadow on Android
    // shadowColor: "#000", // For shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // shadow on bottom
    // borderBottomWidth: 1,
    // borderBottomColor: "#f1f1f1",

  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 20,
    padding: 5,
    
  },
});

export default Navbar;
