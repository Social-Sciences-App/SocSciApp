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

const SocialPolicyPublicService = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../../static/images/ssarc_banner.png')}
        />
          <Text style={styles.mainHeaderTextStyle}>Major in Social Policy & Public Service (B.A.)</Text>

          <Text style={styles.text1}>
              The Social Policy and Public Service program offers a unique opportunity for learning and conducting research in social policy. In particular, the major encourages students to engage in a multidisciplinary perspective when examining social issues. The curriculum addresses pressing social political issues and provides students insights on the effects of inequity, poverty, discrimination, and limited civic and political engagement on society. With three concentrations (governance, education, and health), the program is designed to help students engage questions about economic inequality, educational access and quality, poverty, family structures, health access, and civic participation to cultivate analytic and research skills when addressing social issues.

              {"\n\n"}Through a selective curriculum and research training, students are guided to create a strong academic portfolio in preparation for graduate studies or the job force. The degree will prepare students to understand public policy formulation, quantitative and qualitative analysis, organizations and public policy, non-profit management, and leadership.


              {"\n\n"}Who might select this major?
              {"\n\n"}The Social Policy and Public Service program is designed for students interested in social issues, social justice, equality, and social policy. With three unique areas of focus (i.e., Education, Governance, and Health) students can explore educational access and progress, the impact of public policies, or America's current health and health care policies.

              {"\n\n"}The major prepares students who have an array of interests given the interdisciplinary focus. For example, SPPS majors are interested in pursuing the fields such as: governance, social policy, education, health (including medicine), social work, non-profit organizations, teaching, law, community leadership, and public and health administration. All students enrolled in this major have an interdisciplinary interest in research and public service. The majors address current issues related to governance, community, public policy, public health, education, and leadership. SPPS majors have an invested interested in social change, social justice, fair political representation, quality education, and health equality. Majors seek to attain training in effective means for practical and research centered solutions.


          </Text>



      </ScrollView>
    </SafeAreaView>
  );
};

export default SocialPolicyPublicService;
