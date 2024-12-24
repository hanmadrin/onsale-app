import { StatusBar } from 'expo-status-bar';
import ScreenWrapper from '@/components/ScreenWrapper';
import { ScrollView,View, Text } from 'react-native'
import  Loading  from '@/components/Loading';
import React ,{useState, useRef } from 'react'
import HomeNavBar from '@/app/customer/HomeNavBar';
import OfferPost from '../../components/OfferPost';
// import BottomSheet from "reanimated-bottom-sheet";

const Home = () => {
  const [offers, setOffers] = useState([{
    title: "50% Off All Items!",
    storeName: "SuperMart",
    storeImage: "https://picsum.photos/200/200",
    contentType: "video", // or "video"
    content: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // or video URL
    offerRate: 50,
    followCount: 120,
    location: "New York, USA",
    duration: "2024-12-14",
    description: "Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!",
  },
  {
    title: "50% Off All Items!",
    storeName: "SuperMart",
    storeImage: "https://picsum.photos/200/200",
    contentType: "image", // or "video"
    content: "https://picsum.photos/400/650", // or video URL
    offerRate: 50,
    followCount: 120,
    location: "New York, USA",
    duration: "2024-12-15",
    description: "Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!",
  },
  {
    title: "50% Off All Items!",
    storeName: "SuperMart",
    storeImage: "https://picsum.photos/200/200",
    contentType: "image", // or "video"
    content: "https://picsum.photos/400/700",
    offerRate: 50,
    followCount: 120,
    location: "New York, USA",
    duration: "2024-12-15",
    description: "Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!Enjoy our exclusive holiday offer! Everything in the store is now 50% off. Don't miss out!",
  },]);
  const sheetRef = useRef(null);
  const handleOpenFilterSort = () => {
    sheetRef.current.snapTo(0); // Open the bottom sheet
  };

  const handleCloseFilterSort = () => {
    sheetRef.current.snapTo(1); // Close the bottom sheet
  };
  

  const renderContent = () => (
    <View style={{ backgroundColor: 'white', padding: 16, height: 400 }}> {/* Adjust height as needed */}
    <Text>Filter/Sort Drawer Content</Text>
      {/* <FilterSortDrawer onClose={handleCloseFilterSort} /> */}
    </View>
  );
  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <HomeNavBar onOpenFilterSort={handleOpenFilterSort} /> {/* Pass the function */}
      <ScrollView>
        {offers.map((offer, index) => (
          <OfferPost key={index} post={offer} />
        ))}
      </ScrollView>

      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[400, 0]} // 400 is the height of the drawer, 0 is closed
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1} // Start closed
      /> */}
    </ScreenWrapper>
  );
}

export default Home