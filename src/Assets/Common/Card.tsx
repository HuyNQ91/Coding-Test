import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface Props {
  type: string;
  image: any;
  title: string;
  subTitle: string | undefined;
  points: number;
}

const Card = (props: Props) => {
  const {type, image, title, subTitle, points} = props;
  return (
    <View
      style={
        type === 'horizontal' ? styles.mainHorizontal : styles.mainVertical
      }>
      <Image
        source={image}
        style={
          type === 'horizontal' ? styles.imageHorizontal : styles.imageVertical
        }
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text numberOfLines={1}>{subTitle}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text>Earn up to</Text>
            <Text>
              <Text style={styles.points}>{points}</Text>
              &nbsp;pts
            </Text>
          </View>
          <View>
            <Image source={require('../Images/next.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHorizontal: {
    flexDirection: 'row',
    width: 300,
    height: 160,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
    overflow: 'hidden',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  mainVertical: {
    flexDirection: 'column',
    width: 180,
    height: 350,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
    overflow: 'hidden',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  imageHorizontal: {
    marginRight: 8,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imageVertical: {
    marginBottom: 8,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  points: {
    fontWeight: 'bold',
    color: '#0152C8',
    fontSize: 16,
  },
});

export default Card;
