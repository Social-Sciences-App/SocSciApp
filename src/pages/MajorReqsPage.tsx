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
        backgroundColor: '#F6EDA0',
        padding: 10,
        borderRadius: 15,
        fontSize: 7,
        margin: 15,
        width: 170,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    majorCardImage: {
        width: 125,
        height: 125
    }
});

const MajorReqsPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../static/images/ssarc_banner.png')}
        />
        <Text style={styles.headerTextStyle}>Major/Minor Requirements</Text>
        <Text style={styles.headerTextStyle}>
          A list of every major in the School of Social Sciences and a link to a
          separate page where course requirements for each are shown.
        </Text>


        <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
            <Image
                style={styles.majorCardImage}
                source={require('../static/images/anthro_icon.png')}
            />
            <Text>Major in
                ANTHROPOLOGY (B.A.)
            </Text>
            <Text>

                Major       Overview
                Degree Check

                Minor
                Overview
                Degree Check

                Honors
                Overview

                Certificates
                Overview

            </Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/busecon_icon.png')}
              />
              <Text>Major in
                  BUSINESS ECONOMICS (B.A.)
              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/cls_icon.png')}
              />
              <Text>Major in
                  CHICANO/LATINO STUDIES (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview

                  Certificates
                  Overview
              </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/cogsci_icon.png')}
              />
              <Text>Major in
                  COGNITIVE SCIENCES (B.S.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/econ_icon.png')}
              />
              <Text>Major in
                  ECONOMICS (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview


              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/is_icon.png')}
              />
              <Text>Major in
                  LANGUAGE SCIENCE (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/langsci_icon.png')}
              />
              <Text>Major in
                  INTERNATIONAL STUDIES (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/polisci_icon.png')}
              />
              <Text>Major in
                  POLITICAL SCIENCE (B.A.)
              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/psych_icon.png')}
              />
              <Text>Major in
                  PSYCHOLOGY (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/quantecon_icon.png')}
              />
              <Text>Major in
                  QUANTITATIVE ECONOMICS (B.A.)
              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check





                  Honors
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/sociology_icon.png')}
              />
              <Text>Major in
                  SOCIAL POLICY & PUBLIC SERVICE (B.A.)
              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check





                  Honors
                  Overview

                  Certificates
                  Overview
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.majorCard} onPress={() => {}}>
              <Image
                  style={styles.majorCardImage}
                  source={require('../static/images/spps_icon.png')}
              />
              <Text>Major in
                  SOCIOLOGY (B.A.)

              </Text>
              <Text>
                  Major
                  Overview
                  Degree Check

                  Minor
                  Overview
                  Degree Check

                  Honors
                  Overview

                  Certificates
                  Overview
              </Text>
          </TouchableOpacity>



      </ScrollView>
    </SafeAreaView>
  );
};

export default MajorReqsPage;
