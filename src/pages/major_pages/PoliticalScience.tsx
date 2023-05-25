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

const PoliticalScience = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Political Science (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/polisci_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              As a political science major at UCI, you explore how politics works at the individual, group, national, and international levels. Students are introduced to the findings and the methods for gathering information about political behavior and political processes. Course work emphasizes the development of analytic thinking and clear writing skills. Upper-division courses are organized around general areas of study, including American society and politics, comparative politics, international relations, public law, and political theory.

              Students have many opportunities to pursue special topics in political science through independent study courses, field studies, the department’s honors program and internships. Many political science majors participate in such programs as the UC/DC Internship Program, in Washington, D.C. and the University's Education Abroad Program. Political science majors learn how to understand politics and acquire the skills for effective performance in many professional fields.

              To major in the program, contact the Social Science Undergraduate Student Affairs.

              All students must meet the University Requirements.
              All students must meet the School Requirements.
              Departmental Requirements for the Major
              School requirements must be met and must include 12 courses (48 units) as specified below:

              A. Select four lower-division (one or two digit) POL SCI courses below. One must be the introductory course for the module selected under II below.
              POL SCI 11A
              Introduction to Political Science: Political Analysis
              POL SCI 11C
              Introduction to Political Science: Micropolitics
              POL SCI 21A
              Introduction to American Government
              POL SCI 31A
              Introduction to Political Theory
              POL SCI 41A
              Introduction to International Relations
              POL SCI 51A
              Introduction to Politics Around the World
              POL SCI 61A
              Introduction to Race and Ethnicity in Political Science
              POL SCI 71A
              Introduction to Law
              Complete any one additional lower-division POL SCI course (not used above) (4 units)
              B. Seven upper-division POL SCI courses (28 units) chosen from among the POL SCI modules numbered 120–179. Three of these courses must be from one module.
              American Politics and Government (POL SCI 120-129)
              Political Theory and Methods (POL SCI 130-139)
              International Relations (POL SCI 140-149)
              Comparative Politics (POL SCI 150-159)
              Public Law (POL SCI 170-179)

          </Text>

          <Text>
              Are you interested in studying Political Science but do not want to major in it? You may want to consider the minor in Political Science. The program enables you to explore the field beyond the introductory level but in less depth than the major.

              To minor, contact the Social Sciences Undergraduate Student Affairs Office.

              Political Science Minor Requirements
              Requirements for the minor in Political Science are met by taking seven political science courses (28 units) as specified below:

              A. Select one of the following:
              POL SCI 11A
              Introduction to Political Science: Political Analysis
              POL SCI 11C
              Introduction to Political Science: Micropolitics
              POL SCI 21A
              Introduction to American Government
              POL SCI 31A
              Introduction to Political Theory
              POL SCI 41A
              Introduction to International Relations
              POL SCI 51A
              Introduction to Politics Around the World
              POL SCI 61A
              Introduction to Race and Ethnicity in Political Science
              POL SCI 71A
              Introduction to Law
              B. Select six additional Political Science courses, four of which must be upper-division.

          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PoliticalScience;
