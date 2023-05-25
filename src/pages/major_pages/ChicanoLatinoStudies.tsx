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

const ChicanoLatinoStudies = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Chicano/Latino Studies (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/cls_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              The major in Chicano/Latino Studies is also designed to be flexible to allow students to start at various points in their undergraduate career and to combine, when they wish, with another major. Many students join our major in their 3rd or 4th year. We embed opportunities for conducting your own independent research within our major so all declared majors can carry out a project that is of interest to them. Moreover, many heritage speakers fulfill the Spanish 2A requirement through AP credit in high school or by passing a simple exam offered through the UCI Academic Spanish Testing Center


              {"\n\n"}Interested, but not sure how to make it work?
              {"\n\n"}Reach out to our Director of Undergraduate Studies. You can also email Estela Magaña (emagana@uci.edu) or Chika Kono (ckono@uci.edu) in Undergraduate Student Affairs for questions about your DegreeWorks.


              {"\n\n"}Departmental Requirements for the Major
              {"\n\n"}For the most up to date information on major and minor requirements, refer to the UCI General Catalogue.

              {"\n\n"}Five core courses: Chicano/Latino Studies 61, 62, 63, 101, 102W.

              {"\n\n"}Spanish 2A or its equivalent; many heritage speakers fulfill this requirement through AP credit or by passing a test. Click the link above to schedule this simple one-time test.
              {"\n\n"}One comparative ethnic studies course selected from either African American Studies, Asian American Studies, or Education 124. Course must focus on the study of African American or Asian American communities in the United States.
              {"\n\n"}Three upper-division electives, one from each of the following categories: Literature, Arts, and Media (Chicano/Latino Studies 110-129); History (Chicano/Latino Studies 130-139); Inequalities and Social Context (Chicano/Latino Studies 140-189)
              {"\n\n"}Four additional elective courses, three of which must be upper-division, selected from Chicano/Latino Studies courses. Electives may include Independent Study courses (Chicano/Latino Studies 199). Students may obtain credit for one of these three courses through participation in a study abroad program in Mexico. Students must consult with the Department office for additional information regarding this option.
              {"\n\n"}Residence Requirement for the Major
              {"\n\n"}A minimum of five upper-division courses required for the major must be completed successfully at UCI. Courses taken through the UC Education Abroad Program will be counted toward satisfaction of the residence requirement. To count study abroad courses for credit towards one of our classes please make sure to save the syllabus and send it to the Undergraduate Director for approval once you return.

              {"\n\n"}Opportunities for Optional Independent Research Projects
              {"\n\n"}Students are encouraged to pursue field research and write a substantial research paper on topics of their choice under the guidance of Chicano/Latino faculty members. Often, this project will grow out of issues examined in Chicano/Latino Studies 102W (Research Seminar). Research projects typically involve a combination of library research and fieldwork in the Chicano/Latino community. Methods and analytical frameworks vary depending on the student and faculty advisors. Interested students should enroll in Chicano/Latino Studies 199 (Independent Study).




          </Text>

          <Text style={styles.headerTextStyle}>
              Requirements for the Minor
              </Text>
          <Text style={styles.text1}>
              For the most up to date information on major and minor requirements, refer to the UCI General Catalogue.

              {"\n\n"}Completion of three core courses: Chicano/Latino Studies 61, 62, 63; three upper-division courses selected from Chicano/Latino Studies 100-189; and Spanish 2A or its equivalent.

              {"\n\n"}Residence Requirements for the Minor: Other than the language requirement, no more than two courses taken at other academic institutions may be used toward satisfaction of minor.

              {"\n\n"}In addition to satisfying the requirements for the major or minor, students are encouraged to take advantage of the variety of unique educational opportunities available at UCI. Through the Education Abroad Program (EAP), students receive academic credit while studying at universities in Mexico, Chile, Costa Rica, Brazil, or Spain. Internship opportunities with private and public institutions concerned with the Chicano/Latino communities are available in Orange County, Sacramento, and Washington, D.C.

              {"\n\n"}Independent research with faculty on Chicano/Latino issues is also encouraged. Student research is conducted and given academic credit through independent study or group research courses. The Undergraduate Research Opportunities Program (UROP) and the Summer Academic Enrichment Program (SAEP) are examples of programs at UCI which allow students to work as research assistants with professors.


          </Text>


      </ScrollView>
    </SafeAreaView>
  );
};

export default ChicanoLatinoStudies;
