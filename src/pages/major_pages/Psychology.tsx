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

const Psychology = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Psychology (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/psych_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              UNDERGRADUATE PROGRAM INFORMATION
              The Department of Cognitive Sciences offers the following undergraduate degrees:

              B.A. in Psychology (this major will sunset by the end of the 2023-24AY)
              B.S. in Psychology (effective Fall 2019)
              B.S. in Cognitive Sciences (effective Fall 2013)


              COURSE OFFERINGS
              For the most current course offerings, check WEBSOC directly.
              To learn more about the classes (including prerequisites and course descriptions), click here.

              A couple of reminders:

              All academic advising questions - including DegreeWorks updates, prerequisite clearance, academic advising, unit enrollment increases, change of major requests, and other academic related questions - are handled by the UG Student Affairs Office not the department. Check this page for appropriate forms and this page for advising options/contact information.
              Courses are restricted to MAJORS only until all enrollment windows are open. Some courses may remain restricted to majors for the duration of the quarter. For specific dates, check the School of Social Sciences comments at the top of the Schedule of Classes (WEBSOC).
              For courses cross-listed between COGS and PSYCH, the COGS listing will be open to BS COG SCI majors while the PSYCH listing will be open to BS and BA PSYCH majors, unless otherwise stated.
              If a course has a B or X restriction listed, you may obtain an authorization code by contacting the instructor listed for the course.
              If no instructor is listed, do not contact the instructor who last taught the course. For the research method course offerings (112A/LA, 112N/LN, and 119) in F23, please read the email sent to all BS Cog Sci and BS Psych majors.
              If a course does not have a B or X restriction listed, NO authorization codes are being used. Please do not request one from the instructor.


              The tentative 2023-24 Course Offerings are listed below. Additional courses for Winter 2024 and Spring 2024 are anticipated and will be added once confirmed. Please check back for updates. WEBSOC will reflect the actual offerings for each quarter.

              FALL 2023 COURSES:

              Course Number	Course Title	  Instructor
              COGS 10A/PSYCH 10A	Expl Data Analysis	Rouder
              COGS 14P/PSYCH 14P	Scientific Python	Srinivasan
              COGS 60N/PSYCH 60N	Neurobio Cognition	Brewer
              COGS H101A/PSYCH H101A	Honors Seminar I - Open to Honors in Psych/Cog Sci Students	Dosher
              COGS 106	Comput Lab Skills	Srinivasan
              COGS 112A-LA/PSYCH 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              COGS 112N-LN/PSYCH 112N-LN	Intro FMRI Research/FMRI Research Lab	Staff
              COGS 140L/PSYCH 140L	Princpl Learng Thry	Liljeholm

              PSYCH 7A	Intro to Psychology	Hagedorn
              PSYCH 9A	Psych Fundamentals	Peters
              PSYCH 9B	Psych Fundamentals	Sarnecka
              PSYCH 9C	Psych Fundamentals	Offered by PSCI
              PSYCH 10A/COGS 10A	Expl Data Analysis	Rouder
              PSYCH 14P/COGS 14P	Scientific Python	Srinivasan
              PSYCH 56L	Acquisition of Lang	Offered by LSCI
              PSYCH 60N/COGS 60N	Neurobio Cognition	Brewer
              PSYCH H101A/COGS H101A	Honors Seminar I  - Open to Honors in Psych/Cog Sci Students	Dosher
              PSYCH 112A-LA/COGS 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              PSYCH 112N-LN/COGS 112N-LN	Intro FMRI Research/FMRI Research Lab	Staff
              PSYCH 119	Comp Model of Behav	Staff
              PSYCH 120A	Abnormal Psychology	Lewis
              PSYCH 120D	Developmental Psych (Chernyak)	Chernyak
              PSYCH 120P	Personality Theory	Lewis
              PSYCH 122I	Organiz/Indust Psyc	Lewis
              PSYCH 129	Evolutionary Psych	Berg
              PSYCH 129	Creativity	Hagedorn
              PSYCH 129	Psych of Music	Hagedorn
              PSYCH 140L	Princpl Learng Thry	Liljeholm
              PSYCH 143P	Human Prblm Solving	PIzlo
              PSYCH 161H	Hearing & The Brain	Offered by BIO SCI
              PSYCH 169	Intro to Cog Aging	Mander
              PSYCH 177D	Deviance	Offered by CRM/LAW
              PSYCH 178N	Soc Psych Networks	Offered by SOCIOL




              WINTER 2024 COURSES:

              Course Number	Course Title	   Instructor
              COGS 10B/PSYCH 10B	Prob and Inference	Staff
              COGS 14M/PSYCH 14M	Matlab	Steyvers
              COGS H101B/PSYCH H101B	Honors Seminar II  - Open to Honors in Psych/Cog Sci Students	Richards
              COGS 108	Neural Analytics	Staff
              COGS 112P-LP/PSYCH 112P-LP	Perception Research/Perception Lab	Staff
              COGS 112R-LR/PSYCH 112R-LR	Cog Robotics/Cognitive Robot Lab	Krichmar
              COGS 130A/PSYCH 130A	Percep & Sens Proc	D'Zmura
              COGS 130N/PSYCH 130N	Neurosci Perception	Brewer
              COGS 131B/PSYCH 131B	Hearing	Berg
              COGS 140J/PSYCH 140J	Judg & Dec Making	Lee
              COGS 160A/PSYCH 140J	Cog Neuroscience	Grossman

              PSYCH 7A	Intro to Psych	Hagedorn
              PSYCH 9A	Psych Fundamentals	Hagedorn
              PSYCH 9B	Psych Fundamentals	Staff
              PSYCH 9C	Psych Fundamentals	Offered by PSCI
              PSYCH 10B/COGS 10B	Prob and Inference	Staff
              PSYCH 14M/COGS 14M	Matlab	Steyvers
              PSYCH H101B/COGS H101B	Honors Seminar II  - Open to Honors in Psych/Cog Sci Students	Richards
              PSYCH 112P-LP/COGS 112P-LP	Perception Research/Perception Lab	Staff
              PSYCH 112R-LR/COGS 112R-LR	Cog Robotics/Cognitive Robot Lab	Krichmar
              PSYCH 113T	Intro Tests&Measure	Rouder
              PSYCH 122C	Clinical Psych	Lewis
              PSYCH 124S	Sports Psychology	Lewis
              PSYCH 129	Advance I/O Psych	Lewis
              PSYCH 130A/COGS 130A	Percep & Sens Proc	D'Zmura
              PSYCH 130N/COGS 130N	Neurosci Perception	Brewer
              PSYCH 131B/COGS 131B	Hearing	Berg
              PSYCH 140J/COGS 140J	Judg & Dec Making	Lee
              PSYCH 160A/COGS 160A	Cog Neuroscience	Grossman
              PSYCH 169	Evol of Lang&Music	Hickok
              PSYCH 169	Metacognition	Peters




              SPRING 2024 COURSES:

              Course Number	Course Title	Instructor
              COGS 10C/PSYCH 10C	Statistical Models	Hagedorn
              COGS 14P/PSYCH 14P	Scientific Python	Srinivasan
              COGS H101C/PSYCH H101C	Honors Seminar III - Open to Honors in Psych/Cog Sci Students	Dosher
              COGS 107	Cognitive Modeling	Lee
              COGS 109	Cog Sci Res Seminar	Dosher
              COGS 112A-LA/PSYCH 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              COGS 112M-LM/PSYCH 112M-LM	Psych Research Methods/Res Methods Lab	Staff
              COGS 112P-LP/PSYCH 112P-LP	Perception Research/Perception Lab	Staff
              COGS 131A/PSYCH 131A	Vision	D'Zmura
              COGS 140M/PSYCH 140M	Human Memory	Bornstein
              COGS 160D/PSYCH 160D	Brain Disorders	Brewer

              PSYCH 7A	Intro to Psych	Hagedorn
              PSYCH 9A	Psych Fundamentals	Berg
              PSYCH 9B	Psych Fundamentals	Offered by PSCI
              PSYCH 9C	Psych Fundamentals	Lewis
              PSYCH 10C/COGS 10C	Statistical Models	Hagedorn
              PSYCH 14P/COGS 14P	Scientific Python	Srinivasan
              PSYCH H101C/COGS H101C	Honors Seminar III - Open to Honors in Psych/Cog Sci Students	Dosher
              PSYCH 112A-LA/COGS 112A-LA	Experimental Psych/Expermntl Psych Lab	Staff
              PSYCH 112M-LM/COGS 112M-LM	Psych Res Methods/Res Methods Lab	Staff
              PSYCH 120A	Abnormal Psychology	Lewis
              PSYCH 120P	Personality Theory	Lewis
              PSYCH 131A/COGS 131A	Vision	D'Zmura
              PSYCH 139	Special Topics/TBD	Steyvers
              PSYCH 140M/COGS 140M	Human Memory	Bornstein
              PSYCH 149	AI in Culture and Media	Krichmar
              PSYCH 160D/COGS 160D	Brain Disorders	Brewer
              PSYCH 169	Consciousness & Brain	Saberi




              UNDERGRADUATE STUDENT AFFAIRS OFFICE
              Academic advising is handled by the School of Social Sciences' Undergraduate Student Affairs Office and not within the department. The mission of the Undergraduate Student Affairs is to provide quality, student-centered educational support and to offer services that meet the administrative, academic goals of students, the School and the University.

              The Student Affairs office can assist you with academic advising, course planning, change of major request, financial aid appeals, course substitutions, and information concerning honors, graduate and professional school, and career and internships. Appointments with academic counselors are scheduled for majors in the School of Social Sciences. All others are able to speak with a Peer Advisor at any time.

              For assistance, please contact: socsci@uci.edu or (949) 824-6803.

              Please check the following link for further information: Undergraduate Student Affairs Office Website.



              HONORS PROGRAM IN PSYCHOLOGY AND COGNITIVE SCIENCES
              The Honors Program is designed for students in the Psychology (Cognitive Sciences) major who are interested in pursuing graduate study in psychology or seeking challenging research experiences as a capstone to their undergraduate experience. The program includes rigorous courses in Experimental Psychology, seminar classes, over one year of research experience, and culminates in an honors thesis.

              For information about the honors program and to download the application, please visit: Honors Program in Psychology.

              If you have questions about the Honors Program, please send an e-mail addressed to Professor Barbara Dosher (Honors Director) at: cogsci@uci.edu.



              HONOR SOCIETY (PSI CHI)
              Students meeting the following criteria are eligible to become part of Psi Chi, the National Honor Society in Psychology.

              Junior or Senior status
              Completed at least two quarters at UCI
              Completed at least four upper division psychology courses (at UCI)
              Psychology GPA in the upper 10% of the major
              Overall GPA of at least 3.3
              The UCI chapter of Psi Chi invites new members twice a year. Invitations are sent by e-mail no later than November 15 and April 15.

              Invitations are sent to undergraduate majors in Psychology or Psychology and Social Behavior who meet the above criteria.
              Invitees will be asked to provide a letter of recommendation from a psychology professor, and evidence of a genuine interest in psychology (e.g., volunteering in a lab or clinic).

              If you have questions about Psi Chi, please send an e-mail to: cogsci@uci.edu.

              Psi Chi Website



              ROBERT J. GLUSHKO PRIZE
              The Robert J. Glushko Prize recognizes undergraduate excellence in Cognitive Science. A letter of recognition and a $500 cash prize will be awarded each year to undergraduate Cognitive Sciences or Psychology (B.S.) majors who are engaged with the Cognitive Science community at UCI and have achieved excellence through:

              Outstanding achievement in coursework across the Psychology or Cognitive Sciences curriculum; and
              Sustained engagement with and contribution to faculty-directed research culminating in a paper and/or an oral research presentation.

              The research paper may be an honors' thesis, working paper, grant submission, including SURP/UROP proposals, or conference or journal submission. A paper produced as part of a collaboration, including with faculty advisors and graduate students, is eligible.

              The qualifying oral presentations may be given in a research group, lab or conference setting. The student must give the presentation for it to be eligible.  A pdf of the presentation should be submitted.

              Eligibility: UCI students majoring in B.S. Cognitive Sciences or B.S. Psychology.

              Applications for the 2022-23 academic year are being accepted. The deadline to apply is Friday, June 5, 2023. Instructions including the application form can be found at this link: 2023 Glushko Prize Application.

              The inaugural (2021-22) Robert J. Glushko prize recipients were:

              Vivian Nguyen, a B.S. Psychology major, for UROP-funded research on the way in which generic statements communicate information. Vivian is mentored by Professor Barbara Sarnecka and graduate student Jeff Coon.
              Ren-Hui Michelle Tham, a B.S. Cognitive Sciences major, for UROP-funded research on instrumental divergence in goal-directed choice. Michelle is mentored by Professor Mimi Liljeholm.


              COGNITIVE SCIENCE ASSOCIATION
              The purpose of the CSA is to empower students in the Cognitive Science major and related majors by creating a tight-knit community through interactions with guest speakers, professional development, and just having fun together. Most importantly, the CSA wants to help the cognitive sciences community have more opportunities to learn and volunteer, as well as have peer academic support

              Cognitive Science Association Website



              PSYCHOLOGY STUDENT ASSOCIATION
              The core purpose of the Psychology Student Association (PSA) is to help students, primarily those in the Psychology majors, to advance their academic achievements by providing different resources that connect to their fields of interests, as well as widen their social circle.

              Psychology Student Association Website


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Psychology;
