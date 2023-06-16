import React from 'react';
import {
    Dimensions, FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Card} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    width: Dimensions.get('window').width,
    aspectRatio: 393 / 177,
    height: undefined,
    resizeMode: 'cover',
  },
  flyer: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  headerTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
    mainHeaderTextStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F6EDA0',
    padding: 15,
    borderRadius: 15,
    fontSize: 7,
    margin: 40,
  },
    majorCard: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        //padding: 10,
        borderRadius: 15,
        fontSize: 7,
        margin: 15,
        //width: 170,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    majorCardImage: {
        width: 125,
        height: 125,
        alignSelf: 'center'
    },
    text1: {
        margin: 15
    },
});

const QuantitativeEconomics = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.mainHeaderTextStyle}>Major in Quantitative Economics (B.A.)</Text>

          <Text style={styles.text1}>
              The major in quantitative economics prepares students for quantitative careers in finance, business, and law and for graduate studies in the social sciences. Students considering graduate school in economics should complete this major. School requirements must be met and must include 19 courses as specified below.

              {"\n\n"}Economics 20A-B Basic Micro and Macroeconomics.
              {"\n\n"}Mathematics 2A-B and 3A/6G or ICS 6N Calculus I & II,  Mathematics for Economists and Linear Algebra.
              {"\n\n"}Economics 105A-B-C Intermediate Quantitative Micro and Macroeconomics.
              {"\n\n"}Statistics 120A-B-C Probability and Statistics OR Mathematics 130A-B-C Probability.
              {"\n\n"}Economics 123A-B Econometrics I and II.
              {"\n\n"}Two Quantitative Economics electives from the following: Economics 107, 109 (when title is "Evolutionary Game Theory"), 116A, 116B, 122CW, 123CW, 124, 129 (when title is "Special Topics in Quantitative Methods"), 131A, and 135.
              {"\n\n"}Three additional upper division Economics courses, one of which must be an upper-division Economics writing course.


              {"\n\n"}Students who are double majoring in Quantitative Economics and Mathematics may make the following substitutions:

              {"\n\n"}Students may also petition upper-division Mathematics electives for upper-division Economics elective courses. These elective courses may not be used to satisfy their Mathematics major requirements.


              {"\n\n"}PLEASE NOTE: If you are a Mathematics Major with a Concentration in Mathematical Finance, you may not use Econ 135/Math 176, Econ 132A and Econ 134A for your Quantitative Economics major, since they are required for your Mathematics major.



              {"\n\n"}Professional Learning Outcomes
              {"\n\n"}Understand comparative advantage.
              {"\n\n"}Use supply and demand curves to analyze the impact of taxes etc. on consumer surplus and market efficiency.
              {"\n\n"}Interpret estimates from linear regression models and use these models to test hypothesis and  make forecasts.
              {"\n\n"}Be able to use standard software to carry out regression analyses with real data.
              {"\n\n"}Understand how to evaluate macroeconomic conditions such as unemployment, inflation, and growth.
              {"\n\n"}Understand how monetary policy and fiscal policy can be used to influence short-run macroeconomic conditions.
              {"\n\n"}Understand how multivariable calculus techniques can be used to derive key results from mathematical models of economic behavior.

          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default QuantitativeEconomics;
