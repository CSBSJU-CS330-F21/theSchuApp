import React, { useState } from "react";
import { View, Text} from "react-native";
import { Tab, TabView } from 'react-native-elements';
import { FilledButton} from "../components/FilledButton";
import Coffee from "../components/Coffee";
import Tea from "../components/Tea";
import Refreshers from "../components/Refreshers";
import ClassicDrinks from "../components/ClassicDrinks";
import { ScrollView } from "react-native-gesture-handler";
import Cart from "./Cart/Cart";
import CoffeeTest from "./Cart/CoffeeTest";


const Menu = () => {
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = useState();
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Coffee"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "cafe-outline", type: "ionicon" }}
        />
        <Tab.Item
          title="Tea"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "leaf-outline", type: "ionicon" }}
        />
        <Tab.Item
          title="Classic Drinks"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "beer-outline", type: "ionicon" }}
        />
        <Tab.Item
          title="Refreshers"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "pint-outline", type: "ionicon" }}
        />
        <Tab.Item
          title="Test"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "pint-outline", type: "ionicon" }}
        />
      </Tab>
      <ScrollView>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
        
          <Coffee />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Tea/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <ClassicDrinks />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Refreshers/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <CoffeeTest/>
        </TabView.Item>
      </TabView>
      </ScrollView>
    </>
    
  );
};


export default Menu;
