import React, { useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import {
  Appbar,
  Switch,
  List,
  Divider,
  Text,
  RadioButton,
} from "react-native-paper";
import { Searchbar } from "react-native-paper";

const products = [
  {
    category: "Hiking Backpacks",
    name: "Explorer 45L Hiking Backpack",
    description:
      "A spacious and durable hiking backpack with multiple compartments, hydration reservoir compatibility, and padded straps for maximum comfort.",
    price: "$79.99",
    image: require("./../assets/images/explorer-backpack.jpg"),
  },
  {
    category: "Hiking Backpacks",
    name: "Trailblazer 65L Expedition Backpack",
    description:
      "Perfect for extended hikes and camping trips, this backpack offers ample storage, adjustable straps, and a rain cover for all-weather protection.",
    price: "$129.99",
    image: require("./../assets/images/trailblazer-backpack.jpg"),
  },
  {
    category: "Hiking Footwear",
    name: "Trekking Boots",
    description:
      "Waterproof and ankle-supporting boots designed for rugged terrains. Available in various sizes.",
    price: "$89.99",
    image: require("./../assets/images/trekking-boots.jpg"),
  },
  {
    category: "Hiking Footwear",
    name: "Trail Running Shoes",
    description:
      "Lightweight and breathable shoes for trail running or light hiking. Exceptional grip and comfort.",
    price: "$69.99",
    image: require("./../assets/images/trail-running-shoes.jpg"),
  },
  {
    category: "Tents and Shelters",
    name: "MountainPeak 2-Person Tent",
    description:
      "A compact and easy-to-setup tent with rainfly and vestibule for gear storage.",
    price: "$149.99",
    image: require("./../assets/images/mountainpeak-tent.jpg"),
  },
  {
    category: "Tents and Shelters",
    name: "Hammock with Mosquito Net",
    description:
      "Stay bug-free while lounging in the wild. Durable hammock with integrated mosquito net.",
    price: "$49.99",
    image: require("./../assets/images/hammock-mosquito-net.jpg"),
  },
  {
    category: "Navigation and Safety",
    name: "Handheld GPS Device",
    description:
      "GPS with topo maps and a built-in compass. Keep track of your route and location.",
    price: "$129.99",
    image: require("./../assets/images/gps-device.jpg"),
  },
  {
    category: "Navigation and Safety",
    name: "First Aid Kit",
    description:
      "Compact first aid kit with essential supplies for minor injuries during hikes.",
    price: "$19.99",
    image: require("./../assets/images/first-aid-kit.jpg"),
  },
  {
    category: "Apparel",
    name: "Waterproof Hiking Jacket",
    description:
      "A breathable, waterproof jacket to keep you dry in rainy conditions.",
    price: "$79.99",
    image: require("./../assets/images/hiking-jacket.jpg"),
  },
  {
    category: "Apparel",
    name: "Quick-Dry Hiking Pants",
    description:
      "Lightweight and moisture-wicking pants suitable for various outdoor activities.",
    price: "$49.99",
    image: require("./../assets/images/hiking-pants.jpg"),
  },
  {
    category: "Camping Cookware",
    name: "Portable Camping Stove",
    description:
      "A compact, foldable stove with a fuel canister for cooking on the trail.",
    price: "$39.99",
    image: require("./../assets/images/hiking-pants.jpg"),
  },
  {
    category: "Camping Cookware",
    name: "Cookware Set",
    description:
      "A nesting cookware set with pots, pans, and utensils for campsite cooking.",
    price: "$59.99",
    image: require("./../assets/images/cookware-set.jpg"),
  },
  {
    category: "Accessories",
    name: "Trekking Poles",
    description:
      "Lightweight aluminum trekking poles with ergonomic grips for stability on the trail.",
    price: "$29.99 per pair",
    image: require("./../assets/images/trekking-poles.jpg"),
  },
  {
    category: "Accessories",
    name: "Solar-Powered Portable Charger",
    description:
      "Charge your devices on the go with this solar-powered charger.",
    price: "$49.99",
    image: require("./../assets/images/solar-charger.jpg"),
  },
];

const ProductCatalog = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Function to handle search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#ede9fe" }}>
        <Appbar.Content title="Products" />
      </Appbar.Header>
      <Searchbar
        placeholder="Search for products"
        onChangeText={handleSearch}
        value={searchQuery}
        style={{ margin: 10 }}
      />
      {filteredProducts.map((product, index) => (
        <Card key={index} style={{ margin: 10 }}>
          <Card.Cover style={{ margin: 5 }} source={product.image} />
          <Card.Content>
            <Title>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <List.Item
              title="Category"
              description={product.category}
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Price"
              description={product.price}
              left={() => <List.Icon icon="currency-usd" />}
            />
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ProductCatalog;
