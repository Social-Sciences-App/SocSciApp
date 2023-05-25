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

              Requirements for the major include a core set of courses: Introduction to Global Studies, Global Cultures and Society, Global Political Ideologies, Global Political Economy, Human Rights and Global Governance, and Global Environmental Issues. Also required is an additional lower-division social science course, and the Global and International Studies Forum. Students also choose both a geographic focus and a global focus to enable them to broaden and deepen areas of knowledge and topics of particular interest. The final requirements are competence in a language other than English and an international experience or approved internship.


              UCI General Catalogue
              Requirements for 2022-2023
              Requirements for 2021-2022 and Prior Years
              Degree Check Forms
              International Studies Degree Check Form (Fall 2019-present)
              International Studies Degree Check Form (pre-Fall 2019)


              2021-2022 Requirements for the International Studies Major are as follows:
              A. Complete the following:

              INTL ST 1 Introduction to Global Studies
              B. Select four from the following courses:

              INTL ST 11 Global Cultures and Society
              INTL ST 12 Global Political Ideologies
              INTL ST 15 Global Political Economy
              INTL ST 16 Human Rights and Global Governance
              INTL ST 17 Global Environmental Issues
              C. Select one of the following courses:

              ANTHRO 2A Introduction to Sociocultural Anthropology
              HISTORY 21A World: Innovations
              HISTORY 21B World: Empires and Revolutions
              HISTORY 21C World: Nation, War, and Rights
              INTL ST 13 Global Economy
              INTL ST 14 Introduction to International Relations
              POL SCI 51A Introduction to Politics Around the World
              SOC SCI 5D US & World Geography
              SOCIOL 2 Globalization and Transnational Sociology
              D. Competency in a language other than English.
              Competency is established by college-level course work equivalent to UCI’s fifth quarter of study (usually 2B).

              E. Geographic Focus: Two upper-division courses in any one geographic area.


              Approved Upper-Division Courses List Fall 2021
              Approved Upper-Division Courses List Winter 2022
              Approved Upper-Division Courses List Spring 2022
              Approved Upper-Division Courses List Summer 2022
              Approved Upper-Division Courses List Fall 2022

              F. Global Focus: Select five upper-division courses. At least two courses must be from Module A.

              Module A:

              INTL ST 100 Global Trials
              INTL ST 101A Global Social Movements
              INTL ST 101B Global Cities and Slums
              INTL ST 102A Global Refugees and Stateless People
              INTL ST 103A Case Studies in Global and Planetary Health
              INTL ST 104A Global Trafficking
              INTL ST 104BW Global Gender and Sexualities
              INTL ST 106A Global Political Ecology
              INTL ST 106B Global Food Environment
              INTL ST 150 Racism and Global Apartheid
              INTL ST 163 Global Inequalities
              Module B:

              Approved Upper-Division Courses List Fall 2021
              Approved Upper-Division Courses List Winter 2022
              Approved Upper-Division Courses List Spring 2022
              Approved Upper-Division Courses List Summer 2022
              Approved Upper-Division Courses List Fall 2022

              G. Two quarters of INTL ST 183A (Global and International Studies Forum), one quarter of which must be taken during the junior or senior year as a capstone experience

              H. At least one quarter of international experience.

              Internship Opportunities

              Majors are encouraged to study abroad through the Education Abroad Program (EAP) or the International Opportunities Program (IOP), which are available for periods of a quarter, semester, year, or summer. When this is not possible, work overseas (through IOP) or a domestic internship with the UCDC Internship Program, the Washington D.C. Center Program, or the Social Science Internship Program (International Studies 197) with an international focus may be substituted.



              UNDERGRADUATE STUDENT AFFAIRS OFFICE

              The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships.

              Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              Please check the following link for further information: Undergraduate Student Affairs Office Website.


          </Text>

          <Text>
              The minor in international studies provides an interdisciplinary perspective on contemporary global issues, societies, and cultures. International studies minors acquire knowledge that will enable them to understand and contribute to shaping the rapidly evolving global community. The minor in international studies helps prepare students for graduate study or professional careers in a variety of fields in the national and international job markets such as international affairs and public policy, international business and finance, international organizations, and academic research and teaching. Requirements for the minor include a core set of courses: an introductory sequence (Global Cultures and Society, Global Politics, World History and Global Economics) and two quarters of the International Studies Public Forum. Students then choose both a regional focus (three upper-division courses on Europe and Eurasia, Africa and the Middle East, the Americas, or Asia) and a functional focus (three upper division courses on Global Security, Conflict and Conflict Resolution, International/Comparative Law, International/Transnational Organizations and Movements, Global Ethics and Human Rights, Global Identities, Global Trade, Investment and Finance, Global Development, Public Health,& Environment, or Global Population, Migration, and Diaspora). Minors in international studies are encouraged to study abroad.



              2021-2022 Requirements for the International Studies Minor are as follows:
              UCI General Catalogue



              A. Complete the following:

              INTL ST 1  Introduction to Global Studies

              B. Select one of the following:

              INTL ST 11  Global Cultures and Society

              INTL ST 12  Global Political Ideologies

              INTL ST 15  Global Political Economy

              INTL ST 16  Human Rights and Global Governance

              INTL ST 17  Global Environmental Issues

              C. Geographic Focus: Two upper-division courses in one geographic area

              Approved Upper-Division Courses List Fall 2021
              Approved Upper-Division Courses List Winter 2022
              Approved Upper-Division Courses List Spring 2022
              Approved Upper-Division Courses List Summer 2022

              D. Global Focus: Three upper-division courses. At least one must be from Module A.

              Module A:

              INTL ST 100  Global Trials

              INTL ST 101A  Global Social Movements

              INTL ST 101B  Global Cities and Slums

              INTL ST 102A  Global Refugees and Stateless People

              INTL ST 103A  Case Studies in Global and Planetary Health

              INTL ST 104A  Global Trafficking

              INTL ST 104BW  Global Gender and Sexuality

              INTL ST 106A  Global Political Ecology

              INTL ST 106B  Global Food Environment

              INTL ST 150  Racism and Global Apartheid

              INTL ST 163  Global Inequalities

              Module B:

              Approved Upper-Division Courses List Fall 2021
              Approved Upper-Division Courses List Winter 2022
              Approved Upper-Division Courses List Spring 2022
              Approved Upper-Division Courses List Summer 2022

              E. One quarter of INTL ST 183A  Global and International Studies Forum



              UNDERGRADUATE STUDENT AFFAIRS OFFICE

              The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships.

              Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              Please check the following link for further information: Undergraduate Student Affairs Office Website.


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default InternationalStudies;
