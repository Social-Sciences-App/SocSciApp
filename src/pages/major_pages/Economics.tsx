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

const Economics = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Economics (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/econ_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              The economics major is designed for students seeking a broad education applicable to occupations in business, law, and government. School requirements must be met and must include 17 courses as specified below.

              Economics 20A-B. Basic Micro and Macroeconomics.
              Economics 15A-B. Probability and Statistics.
              Mathematics 2A-B. Calculus and Mathematics for Economists.
              Economics 100A-B-C. Intermediate Micro and Macroeconomics.†
              Economics 122A. Applied Econometrics.
              Six additional Economics courses, one of which may be lower-division.
              †Economics 100A-B-C and 105A-B-C may not both be taken for credit and are not considered interchangeable. For students who are interested in the major of Quantitative Economics but are not officially a declared major, you are advised to begin with Economics 105A.



              Program Learning Outcomes
              Understand comparative advantage.
              Use supply and demand curves to analyze the impact of taxes etc. on consumer surplus and market efficiency.
              Interpret estimates from linear regression models and use these models to test hypothesis and  make forecasts.
              Be able to use standard software to carry out regression analyses with real data.
              Understand how to evaluate macroeconomic conditions such as unemployment, inflation, and growth.
              Understand how monetary policy and fiscal policy can be used to influence short-run macroeconomic conditions.




          </Text>

          <Text>
              The minor introduces students to the fundamentals of economic theory and builds basic economic literacy. Students apply economic theory in two upper-division electives of their choosing. The minor is ideal for anyone seeking careers in business, government, law, or non-profits or who simply has interest in economic issues.

          </Text>
          <Text>
              Economics Minor Requirements
              Requirements for the minor in Economics are met by taking nine courses (36 units) as specified below:

              A. Complete the following core courses (28 units):
              ECON 15A- 15B	Probability and Statistics in Economics I
              and Probability and Statistics in Economics II 1
              ECON 20A- 20B	Basic Economics I
              and Basic Economics II 2
              and select one of the following sequences:
              ECON 100A- 100B- 100C
              Intermediate Economics I
              and Intermediate Economic II
              and Intermediate Economic III
              or
              ECON 105A- 105B- 105C
              Intermediate Quantitative Economics I
              and Intermediate Quantitative Economics II
              and Intermediate Quantitative Economics III
              B. Electives (eight units): two upper-division ECON electives (excluding ECON 199). 3
              NOTE: Prerequisites for the Economics core courses include MATH 2A-MATH 2B .

              1
              MGMT 7 may not be used to substitute for ECON 15A-ECON 15B. Furthermore, students will not received credit for MGMT 7 if taken after ECON 15A-ECON 15B.

              2
              Note that ECON 20A-ECON 20B is a requirement of both the undergraduate major in Business Administration and the Economics minor.

              3
              As noted in the Economics courses list (click on the "Courses" tab at the top of this page), some courses overlap with upper-division courses offered by The Paul Merage School of Business. Where there is overlap, students may use the course to count toward satisfying the upper-division requirements of the Business Administration major or the Economics minor, but not both.


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Economics;
