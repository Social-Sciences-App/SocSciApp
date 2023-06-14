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
import {Card, DataTable} from 'react-native-paper';

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
      fontSize: 15
  },
    mainHeaderTextStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
  textStyle: {
    textAlign: 'center',
    padding: 20,
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
      margin: 20
    },
});

const Anthropology = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>

        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
        <Text style={styles.mainHeaderTextStyle}>Major in Anthropology (B.A.)</Text>

            <Text style={styles.text1}>
                Our major prepares students to embark on a wide range of careers, to pursue graduate studies, and to continue to learn and achieve in our culturally diverse world. Our curriculum develops students' knowledge and skills, including 1) an understanding of cultural diversity and global relationships, 2) the fundamentals of conducting research and analyzing sources of information through ethnographic and other anthropological techniques, and 3) communication skills in organizing and presenting information in written reports and oral presentations.

                </Text>
          <Text style={styles.headerTextStyle}>
                Where to begin?
              </Text>
          <Text style={styles.text1}>
                All Anthropology majors must take Anthro 2A. Many students start with Anthro 2A or 2B, and sometimes 2C or 2D. They are big lecture classes and give an excellent overview of the main branches of Anthropology.

                {"\n\n"}But you can also begin with our other lower division offerings (like Anthro 25A, 30A, 30C, or 45A). These courses introduce you to anthropological perspectives on critical global issues like environmental politics; science, technology, and society; or visual culture.

              {"\n\n"}Are you interested in a particular geographic area or world region? A particular set of religious practices and beliefs? A particular set of social and cultural problems? If so, you might want to explore the offerings in the upper division classes. Many of these courses are smaller and give a taste of current research and methods in Anthropology. There is no reason not to take an upper division class (unless there are pre-requisites listed in the Schedule of Classes, of course) as you explore the field of anthropology and consider majoring in it.

              {"\n\n"}The formal requirements for the major are listed below.

          </Text>

              <Text style={styles.headerTextStyle}>

              Departmental Requirements for the Major
              </Text>
                <Text>
                School Requirements must be met and must include 12 courses (48 units) as specified below:
                </Text>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>A. Complete the following: E. Select six additionalelective courses from the following, four of which must be upper-division:</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2A</DataTable.Cell>
                    <DataTable.Cell>Introduction to Sociocultural Anthropology</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>B. Select one of the following:</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2B</DataTable.Cell>
                    <DataTable.Cell>Introduction to Biological Anthropology</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2C</DataTable.Cell>
                    <DataTable.Cell>Introduction to Archaeology</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2D</DataTable.Cell>
                    <DataTable.Cell>Introduction to Language and Culture</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>C. Select one of the following:</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2B</DataTable.Cell>
                    <DataTable.Cell>Introduction to Biological Anthropology</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2C</DataTable.Cell>
                    <DataTable.Cell>Introduction to Archaeology</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 2D</DataTable.Cell>
                    <DataTable.Cell>Introduction to Language and Culture</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ANTHRO 20A-89</DataTable.Cell>
                    <DataTable.Cell>Any lower-division elective</DataTable.Cell>
                </DataTable.Row>



            </DataTable>

            <Text style={styles.text1}>




                {"\n\n"}
                {"\n\n"}

                {"\n\n"}D. Complete the following:
                {"\n\n"}ANTHRO 100A
                {"\n\n"}Ethnography and Anthropological Methods

                {"\n\n"}ANTHRO 100B
                {"\n\n"}Anthropology Careers

                {"\n\n"}ANTHRO 180AW
                {"\n\n"}Anthropology Majors Writing Seminar

                {"\n\n"}E. Select six additional upper-division elective courses from the following:
                {"\n\n"}ANTHRO 120-179




                {"\n\n"}Departmental Requirements for the Major Prior to Academic year 2019-2020:
                {"\n\n"}School requirements must be met and must include 12 courses (48 units) as specified below:

                {"\n\n"}Anthropology 2A.
                {"\n\n"}Anthropology 2B, 2C, or 2D.
                {"\n\n"}Anthropology 30A. Students prior to 2019-2020 Academic year were required to take Anthro 30B, which is now Anthro 100A.
                {"\n\n"}Three topical courses (12 units) from Anthropology 120-159, 170-179.
                {"\n\n"}Two courses (eight units) in a geographical area, from Anthropology 160-169.
                {"\n\n"}Four additional elective courses (16 units) from Anthropology 30A, 30B, 40-179, 180A.
                {"\n\n"}Students are strongly encouraged to take Anthropology 180A after they have had at least three courses beyond Anthropology 2A and 2B, 2C, or 2D. Students are also strongly encouraged to take both Anthropology 30A and 30B.



                {"\n\n"}Study Abroad:
                {"\n\n"}The faculty encourages Anthropology majors or minors to study abroad and experience a different culture while making progress toward degree objectives. The Center for International Education, which includes the Education Abroad Program (EAP) and the International Opportunities Program (IOP), assists students in taking advantage of many worldwide opportunities. For example, EAP offers excellent opportunities to study anthropology at many universities abroad and courses taken for departmental requirement C, D, and E would be excellent choices to take. Study abroad also can provide opportunities for cross-cultural experience, field research, and foreign language training. See the Center for International Education section of the Catalogue for additional information.

                {"\n\n"}GUMP (Graduate-Undergraduate Mentoring Program):

                {"\n\n"}The Graduate-Undergraduate Mentoring Program (GUMP) pairs undergraduate students majoring or minoring in anthropology with a graduate student mentor. Mentoring focuses on topics such as: tips for success in upper division anthropology classes, how to use anthropology after graduation, research opportunities, and applying to graduate school. Interested undergraduates should fill out the following form:
                {"\n\n"}https://docs.google.com/forms/d/e/1FAIpQLSd_aaIq-6gGIa0AW-0nTVSMhArF2WGQkQvD66a5RqRUZ4y_Mw/viewform?usp=sf_link

                {"\n\n"}UROP and SURP:
                {"\n\n"}Our undergraduate majors have also taken advantage of UROP and SURP to conduct independent research locally or abroad, often leading to honors' theses or presentations at conferences. See the UROP website for more information.



                {"\n\n"} DEADLINES: Application to Graduate
                {"\n\n"}Please see the Social Sciences Undergraduate Student Affairs website for detailed graduate application procedures and deadlines.
                {"\n\n"}If you miss the application deadline, you may not be able to order commencement tickets for your guests and your name will not appear in the commencement program.

                {"\n\n"}If you need to make changes to your graduation application:
                {"\n\n"}You can edit your application if its status is “PENDING.”  If the status is “RECEIVED,” you must contact our office to request the change.

                {"\n\n"}If you are a double major:
                {"\n\n"}Double majors must finish both sets of degree requirements within the same quarter. Students planning to graduate in only one major and continue with the second major should consult with their academic advisor about a possible Second Baccalaureate prior to the end of the expected quarter of graduation.

                {"\n\n"}Reminders:

                {"\n\n"}If you are pursuing a minor, be sure to notify a School of Social Sciences academic advisor to add the minor to your online degree audit in Student Access prior to submitting your Application for Graduation.
                {"\n\n"}If you expect to complete all graduation requirements by the end of Spring quarter, then you may apply for Spring graduation; if you expect to complete all graduation requirements by the end of Summer Session I or Summer Session II, then you would apply for Summer graduation.  Summer graduates can participate in the June ceremony.
                {"\n\n"}If you have completed coursework at a community college that is needed for your degree, please be sure you have requested the official transcript(s) be submitted directly to the School of Social Sciences Undergraduate Student Affairs Office, 1201 Social & Behavioral Sciences Gateway, Irvine, CA  92697-5100.


                {"\n\n"}Commencement Ceremonies
                {"\n\n"}Students graduating in Fall, Winter or Spring may participate in the Commencement Ceremonies for Spring of the academic year in which they graduate. Students graduating in Summer may choose to participate in the previous year’s ceremony or wait until the following year (note that any honors will appear in the Commencement program for the year you actually graduate).

                {"\n\n"}Deadline:
                {"\n\n"}To be eligible to participate in the Commencement Ceremony, you must submit an Application for Graduation by the stated deadlines.  If you miss this deadline, you may not be able to order Commencement tickets for your guests and your name will not appear in the Commencement Program.

                {"\n\n"}Ceremony & Tickets:
                {"\n\n"}Tickets are required to attend Commencement. Ticket information is available on the Commencement website at www.commencement.uci.edu. Note: The ticket limit for the School of Social Sciences is 5 tickets/graduate.

                {"\n\n"}Academic Regalia:
                {"\n\n"}For cap & gown orders, go to the www.alumni.uci.edu.



                {"\n\n"}Resources:
                {"\n\n"}Change of Major Criteria
                {"\n\n"}Anthropology Degree Check Form
                {"\n\n"}School of Social Sciences Undergraduate Counseling Office
                {"\n\n"}Undergraduate Student Affairs (peer advising; course planning; change of major request; financial aid appeals; course substitutions; and information concerning honors, graduate and professional school, and career and internships)
                {"\n\n"}Social Sciences Academic Resource Center (scholarship information; public and community service opportunities; academic and professional support services; transfer students; certificate programs; and research opportunities)
                {"\n\n"}Research Opportunities
                {"\n\n"}Scholarship and Awards
                {"\n\n"}School of Social Sciences Student Resources
                {"\n\n"}Graduation Information
                {"\n\n"}Freshman Handbook
                {"\n\n"}Transfer Student Handbook
                {"\n\n"}Readmission to Social Sciences Policy
                {"\n\n"}Academic Honesty



            </Text>

            <Text style={styles.headerTextStyle}>
                Requirements for the Minor in Anthropology:
                </Text>
            <Text style={styles.text1}>
                Requirements for the minor in Anthropology are met by taking seven anthropology courses (28 units) as specified below:

                {"\n\n"}1. Anthropology 2A.
                {"\n\n"}2. Anthropology 2B, 2C, or 2D.
                {"\n\n"}3. Anthropology 30A or 100b
                {"\n\n"}4. Four courses (16 units) from the following: 120-179.
                {"\n\n"}School of Social Sciences Minor Degree Check Form

                {"\n\n"}Undergraduate majors and minors are welcome to participate in the activities of the Undergraduate Anthropology Club and the Undergraduate Mentoring Program (GUMP). Undergraduates are also encouraged to join Lambda Alpha, the Anthropology Honors' Society. Information on the Anthropology Club and honors program is available from the Anthropology Department Staff, in Social and Behavioral Sciences Gateway (SBSG) 3201 (Anthropology Department Suite).

                {"\n\n"}Requirements for the Minor in Medical Anthropology:
                {"\n\n"}The Medical Anthropology Minor is designed for students seeking expertise in cross-cultural understandings of illness, medicine, and the body. Students learn to analyze the experience and meanings of illness; understandings of the human body; cross-cultural mental health; social and political disease ecologies; medical practice and biotechnologies; and relationships among gender, race, class, medicine, and science.

                {"\n\n"}A particular emphasis is on the political and economic forces that shape disease burdens and the contributions medical anthropology can make to efforts to achieve global health equity.

                {"\n\n"}The minor is open to students in any school and offers excellent preparation for students interested in careers in clinical medicine, nursing, pharmacy, biological research, public health, and environmental health.

                {"\n\n"}Requirements for the minor in Medical Anthropology are met by taking seven Anthropology courses (28 units) as specified below:

                {"\n\n"}Anthropology 2A
                {"\n\n"}Anthropology 2B, 2C, or 2D
                {"\n\n"}Anthropology 30A or 100B
                {"\n\n"}Anthropology 134A
                {"\n\n"}Three topical courses (12 units) from among the following: Anthropology 25A, 121D, 125F, 128A, 128B, 132A, 134B, 134C, 134F, 134G, 134N, 136K, 139 (special topics in Cultural and Psychological Anthropology, by petition to the Undergraduate Director), Sociology 154.


                {"\n\n"}Requirements for the Minor in Archaeology:
                {"\n\n"}The program's curriculum can be found in the UCI Catalogue: http://catalogue.uci.edu/schoolofhumanities/departmentofarthistory/#minortext
                {"\n\n"}Minor’s website: https://www.humanities.uci.edu/archaeology/


            </Text>




      </ScrollView>
    </SafeAreaView>
  );
};

export default Anthropology;
