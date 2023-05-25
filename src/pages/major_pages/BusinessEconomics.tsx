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

const BusinessEconomics = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Business Economics (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/busecon_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              This major is for students seeking a business orientation in their study of economics. School requirements must be met and must include 20 courses as specified below.

              Economics 20A-B. Basic Micro and Macroeconomics.
              Economics 15A-B. Probability and Statistics.
              Economics 25. Economics of Accounting Decisions.*
              Mathematics 2A-B. Calculus and Mathematics for Economists.
              Economics 100A-B-C. Intermediate Micro and Macroeconomics.*
              Economics 122A-B. Applied Econometrics I and II.
              Seven additional Economics courses, including at least four four-unit upper-division courses.
              Two of the electives must be selected from the following Business Electives list: Economics 125, 131A, 132A, 134A, 135, 142A-B, 149 (when the topic is Price Discrimination), 161A-B, and 167 (formerly 161C). Additional courses may be added to this list; up-to-date information will be available at this site
              Two other electives must be selected from the following Management Electives list: Economics 115, 140, 147A, 147B, 148, 151A, 165. Additional courses may be added to this list; up-to-date information will be available at this site.
              * Management 30A covers essentially the same material as Economics 25.You can take either course but you will receive credit for only one of them.

              * Economics 100A-B-C and 105A-B-C may not both be taken for credit and are not considered interchangeable. For students who are interested in the major of Quantitative Economics but are not officially a declared major, you are advised to begin with Economics 105A.



              Program Learning Outcomes
              Understand comparative advantage.
              Use supply and demand curves to analyze the impact of taxes etc. on consumer surplus and market efficiency.
              Interpret estimates from linear regression models and use these models to test hypothesis and  make forecasts.
              Be able to use standard software to carry out regression analyses with real data.
              Understand how to evaluate macroeconomic conditions such as unemployment, inflation, and growth.
              Understand how monetary policy and fiscal policy can be used to influence short-run macroeconomic conditions.
              Understand basic accounting principles and how these relate to economic profit calculations.



          </Text>




      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessEconomics;
