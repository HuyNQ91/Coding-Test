import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Card from '../Assets/Common/Card';

const data = [
  {
    image: require('../Assets/Images/image1.png'),
    title: 'Advance Health Screening',
    subTitle: '6 days left',
    points: 1000,
  },
  {
    image: require('../Assets/Images/image2.png'),
    title: 'Say No To Sugar',
    points: 50,
  },
  {
    image: require('../Assets/Images/image1.png'),
    title: '5km Challenge',
    subTitle: '7 days left',
    points: 60,
  },
  {
    image: require('../Assets/Images/image2.png'),
    title: '10 Days Challenge',
    points: 40,
  },
  {
    image: require('../Assets/Images/image2.png'),
    title: 'Screening',
    points: 30,
  },
  {
    image: require('../Assets/Images/image1.png'),
    title: 'Say No To Coke',
    subTitle: '7 days left',
    points: 20,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Assessments</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentScrollView}
          style={styles.containerScrollView}>
          {data.map(({title, subTitle, points, image}, index) => (
            <Card
              key={index}
              type="horizontal"
              image={image}
              title={title}
              subTitle={subTitle}
              points={points}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.sectionTitle}>Challenges</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentScrollView}
          style={styles.containerScrollView}>
          {data.map(({title, subTitle, points, image}, index) => (
            <Card
              key={index}
              type="vertical"
              image={image}
              title={title}
              subTitle={subTitle}
              points={points}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  // Scroll view style for show shadow of card
  containerScrollView: {
    marginHorizontal: -16,
    marginVertical: -8,
  },
  contentScrollView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  //
  cardContainer: {
    marginRight: 16,
  },
  spacer: {
    height: 16,
  },
});
