import React from "react";
import { View, Text } from "react-native";
import { Tab, TabView } from 'react-native-elements';

const Menu = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Coffee"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cafe-outline', type: 'ionicon'}} />
        <Tab.Item
          title="Tea"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'leaf-outline', type: 'ionicon'}} />
        <Tab.Item
          title="Smoothies"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'beer-outline', type: 'ionicon'}} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Coffee</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Teas</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Smoothies</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Menu;
