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

const LanguageScience = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.headerTextStyle}>Major in Anthropology (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/langsci_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              Language Science Major:
              Description
              Curriculum
              Current Courses
              Mailing List
              Recent Commencement Ceremonies
              Sample Schedule
              Admissions


              Related Minors:
              Linguistics
              Hearing and Speech Sciences (run by the Department of Cognitive Sciences)
              Spanish/English Bilingual Education (run by the Department of Spanish & Portuguese)


              Description
              Language is a system of communication with an extraordinarily intricate structure. The scientific study of the mental representations and biological basis of language involves many questions, including what the nature of this system is, how humans master it so early in their cognitive development, how humans use it to communicate, and how it is implemented in human biology.

              The Language Science major offers focuses in theoretical, behavioral, computational, and applied approaches to language science. Students completing the B.A. in Language Science will have a background in

              theoretical linguistics,
              language development & use,
              advanced aspects of natural or formal languages,
              the analytical tools of formal language study, and
              some combination of neuroscience, psychology, logic, computer science, anthropology, education, and hearing & speech, as related to the scientific study of language and its applications.
              This leads to an interdisciplinary language science background that is attractive for a variety of careers, including teaching, language technology industry positions, teaching English as a second language abroad, interpreting & translation, technical writing, language consulting for legal firms and medical practices, and advertising, among others. In addition, the strong foundation in formal and applied language science will better prepare graduates in the major for graduate and professional programs in any of the areas related to language science, including speech-language pathology, linguistics, cognitive science, cognitive neuroscience, developmental psychology, natural language processing, and education.



              Program Learning Outcomes:
              Knowledge of the discipline of language science:
              The student demonstrates knowledge of the interdisciplinary foundation to the scientific study of language, including its mental representations, its development and use, and its biological underpinnings. The student demonstrates knowledge of the tools used in the development of the empirical foundations of the field (theoretical, behavioral and neuroscientific, computational), as well knowledge of how these empirical foundations can inform applied science (i.e., applied language science).
              Research and analytical skills:
              The student demonstrates knowledge of the process of hypothesis testing in science, especially as they relate to human language. The student demonstrates the ability to acquire and critically evaluate domain-relevant information, and to apply that information to scientific research questions. The student demonstrates knowledge of the research methods used by language scientists, including theoretical, behavioral and neuroscientific, and computational methods.
              Communication skills:
              The student demonstrates the ability to write clearly, structuring an argument and supporting it with relevant facts, observations, and claims. The student demonstrates the ability to communicate orally in a clear and coherent manner, designing effective presentation aids where appropriate. The student demonstrates the ability to succinctly summarize research findings, both in writing and orally.




              Major: Language Science (B.A.), OPEN FOR ENROLLMENT AS OF FALL 2018 (major code 0DB)
              Please note that you can still take courses that will count towards the major now.
              In addition to the courses described below, all students must satisfy University and School of Social Sciences requirements.
              REQUIRED COURSEWORK:

              I. Core introductory lower-division courses
              All five are required.
              LSCI 3: Intro to Linguistics
              LSCI 10: Intro to Phonology
              LSCI 20: Intro to Syntax
              LSCI 43/LPS 30: Intro to Symbolic Logic
              LSCI 51/PSYC 56L: Acquisition of Language

              II. Natural/Formal language
              Two of the following are required.
              Foreign Language Structure
              Germ 104: Intro to German Linguistics
              LSCI 164A: Topics in Romance Languages
              LSCI 164B: French Phonetics
              LSCI 165B: Structure of Japanese
              Ling 172: History of English (to be sunset in 2019)
              Span 113A: Spanish Phonetics
              Span 113B: Intro to Spanish Linguistics
              The 3x level of any non-English language or any advanced level non-English language course. Advanced non-English language courses are those requiring the highest level course in the relevant 2x sequence (or above) as a prerequisite.  Note: May be used more than once. For example, a student could use Span 3 and Span 107 to satisfy both courses in section II. In addition, if a student places out of the 3x/advanced level in a language, then the Natural/Formal language requirement is satisfied by the 3x/advanced courses placed out of.
              Note: If you have proficiency equivalent to the 3x level in a non-English language, but UCI doesn't offer the 3x level in that language, please contact the Undergraduate Director to potentially have this requirement waived.

              Logic and Computation
              LSCI 102/CompSci 162: Formal Languages and Automata
              LSCI 142/LPS 104/ Phil 104: Intro to Logic
              LSCI 145A/LPS 105A/Phil 105A: Elementary Set Theory

              III. Additional core courses
              Five additional language science courses, three of which must be upper division.
              1. Any Ling course not listed in parts I, II, or IV. This currently includes these courses:
              LSCI 1: Languages of the World
              LSCI 2: Discovering Language
              LSCI 68/Anthro 2D: Language and Culture
              LSCI 111: Intermediate Phonology
              LSCI 115: Intro to Phonetics
              LSCI 121: Intermediate Syntax
              LSCI 131: Intro to Morphology
              LSCI 143: Intro to Formal Semantics
              LSCI 145B/LPS 145B/ Phil 105B: Metalogic
              LSCI 145C/LPS 105C/ Phil 105C: Undecidability and Incompleteness
              LSCI 151/PSYC 156A: Acquisition of Language II
              LSCI 155/PSYC 150: Psychology of Language
              LSCI 158/Bio N160/PSYC 161: Language and Brain
              LSCI 168J/Anthro 151A: Improvisation, Language, and Culture
              LSCI 168S/Anthro 150A: Language and Social Cognition
              2. Individual study with a faculty member affiliated with Language Science. This will often take the form of a 4-credit independent study course (e.g., PSYC 199/Ling 199/LPS 199/Anthro 199/Span 199) but may be a 4-credit research course, whose numbering varies by department (e.g., LSCI 195A/B/C). Note that individual study may count for up to two of the additional core courses if taken for multiple quarters or with multiple faculty members affiliated with Language Science.

              IV. Specializations
              Four of the following, coming from at least two of A-D below.
              A. Theoretical
              LSCI 119: Special Topics in Phonetics/Phonology
              LSCI 124: Current Topics in Syntax
              LSCi 129: Special Topics in Syntax
              LSCI 141/LPS 145/Phil 145: Topics in Philosophy of Language
              LSCI 149: Special Topics in Semantics
              LSCI 176: Intro to Pidgin and Creole Languages
              Span 187: Special Topics in Spanish Linguistics
              B. Behavioral & Neuroscientific
              LSCI 151: Acquisition of Language II
              LSCI 151B: Bilingual Acquisition
              LSCI 151S: Second Language Acquisition
              LSCI 159: Special Topics in Psycholinguistics
              LSCI 165L: Language Change, Acquisition, and Complexity
              LSCI 175/Hist 135G/Anthro 152A/GlblClt 105: Language Origins: Evolution, Genetics, and the Brain
              C. Computational
              Comp Sci 142A/CSE 142: Compilers and Interpreters
              Comp Sci 142B: Language Processor Construction
              Comp Sci 171: Intro to Artificial Intelligence
              Comp Sci 177: Applications of Probability in Computer Science
              LSCI 106M: Computational Models of Language Learning
              LSCI 107M: Computational Methods for Language Research
              LSCI 109: Special Topics in Computational Linguistics
              D. Applied
              BME 148: Microimplants
              Chinese 100A-B-C: Classical Chinese
              Drama 35: Speech for Theater
              E Asian 125: Topics in East Asian Applied Linguistics
              Educ 134: Teaching English Internationally
              Ling 181A-B-C-D-E-F-G-H-I/PSYC 141J-K-L-M-N-O-P-Q-R/Educ 141A-B-C-D-E-F-G-H-I: Jumpstart I-III: Early Language, Literacy, and Social Development. (Note that only two courses of this series may count towards the four specialization courses.) [sunset after Spring 2019]
              LSCI 182V/Educ 151/Psy Beh192V: Language and Literacy
              Mus 158A-B-C: Diction. (Note that only one course of this series may count towards the four specialization courses.)
              PSYC 131B: Hearing
              PSYC 161H/BIOL N147: Hearing and the Brain
              Span 151: Intro to Translation
              Courses:
              For class schedules click here.
              For course descriptions click here.



              You may also wish to sign up for the mailing list for Language Science majors at https://department-lists.uci.edu/mailman/listinfo/langsci-majors.




              You can see recent commencement ceremonies for Language Science majors here:
              [Spring 2020] .





              Sample Schedule
              A sample four-year program. General education (GE) requirements are in [square brackets]. Language Science modules are indicated in (parentheses) and color-coded:

              C = Core, N/F = Natural/Formal Languages, AC = Additional Core, Sx = Specialization in area x).

              Bolded courses satisfy the requirements of the School of Social Sciences. Electives are in italics.

              All courses are 4 units.

              To aid with course planning of specific courses, students should consult the Course Enrollment History. This will show when a particular course is typically taught and how often it's taught, among other useful information.

              Year  	  Fall  	  Winter  	  Spring
              1
              Math 2A [Vb]

              I&C SCI 31 [II, Vb]

              LSCI 3 (C) [III, Vb]

              LSCI 51 (C) [III]

              Math 2B [Vb]

              LSCI 2 (AC) [VII]

              LSCI 10 (C) [III, Vb]

              GE [I]-lower

              Stats 7 [Va]

              LSCI 43(C) [Vb]

              LSCI 20 (C) [III, Vb]

              GE [II]

              2
              LSCI 164A (N/F)

              LSCI 1 (AC) [VIII]

              GE [I]-lower

              GE [VI]

              LSCI 102 (N/F)

              LSCI 168 (AC)

              GE [II]

              Upper-div Social Science

              LSCI 151 (AC)

              LSCI 155(AC)

              GE [IV]

              Upper-div Social Science

              3
              LSCI 152 (SB)

              GE [IV]

              Upper-div Social Science

              Elective

              LSCI 106M (SC)

              Upper-div Social Science

              Elective

              Elective

              Edu 134 (SD)

              GE [I]-upper

              Upper-div Social Science

              Elective

              4
              GE [IV]

              Elective

              Elective

              Elective

              LSCI 165L (SB)

              Elective

              Elective

              Elective

              Elective

              Elective

              Elective

              Elective



              Admissions, Transfers, and Changes of Major
              Admissions requirements for new students at the freshman level: Students must meet all the basic UC admission requirements with a minimum 3.0 GPA or better as described here.

              Admissions requirements for transfer students: Students must meet all the admission requirements for the School of Social Sciences as described here.

              (i) Meet all basic UC admission requirements with a minimum grade of C or better.
              (ii) Have a cumulative UC transferable GPA of 3.0 (3.4 for TAG).
              (iii) Complete 60 semester or 90 quarter units of UC transferable credit by the end of the spring term prior to the fall quarter of enrollment.

              Change of major requirements: To change to the Language Science major, a student must meet the requirements below.

              (i) Minimum cumulative UCI GPA = 2.00.
              (ii) Minimum UCI GPA for the quarter prior to changing major = 2.00.
              (iii) Complete two language science courses with a grade of B- or better. One of the courses must be in the lower div core courses (LSCI 3, LSCI 10, LSCI 20, LSCI 43, LSCI 51).



              Related Minors
              A Linguistics Minor at UCI

              Linguistics is the scientific study of this human language ability. It is concerned with describing languages and with understanding our knowledge of language as speakers and how we come to have that knowledge. It is connected to many other fields of study, including psychology, anthropology, sociology, biology, physics, mathematics, computer science, philosophy, and literature.


              Students can meet the requirements for the minor by taking a total of seven language science courses (28 units) as specified below.

              1. LSCI 3, 10, and 20.

              2. Four additional language science courses, three of which must be upper-division.

              3. Residence Requirement: At least three upper-division courses required for the
              minor must be completed successfully at UCI.

              Those minoring in linguistics are strongly encourage to take as many foreign language classes as possible and to take advantage of university programs such as the Education Abroad Program through the Center for International Education.

              Consult the Social Sciences Undergraduate Affairs Office about coursework to fit your specific academic needs and professional goals.

              For further information please contact the Undergraduate Director at  langsci@uci.edu.

              You may also wish to sign up for the mailing list for linguistics minors at https://department-lists.uci.edu/mailman/listinfo/linguistics-minors.



              A Hearing & Speech Sciences Minor at UCI (run by the Department of Cognitive Sciences)
              A minor in Hearing and Speech Sciences will provide in-depth training for undergraduates interested in becoming scientists and/or clinicians in health-related fields. This minor will help stimulate students’ interest in hearing and speech as well as increase their opportunities to be admitted to postgraduate programs in audiology, speech-language pathology, biomedical engineering, psychology, neuroscience, medicine and other allied areas.

              More information can be found at http://catalogue.uci.edu/schoolofsocialsciences/departmentofcognitivesciences/#minortext



              Spanish/English Bilingual Education Minor at UCI (run by the Department of Spanish & Portuguese)
              A minor in Spanish/English Bilingual Education will create a pathway to better prepare future bilingual teachers by providing students with the following: foundational knowledge on current issues in bilingual education; hands-on experience as a teacher aide/tutor in a bilingual classroom; and knowledge of linguistic and cultural phenomena associated with the Spanish language and populations from Latin American countries.

              More information can be found at https://ucispanishbilingualed.weebly.com/about.html


          </Text>

          <Text>
              Minors:
              Linguistics
              Hearing & Speech Sciences



              A Linguistics Minor at UCI
              Linguistics is the scientific study of this human language ability. It is concerned with describing languages and with understanding our knowledge of language as speakers and how we come to have that knowledge. It is connected to many other fields of study, including psychology, anthropology, sociology, biology, physics, mathematics, computer science, philosophy, and literature.


              Students can meet the requirements for the minor by taking a total of seven linguistics courses (28 units) as specified below.

              1. LSCI 3, 10, and 20.

              2. Four additional linguistics courses, three of which must be upper-division.

              3. Residence Requirement: At least three upper-division courses required for the
              minor must be completed successfully at UCI.

              Those minoring in linguistics are strongly encourage to take as many foreign language classes as possible and to take advantage of university programs such as the Education Abroad Program through the Center for International Education.

              Consult the Social Sciences Undergraduate Affairs Office about coursework to fit your specific academic needs and professional goals.

              For further information please contact the Undergraduate Director at  langsci@uci.edu.



              A Hearing & Speech Sciences Minor at UCI
              A minor in Hearing and Speech Sciences will provide in-depth training for undergraduates interested in becoming scientists and/or clinicians in health-related fields. This minor will help stimulate students’ interest in hearing and speech as well as increase their opportunities to be admitted to postgraduate programs in audiology, speech-language pathology, biomedical engineering, psychology, neuroscience, medicine and other allied areas.

              More information can be found at http://catalogue.uci.edu/schoolofsocialsciences/departmentofcognitivesciences/#minortext


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguageScience;
