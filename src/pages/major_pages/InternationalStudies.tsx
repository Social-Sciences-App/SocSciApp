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

const InternationalStudies = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in International Studies (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/is_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              The major in international studies provides an interdisciplinary perspective on global politics, economics, cultures and history. International studies majors acquire twenty-first-century analytical skills and knowledge that will enable them to understand and contribute to shaping the rapidly evolving global community. The degree in international studies prepares students for careers in a variety of fields such as international public policy, international business and finance, international organizations, non-governmental organizations, and academic research and teaching.

              {"\n\n"}Requirements for the major include a core set of courses: Introduction to Global Studies, Global Cultures and Society, Global Political Ideologies, Global Political Economy, Human Rights and Global Governance, and Global Environmental Issues. Also required is an additional lower-division social science course, and the Global and International Studies Forum. Students also choose both a geographic focus and a global focus to enable them to broaden and deepen areas of knowledge and topics of particular interest. The final requirements are competence in a language other than English and an international experience or approved internship.


              {"\n\n"}UCI General Catalogue
              {"\n\n"}Requirements for 2022-2023
              {"\n\n"}Requirements for 2021-2022 and Prior Years
              {"\n\n"}Degree Check Forms
              {"\n\n"}International Studies Degree Check Form (Fall 2019-present)
              {"\n\n"}International Studies Degree Check Form (pre-Fall 2019)


              {"\n\n"}2021-2022 Requirements for the International Studies Major are as follows:
              {"\n\n"}A. Complete the following:

              {"\n\n"}INTL ST 1 Introduction to Global Studies
              {"\n\n"}B. Select four from the following courses:

              {"\n\n"}INTL ST 11 Global Cultures and Society
              {"\n\n"}INTL ST 12 Global Political Ideologies
              {"\n\n"}INTL ST 15 Global Political Economy
              {"\n\n"}INTL ST 16 Human Rights and Global Governance
              {"\n\n"}INTL ST 17 Global Environmental Issues
              {"\n\n"}C. Select one of the following courses:

              {"\n\n"}ANTHRO 2A Introduction to Sociocultural Anthropology
              {"\n\n"}HISTORY 21A World: Innovations
              {"\n\n"}HISTORY 21B World: Empires and Revolutions
              {"\n\n"}HISTORY 21C World: Nation, War, and Rights
              {"\n\n"}INTL ST 13 Global Economy
              {"\n\n"}INTL ST 14 Introduction to International Relations
              {"\n\n"}POL SCI 51A Introduction to Politics Around the World
              {"\n\n"}SOC SCI 5D US & World Geography
              {"\n\n"}SOCIOL 2 Globalization and Transnational Sociology
              {"\n\n"}D. Competency in a language other than English.
              {"\n\n"}Competency is established by college-level course work equivalent to UCI’s fifth quarter of study (usually 2B).

              {"\n\n"}E. Geographic Focus: Two upper-division courses in any one geographic area.


              {"\n\n"}Approved Upper-Division Courses List Fall 2021
              {"\n\n"}Approved Upper-Division Courses List Winter 2022
              {"\n\n"}Approved Upper-Division Courses List Spring 2022
              {"\n\n"}Approved Upper-Division Courses List Summer 2022
              {"\n\n"}Approved Upper-Division Courses List Fall 2022

              {"\n\n"}F. Global Focus: Select five upper-division courses. At least two courses must be from Module A.

              {"\n\n"}Module A:

              {"\n\n"}INTL ST 100 Global Trials
              {"\n\n"}INTL ST 101A Global Social Movements
              {"\n\n"}INTL ST 101B Global Cities and Slums
              {"\n\n"}INTL ST 102A Global Refugees and Stateless People
              {"\n\n"}INTL ST 103A Case Studies in Global and Planetary Health
              {"\n\n"}INTL ST 104A Global Trafficking
              {"\n\n"}INTL ST 104BW Global Gender and Sexualities
              {"\n\n"}INTL ST 106A Global Political Ecology
              {"\n\n"}INTL ST 106B Global Food Environment
              {"\n\n"}INTL ST 150 Racism and Global Apartheid
              {"\n\n"}INTL ST 163 Global Inequalities
              {"\n\n"}Module B:

              {"\n\n"}Approved Upper-Division Courses List Fall 2021
              {"\n\n"}Approved Upper-Division Courses List Winter 2022
              {"\n\n"}Approved Upper-Division Courses List Spring 2022
              {"\n\n"}Approved Upper-Division Courses List Summer 2022
              {"\n\n"}Approved Upper-Division Courses List Fall 2022

              {"\n\n"}G. Two quarters of INTL ST 183A (Global and International Studies Forum), one quarter of which must be taken during the junior or senior year as a capstone experience

              {"\n\n"}H. At least one quarter of international experience.

              {"\n\n"}Internship Opportunities

              {"\n\n"}Majors are encouraged to study abroad through the Education Abroad Program (EAP) or the International Opportunities Program (IOP), which are available for periods of a quarter, semester, year, or summer. When this is not possible, work overseas (through IOP) or a domestic internship with the UCDC Internship Program, the Washington D.C. Center Program, or the Social Science Internship Program (International Studies 197) with an international focus may be substituted.



              {"\n\n"}UNDERGRADUATE STUDENT AFFAIRS OFFICE

              {"\n\n"}The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships.

              {"\n\n"}Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              {"\n\n"}For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              {"\n\n"}Please check the following link for further information: Undergraduate Student Affairs Office Website.


          </Text>
          <Text style={styles.headerTextStyle}>
              International Studies Minor Requirements
          </Text>

          <Text>
              The minor in international studies provides an interdisciplinary perspective on contemporary global issues, societies, and cultures. International studies minors acquire knowledge that will enable them to understand and contribute to shaping the rapidly evolving global community. The minor in international studies helps prepare students for graduate study or professional careers in a variety of fields in the national and international job markets such as international affairs and public policy, international business and finance, international organizations, and academic research and teaching. Requirements for the minor include a core set of courses: an introductory sequence (Global Cultures and Society, Global Politics, World History and Global Economics) and two quarters of the International Studies Public Forum. Students then choose both a regional focus (three upper-division courses on Europe and Eurasia, Africa and the Middle East, the Americas, or Asia) and a functional focus (three upper division courses on Global Security, Conflict and Conflict Resolution, International/Comparative Law, International/Transnational Organizations and Movements, Global Ethics and Human Rights, Global Identities, Global Trade, Investment and Finance, Global Development, Public Health,& Environment, or Global Population, Migration, and Diaspora). Minors in international studies are encouraged to study abroad.



              {"\n\n"}2021-2022 Requirements for the International Studies Minor are as follows:
              {"\n\n"}UCI General Catalogue



              {"\n\n"}A. Complete the following:

              {"\n\n"}INTL ST 1  Introduction to Global Studies

              {"\n\n"}B. Select one of the following:

              {"\n\n"}INTL ST 11  Global Cultures and Society

              {"\n\n"}INTL ST 12  Global Political Ideologies

              {"\n\n"}INTL ST 15  Global Political Economy

              {"\n\n"}INTL ST 16  Human Rights and Global Governance

              {"\n\n"}INTL ST 17  Global Environmental Issues

              {"\n\n"}C. Geographic Focus: Two upper-division courses in one geographic area

              {"\n\n"}Approved Upper-Division Courses List Fall 2021
              {"\n\n"}Approved Upper-Division Courses List Winter 2022
              {"\n\n"}Approved Upper-Division Courses List Spring 2022
              {"\n\n"}Approved Upper-Division Courses List Summer 2022

              {"\n\n"}D. Global Focus: Three upper-division courses. At least one must be from Module A.

              {"\n\n"}Module A:

              {"\n\n"}INTL ST 100  Global Trials

              {"\n\n"}INTL ST 101A  Global Social Movements

              {"\n\n"}INTL ST 101B  Global Cities and Slums

              {"\n\n"}INTL ST 102A  Global Refugees and Stateless People

              {"\n\n"}INTL ST 103A  Case Studies in Global and Planetary Health

              {"\n\n"}INTL ST 104A  Global Trafficking

              {"\n\n"}INTL ST 104BW  Global Gender and Sexuality

              {"\n\n"}INTL ST 106A  Global Political Ecology

              {"\n\n"}INTL ST 106B  Global Food Environment

              {"\n\n"}INTL ST 150  Racism and Global Apartheid

              {"\n\n"}INTL ST 163  Global Inequalities

              {"\n\n"}Module B:

              {"\n\n"}Approved Upper-Division Courses List Fall 2021
              {"\n\n"}Approved Upper-Division Courses List Winter 2022
              {"\n\n"}Approved Upper-Division Courses List Spring 2022
              {"\n\n"}Approved Upper-Division Courses List Summer 2022

              {"\n\n"}E. One quarter of INTL ST 183A  Global and International Studies Forum



              {"\n\n"}UNDERGRADUATE STUDENT AFFAIRS OFFICE

              {"\n\n"}The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships.

              {"\n\n"}Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              {"\n\n"}For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              {"\n\n"}Please check the following link for further information: Undergraduate Student Affairs Office Website.


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default InternationalStudies;
