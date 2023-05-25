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
              The B.S. in Cognitive Sciences is structured to provide students with a challenging introduction to the broad field of Cognitive Sciences that is strongly grounded in theory and an empirical approach emphasizing experimental/computational methods. To ensure an intellectually coherent experience, students in the major are able to choose courses from areas including: (a) Cognitive Neuroscience; (b) Experimental Psychology–Sensation, Perception, Attention, and Memory; (c) Language Science; and (d) Computational Cognitive Science. In addition, students are required to acquire a background in (a) calculus, (b) statistics, (c) introductory computer programming, and (d) some combination of the natural sciences, logic and philosophy of science, linguistics, or more advanced computer science or mathematics.

              The Cognitive Science (B.S.) major prepares students for a research career in cognitive science, focusing on any of the current dominant approaches of the field. The study of cognition can be approached though cognitive neuroscience, behavioral experiments, language science, computational and mathematical modeling, or any combination of those. The major combines strong technical skills with deep knowledge of at least one of these approaches.

              NOTE: Students may complete the B.A. in Psychology, the B.S. in Psychology, or B.S. in Cognitive Sciences. You may not double major within the majors offered by the department.





              REQUIRED COURSEWORK
              The current degree requirements can be found in the UCI Catalogue.

              For prior catalogue years, please refer to this link: http://catalogue.uci.edu/previouseditions/

              NOTE: The BS Cog Sci degree requirements have changed effective Fall 2021, as noted in the UCI Catalogue and as listed below. Please refer to prior catalogue editions for previous degree requirements.

              All students must meet the University Requirements.

              All students must meet the School Requirements.

              School requirements must be met and must include courses as specified below:


              A. Complete the following:

              MATH 2A & 2B	Single-Variable Calculus I & II
              PSYCH 10A-10B-10C	Exploratory Data Analysis (formerly Probability and Statistics in Psychology I) and
              Probability and Inference (formerly Probability and Statistics in Psychology II) and
              Statistical Models (formerly Probability and Statistics in Psychology III)
              COGS 106	Computational Lab Skills
              COGS 107	Cognitive Modeling
              COGS 108	Neural Analytics
              PSYCH 14M or COGS 14P or I&C SCI 31	MATLAB Programming or
              Scientific Python for Research or
              Introduction to Programming
              PSYCH 9A - 9B - 9	Psychology Fundamentals
              COG SCI 109	Cognitive Sciences Research Seminar

              B. Select three (3) courses from the following list:

              Research Methods

              PSYCH 112A - 112LA	Experimental Psychology - Experimental Psychology Laboratory
              PSYCH 112BW - 112LB	Advanced Experimental Psychology - Advanced Experimental Psychology Laboratory
              PSYCH 112C - 112LC	Research in Experimental Psychology - Research in Experimental Psychology Laboratory
              COGS 112P - 112LP	Research in Perception and Psychophysics - Research in Perception and Psychophysics Laboratory
              COGS 112R - 112LR	Cognitive Robotics - Cognitive Robotics Laboratory

              C. Select six courses from the following list:

              BIO SCI 35	The Brain and Behavior
              BIO SCI 36	Drugs and the Brain
              BIO SCI 37	Brain Dysfunction and Repair
              BIO SCI 38	Mind, Memory, Amnesia, and the Brain
              COGS 14P	Scientific Python for Research (1)
              LSCI 3	Introduction to Linguistics
              LSCI 10	Introduction to Phonology
              LSCI 20	Introduction to Syntax
              LSCI 51	Acquisition of Language
              I&C SCI 31	Introduction to Programming (1)
              I&C SCI 32	Programming with Software Libraries
              I&C SCI 33	Intermediate Programming
              LPS 30	Introduction to Symbolic Logic
              LPS 31	Introduction to Inductive Logic
              MATH 2D	Multivariable Calculus I
              MATH 2E	Multivariable Calculus II
              MATH 3A	Introduction to Linear Algebra
              MATH 3D	Elementary Differential Equations
              PHYSICS 3A-3B-3C	Basic Physics I - II - III
              or

              PHYSICS 7C-7D-7E with labs
              PHYSICS 7LC and PHYSICS 7LD	Classical Physics
              PHYSICS 15	Physics of Music
              PSYCH 14M	MATLAB Programming (1)
              STATS 7	Basic Statistics
              STATS 110	Statistical Methods for Data Analysis I
              STATS 111	Statistical Methods for Data Analysis II
              STATS 112	Statistical Methods for Data Analysis III
              NOTE: Careful selection should be made in order to satisfy general education requirements and prerequisites for upper-division courses.


              D. Select three courses from the following:

              Upper Division Core Courses

              PSYCH 130A	Perception and Sensory Processes
              PSYCH 140C	Cognitive Science
              PSYCH 140J	Judgment and Decision Making
              PSYCH 140L	Principles of Learning Theory
              PSYCH 140M	Human Memory
              PSYCH 150	Psychology of Language
              PSYCH 160A	Introduction to Cognitive Neuroscience
              PSYCH 160D	Brain Disorders and Behavior

              E. Select seven courses from the following list. Up to three courses may also be taken from Requirement B and Requirement D: (2), (3)

              Upper-Division Core Electives:

              COMPSCI 171	Introduction to Artificial Intelligence
              COMPSCI 178	Machine Learning and Data-Mining
              COMPSCI 183	Introduction to Computational Biology
              LSCI 102	Formal Languages and Automata
              LSCI 111	Intermediate Phonology
              LSCI 121	Intermediate Syntax
              PSYCH 120A	Abnormal Psychology
              PSYCH 120D	Developmental Psychology
              PSYCH 120H	History of Psychology
              PSYCH 120P	Personality Theories
              PSYCH 131A	Vision
              PSYCH 131B	Hearing
              PSYCH 156A	Acquisition of Language II
              PSYCH 161	Language and the Brain
              PSYCH 161H	Hearing and the Brain
              PSYCH 162N	Human Neuropsychology
              (1) If not used to satisfy Introductory Programming Requirement.

              (2) Research methods (Requirement B) and core (Requirement D) courses may be used to fulfill the core elective requirement (Requirement E) but cannot count for both requirements.

              (3) If accepted into the Honors Program, COGS H101A- COGS H101B- COGS H101C may be used for three of the seven elective courses under Requirement E.





              HONORS PROGRAM IN COGNITIVE SCIENCES
              The Honors Program in Psychology and Cognitive Sciences is an advanced educational and research program for outstanding undergraduate students in these majors.

              The program emphasizes advanced competence in scientific research, and allows participants the opportunity to pursue advanced work in independent research, in addition to earning honors upon graduation. While the program is designed for students who are interested in pursuing graduate study or seeking challenging research experiences as a capstone to their undergraduate experience, all Psychology and Cognitive Sciences majors who meet the minimum eligibility requirements are welcome to apply.

              For more information about the Honors Program, please visit here.





              CHANGE OF MAJOR REQUIREMENTS
              Effective 2021-22, in order to change your major to the B.S. in Cognitive Sciences, you must meet the following requirements:

              Requirements	Description
              Cumulative UC GPA	3.2 GPA
              3.2 GPA for the quarter prior to changing major
              Course grades	Must complete the following courses with no grade less than a C:
              MATH 2A, 2B
              PSYCH 10A-B-C
              COGS 14P, PSYCH 14M (formerly 114M), or ICS 31
              PSYCH 9A-B-C

              For a listing of change of major requirements for all majors at UCI, please visit here.





              QUESTIONS
              For academic advising (e.g., coursework required, change of major requirements), contact the School of Social Sciences' Undergraduate Student Affairs Office at: socsci@uci.edu or (949) 824-6803.





              Program Learning Outcomes - B.S. in CogSci


              Acquire a Broad, Multidisciplinary Knowledge of Cognitive Sciences

              Majors can describe important questions, results, and theories in each of the following areas: consciousness, language, learning, memory, perception, and decision making.
              Majors have a foundation in biology, chemistry, physics, and/or mathematics to provide a scientific basis for the multidisciplinary study of cognitive sciences.
              In each of four areas of more intensive study, majors can use theories in those areas to predict, evaluate, or interpret behavior in circumstances such as those they might encounter in their work or daily life.

              Acquire understanding of the relationship between Cognitive Sciences and Neuroscience

              Majors understand and can describe how aspects of mental function relate to activity in the brain.

              Interpret and Evaluate Research Results

              Majors can evaluate critically and apply to their life and work scientifically-based information available in the media as well as research journals in psychological science.
              Majors can explain how research method and design choices constrain the possible inferences from data.
              Majors understand the issues surrounding reproducibility and transparency in science

              Obtain an in-depth understanding of research methods in Cognitive Sciences

              Majors have an understanding of the different research methods used in cognitive sciences including behavioral experiments, psychophysics, neuroscience methods, and mathematical modeling.
              Majors have a mastery of at least one scientific programming language and computational research methods


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CognitiveSciences;
