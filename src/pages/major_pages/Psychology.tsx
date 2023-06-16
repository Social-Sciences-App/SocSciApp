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

const Psychology = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.mainHeaderTextStyle}>Major in Psychology (B.A.)</Text>

          <Text style={styles.text1}>
              UNDERGRADUATE PROGRAM INFORMATION
              {"\n\n"}The Department of Cognitive Sciences offers the following undergraduate degrees:

              {"\n\n"}B.A. in Psychology (this major will sunset by the end of the 2023-24AY)
              {"\n\n"}B.S. in Psychology (effective Fall 2019)
              {"\n\n"}B.S. in Cognitive Sciences (effective Fall 2013)


              {"\n\n"}COURSE OFFERINGS
              {"\n\n"}For the most current course offerings, check WEBSOC directly.
              {"\n\n"}To learn more about the classes (including prerequisites and course descriptions), click here.

              {"\n\n"}A couple of reminders:

              {"\n\n"}All academic advising questions - including DegreeWorks updates, prerequisite clearance, academic advising, unit enrollment increases, change of major requests, and other academic related questions - are handled by the UG Student Affairs Office not the department. Check this page for appropriate forms and this page for advising options/contact information.
              {"\n\n"}Courses are restricted to MAJORS only until all enrollment windows are open. Some courses may remain restricted to majors for the duration of the quarter. For specific dates, check the School of Social Sciences comments at the top of the Schedule of Classes (WEBSOC).
              {"\n\n"}For courses cross-listed between COGS and PSYCH, the COGS listing will be open to BS COG SCI majors while the PSYCH listing will be open to BS and BA PSYCH majors, unless otherwise stated.
              {"\n\n"}If a course has a B or X restriction listed, you may obtain an authorization code by contacting the instructor listed for the course.
              {"\n\n"}If no instructor is listed, do not contact the instructor who last taught the course. For the research method course offerings (112A/LA, 112N/LN, and 119) in F23, please read the email sent to all BS Cog Sci and BS Psych majors.
              {"\n\n"}If a course does not have a B or X restriction listed, NO authorization codes are being used. Please do not request one from the instructor.


              {"\n\n"}The tentative 2023-24 Course Offerings are listed below. Additional courses for Winter 2024 and Spring 2024 are anticipated and will be added once confirmed. Please check back for updates. WEBSOC will reflect the actual offerings for each quarter.

              {"\n\n"}FALL 2023 COURSES:

              {"\n\n"}Course Number	Course Title	  Instructor
              {"\n\n"}COGS 10A/PSYCH 10A	Expl Data Analysis	Rouder
              {"\n\n"}COGS 14P/PSYCH 14P	Scientific Python	Srinivasan
              {"\n\n"}COGS 60N/PSYCH 60N	Neurobio Cognition	Brewer
              {"\n\n"}COGS H101A/PSYCH H101A	Honors Seminar I - Open to Honors in Psych/Cog Sci Students	Dosher
              {"\n\n"}COGS 106	Comput Lab Skills	Srinivasan
              {"\n\n"}COGS 112A-LA/PSYCH 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              {"\n\n"}COGS 112N-LN/PSYCH 112N-LN	Intro FMRI Research/FMRI Research Lab	Staff
              {"\n\n"}COGS 140L/PSYCH 140L	Princpl Learng Thry	Liljeholm

              {"\n\n"}PSYCH 7A	Intro to Psychology	Hagedorn
              {"\n\n"}PSYCH 9A	Psych Fundamentals	Peters
              {"\n\n"}PSYCH 9B	Psych Fundamentals	Sarnecka
              {"\n\n"}PSYCH 9C	Psych Fundamentals	Offered by PSCI
              {"\n\n"}PSYCH 10A/COGS 10A	Expl Data Analysis	Rouder
              {"\n\n"}PSYCH 14P/COGS 14P	Scientific Python	Srinivasan
              {"\n\n"}PSYCH 56L	Acquisition of Lang	Offered by LSCI
              {"\n\n"}PSYCH 60N/COGS 60N	Neurobio Cognition	Brewer
              {"\n\n"}PSYCH H101A/COGS H101A	Honors Seminar I  - Open to Honors in Psych/Cog Sci Students	Dosher
              {"\n\n"}PSYCH 112A-LA/COGS 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              {"\n\n"}PSYCH 112N-LN/COGS 112N-LN	Intro FMRI Research/FMRI Research Lab	Staff
              {"\n\n"}PSYCH 119	Comp Model of Behav	Staff
              {"\n\n"}PSYCH 120A	Abnormal Psychology	Lewis
              {"\n\n"}PSYCH 120D	Developmental Psych (Chernyak)	Chernyak
              {"\n\n"}PSYCH 120P	Personality Theory	Lewis
              {"\n\n"}PSYCH 122I	Organiz/Indust Psyc	Lewis
              {"\n\n"}PSYCH 129	Evolutionary Psych	Berg
              {"\n\n"}PSYCH 129	Creativity	Hagedorn
              {"\n\n"}PSYCH 129	Psych of Music	Hagedorn
              {"\n\n"}PSYCH 140L	Princpl Learng Thry	Liljeholm
              {"\n\n"}PSYCH 143P	Human Prblm Solving	PIzlo
              {"\n\n"}PSYCH 161H	Hearing & The Brain	Offered by BIO SCI
              {"\n\n"}PSYCH 169	Intro to Cog Aging	Mander
              {"\n\n"}PSYCH 177D	Deviance	Offered by CRM/LAW
              {"\n\n"}PSYCH 178N	Soc Psych Networks	Offered by SOCIOL




              {"\n\n"}WINTER 2024 COURSES:

              {"\n\n"}Course Number	Course Title	   Instructor
              {"\n\n"}COGS 10B/PSYCH 10B	Prob and Inference	Staff
              {"\n\n"}COGS 14M/PSYCH 14M	Matlab	Steyvers
              {"\n\n"}COGS H101B/PSYCH H101B	Honors Seminar II  - Open to Honors in Psych/Cog Sci Students	Richards
              {"\n\n"}COGS 108	Neural Analytics	Staff
              {"\n\n"}COGS 112P-LP/PSYCH 112P-LP	Perception Research/Perception Lab	Staff
              {"\n\n"}COGS 112R-LR/PSYCH 112R-LR	Cog Robotics/Cognitive Robot Lab	Krichmar
              {"\n\n"}COGS 130A/PSYCH 130A	Percep & Sens Proc	D'Zmura
              {"\n\n"}COGS 130N/PSYCH 130N	Neurosci Perception	Brewer
              {"\n\n"}COGS 131B/PSYCH 131B	Hearing	Berg
              {"\n\n"}COGS 140J/PSYCH 140J	Judg & Dec Making	Lee
              {"\n\n"}COGS 160A/PSYCH 140J	Cog Neuroscience	Grossman

              {"\n\n"}PSYCH 7A	Intro to Psych	Hagedorn
              {"\n\n"}PSYCH 9A	Psych Fundamentals	Hagedorn
              {"\n\n"}PSYCH 9B	Psych Fundamentals	Staff
              {"\n\n"}PSYCH 9C	Psych Fundamentals	Offered by PSCI
              {"\n\n"}PSYCH 10B/COGS 10B	Prob and Inference	Staff
              {"\n\n"}PSYCH 14M/COGS 14M	Matlab	Steyvers
              {"\n\n"}PSYCH H101B/COGS H101B	Honors Seminar II  - Open to Honors in Psych/Cog Sci Students	Richards
              {"\n\n"}PSYCH 112P-LP/COGS 112P-LP	Perception Research/Perception Lab	Staff
              {"\n\n"}PSYCH 112R-LR/COGS 112R-LR	Cog Robotics/Cognitive Robot Lab	Krichmar
              {"\n\n"}PSYCH 113T	Intro Tests&Measure	Rouder
              {"\n\n"}PSYCH 122C	Clinical Psych	Lewis
              {"\n\n"}PSYCH 124S	Sports Psychology	Lewis
              {"\n\n"}PSYCH 129	Advance I/O Psych	Lewis
              {"\n\n"}PSYCH 130A/COGS 130A	Percep & Sens Proc	D'Zmura
              {"\n\n"}PSYCH 130N/COGS 130N	Neurosci Perception	Brewer
              {"\n\n"}PSYCH 131B/COGS 131B	Hearing	Berg
              {"\n\n"}PSYCH 140J/COGS 140J	Judg & Dec Making	Lee
              {"\n\n"}PSYCH 160A/COGS 160A	Cog Neuroscience	Grossman
              {"\n\n"}PSYCH 169	Evol of Lang&Music	Hickok
              {"\n\n"}PSYCH 169	Metacognition	Peters




              {"\n\n"}SPRING 2024 COURSES:

              {"\n\n"}Course Number	Course Title	Instructor
              {"\n\n"}COGS 10C/PSYCH 10C	Statistical Models	Hagedorn
              {"\n\n"}COGS 14P/PSYCH 14P	Scientific Python	Srinivasan
              {"\n\n"}COGS H101C/PSYCH H101C	Honors Seminar III - Open to Honors in Psych/Cog Sci Students	Dosher
              {"\n\n"}COGS 107	Cognitive Modeling	Lee
              {"\n\n"}COGS 109	Cog Sci Res Seminar	Dosher
              {"\n\n"}COGS 112A-LA/PSYCH 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              {"\n\n"}COGS 112M-LM/PSYCH 112M-LM	Psych Research Methods/Res Methods Lab	Staff
              {"\n\n"}COGS 112P-LP/PSYCH 112P-LP	Perception Research/Perception Lab	Staff
              {"\n\n"}COGS 131A/PSYCH 131A	Vision	D'Zmura
              {"\n\n"}COGS 140M/PSYCH 140M	Human Memory	Bornstein
              {"\n\n"}COGS 160D/PSYCH 160D	Brain Disorders	Brewer

              {"\n\n"}PSYCH 7A	Intro to Psych	Hagedorn
              {"\n\n"}PSYCH 9A	Psych Fundamentals	Berg
              {"\n\n"}PSYCH 9B	Psych Fundamentals	Offered by PSCI
              {"\n\n"}PSYCH 9C	Psych Fundamentals	Lewis
              {"\n\n"}PSYCH 10C/COGS 10C	Statistical Models	Hagedorn
              {"\n\n"}PSYCH 14P/COGS 14P	Scientific Python	Srinivasan
              {"\n\n"}PSYCH H101C/COGS H101C	Honors Seminar III - Open to Honors in Psych/Cog Sci Students	Dosher
              {"\n\n"}PSYCH 112A-LA/COGS 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              {"\n\n"}PSYCH 112M-LM/COGS 112M-LM	Psych Res Methods/Res Methods Lab	Staff
              {"\n\n"}PSYCH 120A	Abnormal Psychology	Lewis
              {"\n\n"}PSYCH 120P	Personality Theory	Lewis
              {"\n\n"}PSYCH 131A/COGS 131A	Vision	D'Zmura
              {"\n\n"}PSYCH 139	Special Topics/TBD	Steyvers
              {"\n\n"}PSYCH 140M/COGS 140M	Human Memory	Bornstein
              {"\n\n"}PSYCH 149	AI in Culture and Media	Krichmar
              {"\n\n"}PSYCH 160D/COGS 160D	Brain Disorders	Brewer
              {"\n\n"}PSYCH 169	Consciousness & Brain	Saberi




              {"\n\n"}UNDERGRADUATE STUDENT AFFAIRS OFFICE
              {"\n\n"}Academic advising is handled by the School of Social Sciences' Undergraduate Student Affairs Office and not within the department. The mission of the Undergraduate Student Affairs is to provide quality, student-centered educational support and to offer services that meet the administrative, academic goals of students, the School and the University.

              {"\n\n"}The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships. Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              {"\n\n"}For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              {"\n\n"}Please check the following link for further information: Undergraduate Student Affairs Office Website.



              {"\n\n"}HONORS PROGRAM IN PSYCHOLOGY AND COGNITIVE SCIENCES
              {"\n\n"}The Honors Program is designed for students in the Psychology (Cognitive Sciences) major who are interested in pursuing graduate study in psychology or seeking challenging research experiences as a capstone to their undergraduate experience. The program includes rigorous courses in Experimental Psychology, seminar classes, over one year of research experience, and culminates in an honors thesis.

              {"\n\n"}For information about the honors program and to download the application, please visit: Honors Program in Psychology.

              {"\n\n"}If you have questions about the Honors Program, please send an e-mail addressed to Professor Barbara Dosher (Honors Director) at: cogsci@uci.edu.



              {"\n\n"}HONOR SOCIETY (PSI CHI)
              {"\n\n"}Students meeting the following criteria are eligible to become part of Psi Chi, the National Honor Society in Psychology.

              {"\n\n"}Junior or Senior status
              {"\n\n"}Completed at least two quarters at UCI
              {"\n\n"}Completed at least four upper division psychology courses (at UCI)
              {"\n\n"}Psychology GPA in the upper 10% of the major
              {"\n\n"}Overall GPA of at least 3.3
              {"\n\n"}The UCI chapter of Psi Chi invites new members twice a year. Invitations are sent by e-mail no later than November 15 and April 15.

              {"\n\n"}Invitations are sent to undergraduate majors in Psychology or Psychology and Social Behavior who meet the above criteria.
              {"\n\n"}Invitees will be asked to provide a letter of recommendation from a psychology professor, and evidence of a genuine interest in psychology (e.g., volunteering in a lab or clinic).

              {"\n\n"}If you have questions about Psi Chi, please send an e-mail to: cogsci@uci.edu.

              {"\n\n"}Psi Chi Website



              {"\n\n"}ROBERT J. GLUSHKO PRIZE
              {"\n\n"}The Robert J. Glushko Prize recognizes undergraduate excellence in Cognitive Science. A letter of recognition and a $500 cash prize will be awarded each year to undergraduate Cognitive Sciences or Psychology (B.S.) majors who are engaged with the Cognitive Science community at UCI and have achieved excellence through:

              {"\n\n"}Outstanding achievement in coursework across the Psychology or Cognitive Sciences curriculum; and
              {"\n\n"}Sustained engagement with and contribution to faculty-directed research culminating in a paper and/or an oral research presentation.

              {"\n\n"}The research paper may be an honors' thesis, working paper, grant submission, including SURP/UROP proposals, or conference or journal submission. A paper produced as part of a collaboration, including with faculty advisors and graduate students, is eligible.

              {"\n\n"}The qualifying oral presentations may be given in a research group, lab or conference setting. The student must give the presentation for it to be eligible.  A pdf of the presentation should be submitted.

              {"\n\n"}Eligibility: UCI students majoring in B.S. Cognitive Sciences or B.S. Psychology.

              {"\n\n"}Applications for the 2022-23 academic year are being accepted. The deadline to apply is Friday, June 5, 2023. Instructions including the application form can be found at this link: 2023 Glushko Prize Application.

              {"\n\n"}The inaugural (2021-22) Robert J. Glushko prize recipients were:

              {"\n\n"}Vivian Nguyen, a B.S. Psychology major, for UROP-funded research on the way in which generic statements communicate information. Vivian is mentored by Professor Barbara Sarnecka and graduate student Jeff Coon.
              {"\n\n"}Ren-Hui Michelle Tham, a B.S. Cognitive Sciences major, for UROP-funded research on instrumental divergence in goal-directed choice. Michelle is mentored by Professor Mimi Liljeholm.


              {"\n\n"}COGNITIVE SCIENCE ASSOCIATION
              {"\n\n"}The purpose of the CSA is to empower students in the Cognitive Science major and related majors by creating a tight-knit community through interactions with guest speakers, professional development, and just having fun together. Most importantly, the CSA wants to help the cognitive sciences community have more opportunities to learn and volunteer, as well as have peer academic support

              {"\n\n"}Cognitive Science Association Website



              {"\n\n"}PSYCHOLOGY STUDENT ASSOCIATION
              {"\n\n"}The core purpose of the Psychology Student Association (PSA) is to help students, primarily those in the Psychology majors, to advance their academic achievements by providing different resources that connect to their fields of interests, as well as widen their social circle.

              {"\n\n"}Psychology Student Association Website


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Psychology;
