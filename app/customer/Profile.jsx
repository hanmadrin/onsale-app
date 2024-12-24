import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert
} from 'react-native';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; // For icons


const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      image: 'https://picsum.photos/200/200',
    });
  
    const [form, setForm] = useState(profile);
    const [imageModalVisible, setImageModalVisible] = useState(false);

    const handleEditToggle = () => {
      if (isEditing) {
        setProfile(form);
      }
      setIsEditing(!isEditing);
    };
  
    const handleInputChange = (key, value) => {
      setForm({ ...form, [key]: value });
    };

    const handleProfileImageClick = () => {
        if(isEditing){
          setImageModalVisible(true);
        }
      };

    const handleImageUpload = async (imageSource) => {
        try {
          let result;
      
          if (imageSource === 'gallery') {
            result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 4],
              quality: 1,
            });
          } else if (imageSource === 'camera') {
            const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraPermission.status !== 'granted') {
              Alert.alert('Camera Access Required', 'Please grant camera permission to use this feature.');
              return;
            }
            result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 4],
              quality: 1,
            });
          }
      
          if (!result.canceled) {
              handleInputChange('image', result.assets[0].uri);
              setImageModalVisible(false);
          }
        } catch (error) {
          console.error('Error picking an image:', error);
          Alert.alert('Error', 'Could not upload a profile image');
        }
    };

    const handleCancelImageModal = () => {
        setImageModalVisible(false);
      };

  const saveButtonStyle = {
    backgroundColor: isEditing ? '#2ecc71' : '#3498db',
  };

  return (
    <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
      
      <Image
        source={{ uri: 'https://picsum.photos/800/300' }}
        style={styles.coverImage}
      />

      
      <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleProfileImageClick}>
            <Image source={{ uri: form.image }} style={styles.profileImage} />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
          <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

        
        <View style={styles.detailsContainer}>
        {['name', 'email', 'phone'].map((field) => (
          <View style={styles.detailRow} key={field}>
            <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={form[field]}
                onChangeText={(value) => handleInputChange(field, value)}
              />
            ) : (
              <Text style={styles.value}>{profile[field]}</Text>
            )}
          </View>
        ))}
      </View>
       </ScrollView>

       {isEditing && (
         <View style={styles.saveButtonContainer}>
              <TouchableOpacity style={[styles.saveButton, saveButtonStyle]} onPress={handleEditToggle}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
           </View>
      )}

      <Modal
      animationType="slide"
      transparent={true}
      visible={imageModalVisible}
      onRequestClose={handleCancelImageModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Change Profile Image</Text>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleImageUpload('gallery')}>
            <Ionicons name="images-outline" size={24} color="#3498db" />
            <Text style={styles.modalOptionText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleImageUpload('camera')}>
          <Ionicons name="camera-outline" size={24} color="#3498db" />
            <Text style={styles.modalOptionText}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOptionCancel} onPress={handleCancelImageModal}>
            <Text style={styles.modalOptionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom: 80
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    top: 10,
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 80,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    color: '#333'
  },
  saveButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
    saveButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333'
  },
  modalOptionCancel: {
      padding: 15,
      width: '100%',
      alignItems: 'center'
  }
});

export default ProfilePage;