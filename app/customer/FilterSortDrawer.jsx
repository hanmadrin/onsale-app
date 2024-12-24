import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'; // Install: expo install react-native-tab-view

const FilterRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
    {/* Your filter options here */}
    <Text>Filter Options</Text>
  </View>
);

const SortRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#f0f0f5' }}>
     {/* Your sort options here */}
    <Text>Sort Options</Text>
  </View>
);


const FilterSortDrawer = ({ onClose }) => {  // Receive onClose
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'filter', title: 'Filter' },
    { key: 'sort', title: 'Sort' },
  ]);

  const renderScene = SceneMap({
    filter: FilterRoute,
    sort: SortRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%' }} // Important for proper rendering
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'blue' }} // Customize indicator
          style={{ backgroundColor: 'white' }}
        />
      )}
    />
  );
};



export default FilterSortDrawer;