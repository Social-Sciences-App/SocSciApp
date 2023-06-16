import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    width: 200,
    height: 200,
    alignSelf: 'center'
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
    padding: 20,
    marginTop: -20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F6EDA0',
    padding: 15,
    borderRadius: 15,
    fontSize: 7,
    margin: 40,
  },
  firstWord: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 30
  },
  signature: {
    fontWeight: 'bold',
    padding: 20,
  }
});

const AboutPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.mainHeaderTextStyle}>Message from the Dean</Text>
        <Image
          style={styles.banner}
          source={require('../static/images/maurer-half.jpg')}
        />


        <Text style={styles.firstWord}>Boundaryless.</Text>
        <Text style={styles.textStyle}>
          Google the term – coined by former GE CEO Jack Welch – and you’ll learn that it’s most often applied in business to explain an organization that throws caution to the wind, scrapping boundaries and bureaucracies in order to tap the internal power of its people to directly enact change.

          {"\n\n"}For the past 50 years, the School of Social Sciences has been putting this approach into practice, breaking down traditional barriers to create change in society, economies and human well-being. But never has this boundaryless-mindset been more important than today.

          {"\n\n"}The 21st century has brought on profound and previously unthinkable social change. We live longer and face new social, economic and health challenges brought on by an aging population. Political, ethical and environmental challenges are marked by ever-increasing uncertainty and, paradoxically, the easy availability of more and more data about us.

          {"\n\n"}These challenges know no boundaries – they stop at no border and they aren’t limited to one discipline.

          {"\n\n"}That’s why social scientists at the University of California, Irvine are facing them head on, together.

          {"\n\n"}Our students, who comprise nearly 20 percent of the entire UCI student body, are in the conflict zones of the Middle East and teaching global awareness in Orange County high schools. They are in our groundbreaking behavioral economics labs, testing new methods to reduce traffic congestion, create better online marketplaces and prevent the spread of disease. They are in our brain, behavior, and cognitive robotics labs – mapping the structure of the human brain to understand how speech works in order to help restore it in victims of stroke, and building interactive robots aimed at improving social engagement in children with ADHD and autism. Our students are doing fieldwork in India, Africa, China – indeed, everywhere on the planet, exploring fundamental issues of peace, politics, population, migration and cross-cultural communication.

          {"\n\n"}Our faculty are breaking with convention to forge connections with computer science, engineering, the arts and the humanities. Interdisciplinary work with law, medicine and environmental science helps our researchers educate policy makers on the social, cultural and psychological factors impacting regulation and policy adoption, health and human behavior.

          {"\n\n"}Our maverick spirit and openness to new approaches and unexpected collaborations has kept us nimble and at the cutting-edge in a number of fields as different as transportation economics, cultural anthropology, the philosophy of physics and biology, and the sociology of mass movements.

          {"\n\n"}Our world-class professors in our seven top-ranking departments are experts in their fields, consistently sought by national media to provide perspective on innovative discoveries and pressing social problems. Our faculty are teaching courses within the most popular majors on campus and leading more students to successful graduation than any other academic unit at UCI.

          {"\n\n"}Our alumni – numbering more than 50,000 strong – are taking their world-class education from our Irvine classrooms to the halls of justice in D.C. and international relations work in capitals around the world, to entrepreneurial endeavors from Northgate to Northern Africa, to courtrooms across the nation, boardrooms in some of the world’s top companies, and classrooms around the globe where they’re training our next generation of leaders.

          {"\n\n"}And we’re just getting started.

          {"\n\n"}Learn more within these pages about our degree programs, research centers, student programs, and opportunities. Involvement in any one of our endeavors helps us in our continuing effort to push the limits in traditional social sciences work because we believe that solutions to some of society’s greatest challenges lie in our ability to break the mold, to be boundaryless.

          {"\n\n"}Join us in our pursuit.
          </Text>
          <Text style={styles.signature}>
          Bill Maurer, Dean
            {"\n\n"}School of Social Sciences
            {"\n\n"}


        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutPage;
