import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet, Text } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (text) => {
    setSearchText(text);

    // Dummy suggestions based on search text
    const newSuggestions = text.length > 0 ? [
      `${text} suggestion 1`,
      `${text} suggestion 2`,
      `${text} suggestion 3`,
    ] : [];
    setSuggestions(newSuggestions);
  };


  const renderImageItem = ({ item }) => {
    // Generate random image sizes for a more dynamic layout like Instagram
    const randomWidth = Math.floor(Math.random() * 200) + 100; // Width between 100 and 300
    const randomHeight = Math.floor(Math.random() * 300) + 200; // Height between 200 and 500
  
    return (
      <Image
        source={{ uri: `https://picsum.photos/${randomWidth}/${randomHeight}` }}
        style={{ width: randomWidth, height: randomHeight, margin: 5 }}
        resizeMode="cover" // Ensure the image covers the entire area
      />
    );

  };


  const renderSuggestionItem = ({ item }) => (
    <Text style={styles.suggestionText}>{item}</Text>
  );



  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearchChange}
        />

        {suggestions.length > 0 && (
           <FlatList
           data={suggestions}
           renderItem={renderSuggestionItem}
           keyExtractor={(item, index) => index.toString()}
           style={styles.suggestionsList}
         />
        )}


        {searchText.length === 0 && ( // Show images only when search is empty
           <FlatList
            data={Array(20).fill(null)} // Create an array of 20 nulls just to render 20 images.
            renderItem={renderImageItem}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2} // Arrange images in two columns
            contentContainerStyle={{
              paddingBottom: 20,  // Add some bottom padding for better visual spacing.
             }}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  suggestionsList: {
    marginBottom: 20,  // Add spacing between suggestions and images
  },

  suggestionText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

});

export default SearchScreen;