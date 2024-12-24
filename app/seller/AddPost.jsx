import ScreenWrapper from '@/components/ScreenWrapper';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreatePostPage = () => {
  const [brandName, setBrandName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [offerType, setOfferType] = useState(null);
  const [media, setMedia] = useState(null);
  const [location, setLocation] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [branches, setBranches] = useState([]);
  const [offerDuration, setOfferDuration] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const offerTypes = [
    'Percentage Discount',
    'Flat Discount',
    'Buy One Get One (BOGO)',
    'Coupon/Voucher',
    'Upto Discount',
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || offerDuration;
    setShowDatePicker(false);
    setOfferDuration(currentDate);
  };

  return (
    <ScreenWrapper>
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Create Your Post</Text>

      {/* Basic Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Brand Name"
          value={brandName}
          onChangeText={setBrandName}
        />
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Product Category */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Category"
          value={category}
          onChangeText={setCategory}
        />
      </View>

      {/* Offer Type */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Offer Type</Text>
        <View style={styles.offerTypeContainer}>
          {offerTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.offerTypeButton,
                offerType === type && styles.offerTypeButtonSelected,
              ]}
              onPress={() => setOfferType(type)}
            >
              <Text
                style={[
                  styles.offerTypeText,
                  offerType === type && styles.offerTypeTextSelected,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Product Media */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Media</Text>
        <TouchableOpacity style={styles.mediaUploadButton}>
          <Text style={styles.mediaUploadText}>Click to upload image or video</Text>
        </TouchableOpacity>
      </View>

      {/* Location */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for a location"
        />
        <MapView
          style={styles.map}
          region={location}
          onRegionChangeComplete={(region) => setLocation(region)}
        >
          <Marker coordinate={location} />
        </MapView>
      </View>

      {/* Offer Duration */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Offer Duration</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text>{offerDuration.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={offerDuration}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Post</Text>
      </TouchableOpacity>
    </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    gap: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
  },
  offerTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  offerTypeButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    margin: 0,
  },
  offerTypeButtonSelected: {
    backgroundColor: '#007bff',
  },
  offerTypeText: {
    fontSize: 14,
  },
  offerTypeTextSelected: {
    color: '#fff',
  },
  mediaUploadButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  mediaUploadText: {
    color: '#777',
  },
  map: {
    height: 200,
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:50
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});

export default CreatePostPage;
