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

const MajorReqsPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Sociology (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/sociology_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              David J. Frank, Department Chair
              {"\n\n"}4107 Social Science Plaza A
              {"\n\n"}949-824-1117
              {"\n\n"}http://www.sociology.uci.edu/

              {"\n\n"}Sociology involves the study of societies and human groups. It examines social conflict and cooperation, inequality and the social organization of families, communities, workplaces and nations. The program at UCI covers the breadth of the discipline while giving students opportunities to conduct independent research, participate in an Honors Program, and to take advantage of departmental opportunities in such areas as business, economy and organizations; diversity and inequality; global and international sociology; and social problems and public policy. All students take basic courses on social institutions, theory and methods. Students then take more specialized courses such as race and ethnicity, social psychology, sociology of gender, or political sociology. Courses are enriched by ongoing faculty research on such topics as the work and family of immigrants to the U.S., economic change in Asia, the relation between women and men in different social classes and ethnic groups, and attitudes on sexual behavior.

              {"\n\n"}In addition to developing students’ ability to critically analyze and understand social patterns, the major is relevant to professional careers in education, social work, urban planning, law, business, public health, non-governmental organization, and government service. It also provides training for advanced graduate work in sociology and related fields.


          </Text>
          <Text style={styles.text1}>
              Sociology studies patterns of relationships among people, how behavior is shaped by these patterns of relationships, and how conflicts and cooperation among groups affect social structure and effect social change. Sociology majors are introduced to the most important ideas, methods, and findings of sociology in the introductory courses, explore basic subareas of sociology in the lower division courses, and pursue specialized study in the upper-division courses.

              {"\n\n"}In research and teaching, the Department's faculty emphasize empirical sociological research in such areas as small groups, organizations, work, art, world systems, gender, family, and social networks.

              {"\n\n"}All students must meet the University Requirements.
              {"\n\n"}All students must meet the School Requirements.
              {"\n\n"}Departmental Requirements for the Major
              {"\n\n"}School requirements must be met and must include 12 courses (48 units) as specified below:

              {"\n\n"}A. Complete the following:
              {"\n\n"}SOCIOL 1	Introduction to Sociology
              {"\n\n"}SOCIOL 2	Globalization and Transnational Sociology
              {"\n\n"}or SOCIOL 3	Social Problems
              {"\n\n"}B. Complete one course in methods and one in theory:
              {"\n\n"}SOCIOL 110	Research Methods
              {"\n\n"}SOCIOL 120	Sociological Theory
              {"\n\n"}C. Complete one course in research design and implementation:
              {"\n\n"}SOCIOL 180A	Sociology Majors Seminar
              {"\n\n"}D. Complete seven SOCIOL courses, of which no more than three may be lower-division.
              {"\n\n"}E. Complete three additional School of Social Sciences courses, of which no more than one may be lower-division.
          </Text>
              <Text style={styles.headerTextStyle}>
                  Sociology Minor Requirements
              </Text>
          <Text>
              Sociology Minor Requirements
              {"\n\n"}Requirements for the minor are met by taking seven Sociology courses (28 units) as specified below:

              {"\n\n"}A. Complete the following:
              {"\n\n"}SOCIOL 1	Introduction to Sociology
          {"\n\n"}SOCIOL 2	Globalization and Transnational Sociology
          {"\n\n"}or SOCIOL 3	Social Problems
          {"\n\n"}B. Complete one course in methods and one in theory:
          {"\n\n"}SOCIOL 110	Research Methods
          {"\n\n"}SOCIOL 120	Sociological Theory
          {"\n\n"}C. Select three SOCIOL courses, of which no more than two may be lower-division.
          {"\n\n"}Lower-Division Courses
          {"\n\n"}SOCIOL 2-79 1
          {"\n\n"}Upper-Division Courses
          {"\n\n"}SOCIOL 112-199 2
          {"\n\n"}SOCIOL 121-179 2
          {"\n\n"}1
          {"\n\n"}Cannot count SOCIOL 2 if used to complete section A., or cannot count SOCIOL 3 if used to complete section A.

          {"\n\n"}2
          {"\n\n"}SOCIOL 110 and SOCIOL 120 cannot be used to fulfill this requirement.

          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default MajorReqsPage;
