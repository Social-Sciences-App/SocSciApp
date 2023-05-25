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

const CognitiveSciences = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Cognitive Sciences (B.S.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/cogsci_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              INFORMATION ABOUT THE MAJOR
              {"\n\n"}The B.S. in Cognitive Sciences is structured to provide students with a challenging introduction to the broad field of Cognitive Sciences that is strongly grounded in theory and an empirical approach emphasizing experimental/computational methods. To ensure an intellectually coherent experience, students in the major are able to choose courses from areas including: (a) Cognitive Neuroscience; (b) Experimental Psychology–Sensation, Perception, Attention, and Memory; (c) Language Science; and (d) Computational Cognitive Science. In addition, students are required to acquire a background in (a) calculus, (b) statistics, (c) introductory computer programming, and (d) some combination of the natural sciences, logic and philosophy of science, linguistics, or more advanced computer science or mathematics.

              {"\n\n"}The Cognitive Science (B.S.) major prepares students for a research career in cognitive science, focusing on any of the current dominant approaches of the field. The study of cognition can be approached though cognitive neuroscience, behavioral experiments, language science, computational and mathematical modeling, or any combination of those. The major combines strong technical skills with deep knowledge of at least one of these approaches.

              {"\n\n"}NOTE: Students may complete the B.A. in Psychology, the B.S. in Psychology, or B.S. in Cognitive Sciences. You may not double major within the majors offered by the department.





              {"\n\n"}REQUIRED COURSEWORK
              {"\n\n"}The current degree requirements can be found in the UCI Catalogue.

              {"\n\n"}For prior catalogue years, please refer to this link: http://catalogue.uci.edu/previouseditions/

              {"\n\n"}NOTE: The BS Cog Sci degree requirements have changed effective Fall 2021, as noted in the UCI Catalogue and as listed below. Please refer to prior catalogue editions for previous degree requirements.

              {"\n\n"}All students must meet the University Requirements.

              {"\n\n"}All students must meet the School Requirements.

              {"\n\n"}School requirements must be met and must include courses as specified below:


              {"\n\n"}A. Complete the following:

              {"\n\n"}MATH 2A & 2B	Single-Variable Calculus I & II
              {"\n\n"}PSYCH 10A-10B-10C	Exploratory Data Analysis (formerly Probability and Statistics in Psychology I) and
              {"\n\n"}Probability and Inference (formerly Probability and Statistics in Psychology II) and
              {"\n\n"}Statistical Models (formerly Probability and Statistics in Psychology III)
              {"\n\n"}COGS 106	Computational Lab Skills
              {"\n\n"}COGS 107	Cognitive Modeling
              {"\n\n"}COGS 108	Neural Analytics
              {"\n\n"}PSYCH 14M or COGS 14P or I&C SCI 31	MATLAB Programming or
              {"\n\n"}Scientific Python for Research or
              {"\n\n"}Introduction to Programming
              {"\n\n"}PSYCH 9A - 9B - 9	Psychology Fundamentals
              {"\n\n"}COG SCI 109	Cognitive Sciences Research Seminar

              {"\n\n"}B. Select three (3) courses from the following list:

              {"\n\n"}Research Methods

              {"\n\n"}PSYCH 112A - 112LA	Experimental Psychology - Experimental Psychology Laboratory
              {"\n\n"}PSYCH 112BW - 112LB	Advanced Experimental Psychology - Advanced Experimental Psychology Laboratory
              {"\n\n"}PSYCH 112C - 112LC	Research in Experimental Psychology - Research in Experimental Psychology Laboratory
              {"\n\n"}COGS 112P - 112LP	Research in Perception and Psychophysics - Research in Perception and Psychophysics Laboratory
              {"\n\n"}COGS 112R - 112LR	Cognitive Robotics - Cognitive Robotics Laboratory

              {"\n\n"}C. Select six courses from the following list:

              {"\n\n"}BIO SCI 35	The Brain and Behavior
              {"\n\n"}BIO SCI 36	Drugs and the Brain
              {"\n\n"}BIO SCI 37	Brain Dysfunction and Repair
              {"\n\n"}BIO SCI 38	Mind, Memory, Amnesia, and the Brain
              {"\n\n"}COGS 14P	Scientific Python for Research (1)
              {"\n\n"}LSCI 3	Introduction to Linguistics
              {"\n\n"}LSCI 10	Introduction to Phonology
              {"\n\n"}LSCI 20	Introduction to Syntax
              {"\n\n"}LSCI 51	Acquisition of Language
              {"\n\n"}I&C SCI 31	Introduction to Programming (1)
              {"\n\n"}I&C SCI 32	Programming with Software Libraries
              {"\n\n"}I&C SCI 33	Intermediate Programming
              {"\n\n"}LPS 30	Introduction to Symbolic Logic
              {"\n\n"}LPS 31	Introduction to Inductive Logic
              {"\n\n"}MATH 2D	Multivariable Calculus I
              {"\n\n"}MATH 2E	Multivariable Calculus II
              {"\n\n"}MATH 3A	Introduction to Linear Algebra
              {"\n\n"}MATH 3D	Elementary Differential Equations
              {"\n\n"}PHYSICS 3A-3B-3C	Basic Physics I - II - III
              {"\n\n"}or

              {"\n\n"}PHYSICS 7C-7D-7E with labs
              {"\n\n"}PHYSICS 7LC and PHYSICS 7LD	Classical Physics
              {"\n\n"}PHYSICS 15	Physics of Music
              {"\n\n"}PSYCH 14M	MATLAB Programming (1)
              {"\n\n"}STATS 7	Basic Statistics
              {"\n\n"}STATS 110	Statistical Methods for Data Analysis I
              {"\n\n"}STATS 111	Statistical Methods for Data Analysis II
              {"\n\n"}STATS 112	Statistical Methods for Data Analysis III
              {"\n\n"}NOTE: Careful selection should be made in order to satisfy general education requirements and prerequisites for upper-division courses.


              {"\n\n"}D. Select three courses from the following:

              {"\n\n"}Upper Division Core Courses

              {"\n\n"}PSYCH 130A	Perception and Sensory Processes
              {"\n\n"}PSYCH 140C	Cognitive Science
              {"\n\n"}PSYCH 140J	Judgment and Decision Making
              {"\n\n"}PSYCH 140L	Principles of Learning Theory
              {"\n\n"}PSYCH 140M	Human Memory
              {"\n\n"}PSYCH 150	Psychology of Language
              {"\n\n"}PSYCH 160A	Introduction to Cognitive Neuroscience
              {"\n\n"}PSYCH 160D	Brain Disorders and Behavior

              {"\n\n"}E. Select seven courses from the following list. Up to three courses may also be taken from Requirement B and Requirement D: (2), (3)

              {"\n\n"}Upper-Division Core Electives:

              {"\n\n"}COMPSCI 171	Introduction to Artificial Intelligence
              {"\n\n"}COMPSCI 178	Machine Learning and Data-Mining
              {"\n\n"}COMPSCI 183	Introduction to Computational Biology
              {"\n\n"}LSCI 102	Formal Languages and Automata
              {"\n\n"}LSCI 111	Intermediate Phonology
              {"\n\n"}LSCI 121	Intermediate Syntax
              {"\n\n"}PSYCH 120A	Abnormal Psychology
              {"\n\n"}PSYCH 120D	Developmental Psychology
              {"\n\n"}PSYCH 120H	History of Psychology
              {"\n\n"}PSYCH 120P	Personality Theories
              {"\n\n"}PSYCH 131A	Vision
              {"\n\n"}PSYCH 131B	Hearing
              {"\n\n"}PSYCH 156A	Acquisition of Language II
              {"\n\n"}PSYCH 161	Language and the Brain
              {"\n\n"}PSYCH 161H	Hearing and the Brain
              {"\n\n"}PSYCH 162N	Human Neuropsychology
              {"\n\n"}(1) If not used to satisfy Introductory Programming Requirement.

              {"\n\n"}(2) Research methods (Requirement B) and core (Requirement D) courses may be used to fulfill the core elective requirement (Requirement E) but cannot count for both requirements.

              {"\n\n"}(3) If accepted into the Honors Program, COGS H101A- COGS H101B- COGS H101C may be used for three of the seven elective courses under Requirement E.





              {"\n\n"}HONORS PROGRAM IN COGNITIVE SCIENCES
              {"\n\n"}The Honors Program in Psychology and Cognitive Sciences is an advanced educational and research program for outstanding undergraduate students in these majors.

              {"\n\n"}The program emphasizes advanced competence in scientific research, and allows participants the opportunity to pursue advanced work in independent research, in addition to earning honors upon graduation. While the program is designed for students who are interested in pursuing graduate study or seeking challenging research experiences as a capstone to their undergraduate experience, all Psychology and Cognitive Sciences majors who meet the minimum eligibility requirements are welcome to apply.

              {"\n\n"}For more information about the Honors Program, please visit here.





              {"\n\n"}CHANGE OF MAJOR REQUIREMENTS
              {"\n\n"}Effective 2021-22, in order to change your major to the B.S. in Cognitive Sciences, you must meet the following requirements:

              {"\n\n"}Requirements	Description
              {"\n\n"}Cumulative UC GPA	3.2 GPA
              {"\n\n"}3.2 GPA for the quarter prior to changing major
              {"\n\n"}Course grades	Must complete the following courses with no grade less than a C:
              {"\n\n"}MATH 2A, 2B
              {"\n\n"}PSYCH 10A-B-C
              {"\n\n"}COGS 14P, PSYCH 14M (formerly 114M), or ICS 31
              {"\n\n"}PSYCH 9A-B-C

              {"\n\n"}For a listing of change of major requirements for all majors at UCI, please visit here.





              {"\n\n"}QUESTIONS
              {"\n\n"}For academic advising (e.g., coursework required, change of major requirements), contact the School of Social Sciences' Undergraduate Student Affairs Office at: socsci@uci.edu or (949) 824-6803.





              {"\n\n"}Program Learning Outcomes - B.S. in CogSci


              {"\n\n"}Acquire a Broad, Multidisciplinary Knowledge of Cognitive Sciences

              {"\n\n"}Majors can describe important questions, results, and theories in each of the following areas: consciousness, language, learning, memory, perception, and decision making.
              {"\n\n"}Majors have a foundation in biology, chemistry, physics, and/or mathematics to provide a scientific basis for the multidisciplinary study of cognitive sciences.
              {"\n\n"}In each of four areas of more intensive study, majors can use theories in those areas to predict, evaluate, or interpret behavior in circumstances such as those they might encounter in their work or daily life.

              {"\n\n"}Acquire understanding of the relationship between Cognitive Sciences and Neuroscience

              {"\n\n"}Majors understand and can describe how aspects of mental function relate to activity in the brain.

              {"\n\n"}Interpret and Evaluate Research Results

              {"\n\n"}Majors can evaluate critically and apply to their life and work scientifically-based information available in the media as well as research journals in psychological science.
              {"\n\n"}Majors can explain how research method and design choices constrain the possible inferences from data.
              {"\n\n"}Majors understand the issues surrounding reproducibility and transparency in science

              {"\n\n"}Obtain an in-depth understanding of research methods in Cognitive Sciences

              {"\n\n"}Majors have an understanding of the different research methods used in cognitive sciences including behavioral experiments, psychophysics, neuroscience methods, and mathematical modeling.
              {"\n\n"}Majors have a mastery of at least one scientific programming language and computational research methods


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CognitiveSciences;
