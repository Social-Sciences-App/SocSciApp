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
          <Text style={styles.headerTextStyle}>Major in Language Science (B.A.)</Text>
          <Image
              style={styles.majorCardImage}
              source={require('../../static/images/langsci_icon.png')}
          />

          <Text style={styles.text1}>
              {"\n"}
              Language Science Major:
              {"\n\n"}Description
              {"\n\n"}Curriculum
              {"\n\n"}Current Courses
              {"\n\n"}Mailing List
              {"\n\n"}Recent Commencement Ceremonies
              {"\n\n"}Sample Schedule
              {"\n\n"}Admissions


              {"\n\n"}Related Minors:
              {"\n\n"}Linguistics
              {"\n\n"}Hearing and Speech Sciences (run by the Department of Cognitive Sciences)
              {"\n\n"}Spanish/English Bilingual Education (run by the Department of Spanish & Portuguese)


              {"\n\n"}Description
              {"\n\n"}Language is a system of communication with an extraordinarily intricate structure. The scientific study of the mental representations and biological basis of language involves many questions, including what the nature of this system is, how humans master it so early in their cognitive development, how humans use it to communicate, and how it is implemented in human biology.

              {"\n\n"}The Language Science major offers focuses in theoretical, behavioral, computational, and applied approaches to language science. Students completing the B.A. in Language Science will have a background in

              {"\n\n"}theoretical linguistics,
              {"\n\n"}language development & use,
              {"\n\n"}advanced aspects of natural or formal languages,
              {"\n\n"}the analytical tools of formal language study, and
              {"\n\n"}some combination of neuroscience, psychology, logic, computer science, anthropology, education, and hearing & speech, as related to the scientific study of language and its applications.
              {"\n\n"}This leads to an interdisciplinary language science background that is attractive for a variety of careers, including teaching, language technology industry positions, teaching English as a second language abroad, interpreting & translation, technical writing, language consulting for legal firms and medical practices, and advertising, among others. In addition, the strong foundation in formal and applied language science will better prepare graduates in the major for graduate and professional programs in any of the areas related to language science, including speech-language pathology, linguistics, cognitive science, cognitive neuroscience, developmental psychology, natural language processing, and education.



              {"\n\n"}Program Learning Outcomes:
              {"\n\n"}Knowledge of the discipline of language science:
              {"\n\n"}The student demonstrates knowledge of the interdisciplinary foundation to the scientific study of language, including its mental representations, its development and use, and its biological underpinnings. The student demonstrates knowledge of the tools used in the development of the empirical foundations of the field (theoretical, behavioral and neuroscientific, computational), as well knowledge of how these empirical foundations can inform applied science (i.e., applied language science).
              {"\n\n"}Research and analytical skills:
              {"\n\n"}The student demonstrates knowledge of the process of hypothesis testing in science, especially as they relate to human language. The student demonstrates the ability to acquire and critically evaluate domain-relevant information, and to apply that information to scientific research questions. The student demonstrates knowledge of the research methods used by language scientists, including theoretical, behavioral and neuroscientific, and computational methods.
              {"\n\n"}Communication skills:
              {"\n\n"}The student demonstrates the ability to write clearly, structuring an argument and supporting it with relevant facts, observations, and claims. The student demonstrates the ability to communicate orally in a clear and coherent manner, designing effective presentation aids where appropriate. The student demonstrates the ability to succinctly summarize research findings, both in writing and orally.




              {"\n\n"}Major: Language Science (B.A.), OPEN FOR ENROLLMENT AS OF FALL 2018 (major code 0DB)
              {"\n\n"}Please note that you can still take courses that will count towards the major now.
              {"\n\n"}In addition to the courses described below, all students must satisfy University and School of Social Sciences requirements.
              {"\n\n"}REQUIRED COURSEWORK:

              {"\n\n"}I. Core introductory lower-division courses
              {"\n\n"}All five are required.
              {"\n\n"}LSCI 3: Intro to Linguistics
              {"\n\n"}LSCI 10: Intro to Phonology
              {"\n\n"}LSCI 20: Intro to Syntax
              {"\n\n"}LSCI 43/LPS 30: Intro to Symbolic Logic
              {"\n\n"}LSCI 51/PSYC 56L: Acquisition of Language

              {"\n\n"}II. Natural/Formal language
              {"\n\n"}Two of the following are required.
              {"\n\n"}Foreign Language Structure
              {"\n\n"}Germ 104: Intro to German Linguistics
              {"\n\n"}LSCI 164A: Topics in Romance Languages
              {"\n\n"}LSCI 164B: French Phonetics
              {"\n\n"}LSCI 165B: Structure of Japanese
              {"\n\n"}Ling 172: History of English (to be sunset in 2019)
              {"\n\n"}Span 113A: Spanish Phonetics
              {"\n\n"}Span 113B: Intro to Spanish Linguistics
              {"\n\n"}The 3x level of any non-English language or any advanced level non-English language course. Advanced non-English language courses are those requiring the highest level course in the relevant 2x sequence (or above) as a prerequisite.  Note: May be used more than once. For example, a student could use Span 3 and Span 107 to satisfy both courses in section II. In addition, if a student places out of the 3x/advanced level in a language, then the Natural/Formal language requirement is satisfied by the 3x/advanced courses placed out of.
              {"\n\n"}Note: If you have proficiency equivalent to the 3x level in a non-English language, but UCI doesn't offer the 3x level in that language, please contact the Undergraduate Director to potentially have this requirement waived.

              {"\n\n"}Logic and Computation
              {"\n\n"}LSCI 102/CompSci 162: Formal Languages and Automata
              {"\n\n"}LSCI 142/LPS 104/ Phil 104: Intro to Logic
              {"\n\n"}LSCI 145A/LPS 105A/Phil 105A: Elementary Set Theory

              {"\n\n"}III. Additional core courses
              {"\n\n"}Five additional language science courses, three of which must be upper division.
              {"\n\n"}1. Any Ling course not listed in parts I, II, or IV. This currently includes these courses:
              {"\n\n"}LSCI 1: Languages of the World
              {"\n\n"}LSCI 2: Discovering Language
              {"\n\n"}LSCI 68/Anthro 2D: Language and Culture
              {"\n\n"}LSCI 111: Intermediate Phonology
              {"\n\n"}LSCI 115: Intro to Phonetics
              {"\n\n"}LSCI 121: Intermediate Syntax
              {"\n\n"}LSCI 131: Intro to Morphology
              {"\n\n"}LSCI 143: Intro to Formal Semantics
              {"\n\n"}LSCI 145B/LPS 145B/ Phil 105B: Metalogic
              {"\n\n"}LSCI 145C/LPS 105C/ Phil 105C: Undecidability and Incompleteness
              {"\n\n"}LSCI 151/PSYC 156A: Acquisition of Language II
              {"\n\n"}LSCI 155/PSYC 150: Psychology of Language
              {"\n\n"}LSCI 158/Bio N160/PSYC 161: Language and Brain
              {"\n\n"}LSCI 168J/Anthro 151A: Improvisation, Language, and Culture
              {"\n\n"}LSCI 168S/Anthro 150A: Language and Social Cognition
              {"\n\n"}2. Individual study with a faculty member affiliated with Language Science. This will often take the form of a 4-credit independent study course (e.g., PSYC 199/Ling 199/LPS 199/Anthro 199/Span 199) but may be a 4-credit research course, whose numbering varies by department (e.g., LSCI 195A/B/C). Note that individual study may count for up to two of the additional core courses if taken for multiple quarters or with multiple faculty members affiliated with Language Science.

              {"\n\n"}IV. Specializations
              {"\n\n"}Four of the following, coming from at least two of A-D below.
              {"\n\n"}A. Theoretical
              {"\n\n"}LSCI 119: Special Topics in Phonetics/Phonology
              {"\n\n"}LSCI 124: Current Topics in Syntax
              {"\n\n"}LSCi 129: Special Topics in Syntax
              {"\n\n"}LSCI 141/LPS 145/Phil 145: Topics in Philosophy of Language
              {"\n\n"}LSCI 149: Special Topics in Semantics
              {"\n\n"}LSCI 176: Intro to Pidgin and Creole Languages
              {"\n\n"}Span 187: Special Topics in Spanish Linguistics
              {"\n\n"}B. Behavioral & Neuroscientific
              {"\n\n"}LSCI 151: Acquisition of Language II
              {"\n\n"}LSCI 151B: Bilingual Acquisition
              {"\n\n"}LSCI 151S: Second Language Acquisition
              {"\n\n"}LSCI 159: Special Topics in Psycholinguistics
              {"\n\n"}LSCI 165L: Language Change, Acquisition, and Complexity
              {"\n\n"}LSCI 175/Hist 135G/Anthro 152A/GlblClt 105: Language Origins: Evolution, Genetics, and the Brain
              {"\n\n"}C. Computational
              {"\n\n"}Comp Sci 142A/CSE 142: Compilers and Interpreters
              {"\n\n"}Comp Sci 142B: Language Processor Construction
              {"\n\n"}Comp Sci 171: Intro to Artificial Intelligence
              {"\n\n"}Comp Sci 177: Applications of Probability in Computer Science
              {"\n\n"}LSCI 106M: Computational Models of Language Learning
              {"\n\n"}LSCI 107M: Computational Methods for Language Research
              {"\n\n"}LSCI 109: Special Topics in Computational Linguistics
              {"\n\n"}D. Applied
              {"\n\n"}BME 148: Microimplants
              {"\n\n"}Chinese 100A-B-C: Classical Chinese
              {"\n\n"}Drama 35: Speech for Theater
              {"\n\n"}E Asian 125: Topics in East Asian Applied Linguistics
              {"\n\n"}Educ 134: Teaching English Internationally
              {"\n\n"}Ling 181A-B-C-D-E-F-G-H-I/PSYC 141J-K-L-M-N-O-P-Q-R/Educ 141A-B-C-D-E-F-G-H-I: Jumpstart I-III: Early Language, Literacy, and Social Development. (Note that only two courses of this series may count towards the four specialization courses.) [sunset after Spring 2019]
              {"\n\n"}LSCI 182V/Educ 151/Psy Beh192V: Language and Literacy
              {"\n\n"}Mus 158A-B-C: Diction. (Note that only one course of this series may count towards the four specialization courses.)
              {"\n\n"}PSYC 131B: Hearing
              {"\n\n"}PSYC 161H/BIOL N147: Hearing and the Brain
              {"\n\n"}Span 151: Intro to Translation
              {"\n\n"}Courses:
              {"\n\n"}For class schedules click here.
              {"\n\n"}For course descriptions click here.



              {"\n\n"}You may also wish to sign up for the mailing list for Language Science majors at https://department-lists.uci.edu/mailman/listinfo/langsci-majors.




              {"\n\n"}You can see recent commencement ceremonies for Language Science majors here:
              {"\n\n"}[Spring 2020] .





              {"\n\n"}Sample Schedule
              {"\n\n"}A sample four-year program. General education (GE) requirements are in [square brackets]. Language Science modules are indicated in (parentheses) and color-coded:

              {"\n\n"}C = Core, N/F = Natural/Formal Languages, AC = Additional Core, Sx = Specialization in area x).

              {"\n\n"}Bolded courses satisfy the requirements of the School of Social Sciences. Electives are in italics.

              {"\n\n"}All courses are 4 units.

              {"\n\n"}To aid with course planning of specific courses, students should consult the Course Enrollment History. This will show when a particular course is typically taught and how often it's taught, among other useful information.

              {"\n\n"}Year  	  Fall  	  Winter  	  Spring
              {"\n\n"}1
              {"\n\n"}Math 2A [Vb]

              {"\n\n"}I&C SCI 31 [II, Vb]

              {"\n\n"}LSCI 3 (C) [III, Vb]

              {"\n\n"}LSCI 51 (C) [III]

              {"\n\n"}Math 2B [Vb]

              {"\n\n"}LSCI 2 (AC) [VII]

              {"\n\n"}LSCI 10 (C) [III, Vb]

              {"\n\n"}GE [I]-lower

              {"\n\n"}Stats 7 [Va]

              {"\n\n"}LSCI 43(C) [Vb]

              {"\n\n"}LSCI 20 (C) [III, Vb]

              {"\n\n"}GE [II]

              {"\n\n"}2
              {"\n\n"}LSCI 164A (N/F)

              {"\n\n"}LSCI 1 (AC) [VIII]

              {"\n\n"}GE [I]-lower

              {"\n\n"}GE [VI]

              {"\n\n"}LSCI 102 (N/F)

              {"\n\n"}LSCI 168 (AC)

              {"\n\n"}GE [II]

              {"\n\n"}Upper-div Social Science

              {"\n\n"}LSCI 151 (AC)

              {"\n\n"}LSCI 155(AC)

              {"\n\n"}GE [IV]

              {"\n\n"}Upper-div Social Science

              {"\n\n"}3
              {"\n\n"}LSCI 152 (SB)

              {"\n\n"}GE [IV]

              {"\n\n"}Upper-div Social Science

              {"\n\n"}Elective

              {"\n\n"}LSCI 106M (SC)

              {"\n\n"}Upper-div Social Science

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Edu 134 (SD)

              {"\n\n"}GE [I]-upper

              {"\n\n"}Upper-div Social Science

              {"\n\n"}Elective

              {"\n\n"}4
              {"\n\n"}GE [IV]

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}LSCI 165L (SB)

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective

              {"\n\n"}Elective



              {"\n\n"}Admissions, Transfers, and Changes of Major
              {"\n\n"}Admissions requirements for new students at the freshman level: Students must meet all the basic UC admission requirements with a minimum 3.0 GPA or better as described here.

              {"\n\n"}Admissions requirements for transfer students: Students must meet all the admission requirements for the School of Social Sciences as described here.

              {"\n\n"}(i) Meet all basic UC admission requirements with a minimum grade of C or better.
              {"\n\n"}(ii) Have a cumulative UC transferable GPA of 3.0 (3.4 for TAG).
              {"\n\n"}(iii) Complete 60 semester or 90 quarter units of UC transferable credit by the end of the spring term prior to the fall quarter of enrollment.

              {"\n\n"}Change of major requirements: To change to the Language Science major, a student must meet the requirements below.

              {"\n\n"}(i) Minimum cumulative UCI GPA = 2.00.
              {"\n\n"}(ii) Minimum UCI GPA for the quarter prior to changing major = 2.00.
              {"\n\n"}(iii) Complete two language science courses with a grade of B- or better. One of the courses must be in the lower div core courses (LSCI 3, LSCI 10, LSCI 20, LSCI 43, LSCI 51).
          </Text>
              <Text style={styles.headerTextStyle}>Related Minors</Text>
              <Text>


              Linguistics Minor at UCI
                  {"\n\n"}
                  Linguistics is the scientific study of this human language ability. It is concerned with describing languages and with understanding our knowledge of language as speakers and how we come to have that knowledge. It is connected to many other fields of study, including psychology, anthropology, sociology, biology, physics, mathematics, computer science, philosophy, and literature.


                  {"\n\n"}Students can meet the requirements for the minor by taking a total of seven language science courses (28 units) as specified below.

                  {"\n\n"}1. LSCI 3, 10, and 20.

                  {"\n\n"}2. Four additional language science courses, three of which must be upper-division.

                  {"\n\n"}3. Residence Requirement: At least three upper-division courses required for the
                  {"\n\n"}minor must be completed successfully at UCI.

                  {"\n\n"} Those minoring in linguistics are strongly encourage to take as many foreign language classes as possible and to take advantage of university programs such as the Education Abroad Program through the Center for International Education.

                  {"\n\n"}Consult the Social Sciences Undergraduate Affairs Office about coursework to fit your specific academic needs and professional goals.

                  {"\n\n"}For further information please contact the Undergraduate Director at  langsci@uci.edu.

                  {"\n\n"}You may also wish to sign up for the mailing list for linguistics minors at https://department-lists.uci.edu/mailman/listinfo/linguistics-minors.



                  {"\n\n"}A Hearing & Speech Sciences Minor at UCI (run by the Department of Cognitive Sciences)
                  {"\n\n"}A minor in Hearing and Speech Sciences will provide in-depth training for undergraduates interested in becoming scientists and/or clinicians in health-related fields. This minor will help stimulate students’ interest in hearing and speech as well as increase their opportunities to be admitted to postgraduate programs in audiology, speech-language pathology, biomedical engineering, psychology, neuroscience, medicine and other allied areas.

                  {"\n\n"} More information can be found at http://catalogue.uci.edu/schoolofsocialsciences/departmentofcognitivesciences/#minortext



                  {"\n\n"}Spanish/English Bilingual Education Minor at UCI (run by the Department of Spanish & Portuguese)
                  {"\n\n"}A minor in Spanish/English Bilingual Education will create a pathway to better prepare future bilingual teachers by providing students with the following: foundational knowledge on current issues in bilingual education; hands-on experience as a teacher aide/tutor in a bilingual classroom; and knowledge of linguistic and cultural phenomena associated with the Spanish language and populations from Latin American countries.


              Minors:
                  {"\n\n"}Linguistics
                  {"\n\n"}Hearing & Speech Sciences



                  {"\n\n"}A Linguistics Minor at UCI
                  {"\n\n"}Linguistics is the scientific study of this human language ability. It is concerned with describing languages and with understanding our knowledge of language as speakers and how we come to have that knowledge. It is connected to many other fields of study, including psychology, anthropology, sociology, biology, physics, mathematics, computer science, philosophy, and literature.


                  {"\n\n"}Students can meet the requirements for the minor by taking a total of seven linguistics courses (28 units) as specified below.

                  {"\n\n"}1. LSCI 3, 10, and 20.

                  {"\n\n"}2. Four additional linguistics courses, three of which must be upper-division.

                  {"\n\n"}3. Residence Requirement: At least three upper-division courses required for the
                  {"\n\n"}minor must be completed successfully at UCI.

                  {"\n\n"}Those minoring in linguistics are strongly encourage to take as many foreign language classes as possible and to take advantage of university programs such as the Education Abroad Program through the Center for International Education.

                  {"\n\n"}Consult the Social Sciences Undergraduate Affairs Office about coursework to fit your specific academic needs and professional goals.

                  {"\n\n"}For further information please contact the Undergraduate Director at  langsci@uci.edu.



                  {"\n\n"}A Hearing & Speech Sciences Minor at UCI
                  {"\n\n"}A minor in Hearing and Speech Sciences will provide in-depth training for undergraduates interested in becoming scientists and/or clinicians in health-related fields. This minor will help stimulate students’ interest in hearing and speech as well as increase their opportunities to be admitted to postgraduate programs in audiology, speech-language pathology, biomedical engineering, psychology, neuroscience, medicine and other allied areas.

                  {"\n\n"}More information can be found at http://catalogue.uci.edu/schoolofsocialsciences/departmentofcognitivesciences/#minortext


          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguageScience;
