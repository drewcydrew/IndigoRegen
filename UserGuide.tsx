import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useRef } from "react";
import { introContent, sections } from "../content/readMeContent";
import colours from "../styles/colours";

const ReadMe = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;

  const handleEmailPress = () => {
    Linking.openURL(
      "mailto:andrewjovaras@gmail.com?subject=Library%20Lookup%20Support"
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colours.panelBackground}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/library-icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Custom Intro Section */}
          <View style={styles.introSection}>
            <Text style={styles.introTitle}>{introContent.title}</Text>
            {introContent.paragraphs.map((paragraph, i) => (
              <Text key={i} style={styles.introText}>
                {paragraph.content}
              </Text>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {sections.map((section, index) => {
            const hasImage = !!section.image;
            const isEven = index % 2 === 0;
            const hasMedia = section.image || section.video;

            const contentFirst = true; // ? isEven : true;

            const MediaComponent = () => {
              if (section.image) {
                return (
                  <View style={styles.mediaWrapper}>
                    <Image
                      source={section.image}
                      style={[
                        styles.media,
                        isWide ? styles.mediaWide : styles.mediaNarrow,
                      ]}
                      resizeMode="contain"
                    />
                    {section.caption && (
                      <Text style={styles.caption}>{section.caption}</Text>
                    )}
                  </View>
                );
              }

              if (section.video) {
                const player = useVideoPlayer(section.video, (player) => {
                  player.loop = true;
                  player.muted = true;
                  player.play();
                });

                return (
                  <View style={styles.mediaWrapper}>
                    <View
                      style={[
                        styles.videoContainer,
                        isWide
                          ? styles.videoContainerWide
                          : styles.videoContainerPortrait,
                      ]}
                    >
                      <VideoView
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#000",
                          borderRadius: 8,
                        }}
                        player={player}
                        allowsFullscreen
                        allowsPictureInPicture
                        contentFit="contain"
                      />
                    </View>
                    {section.caption && (
                      <Text style={styles.caption}>{section.caption}</Text>
                    )}
                  </View>
                );
              }

              return null;
            };

            return (
              <View
                key={index}
                style={[
                  styles.sectionRow,
                  {
                    flexDirection: isWide && hasMedia ? "row" : "column",
                    alignItems: isWide && hasMedia ? "flex-start" : "center",
                  },
                ]}
              >
                {contentFirst && (
                  <View style={[styles.textContainer]}>
                    <Text style={styles.title}>{section.title}</Text>
                    {section.paragraphs.map((paragraph, i) => (
                      <View key={i} style={styles.paragraphContainer}>
                        {paragraph.subheading && (
                          <Text style={styles.subheading}>
                            {paragraph.subheading}
                          </Text>
                        )}
                        <Text style={styles.paragraph}>
                          {paragraph.content}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                {!contentFirst && (
                  <View style={[styles.textContainer]}>
                    <Text style={styles.title}>{section.title}</Text>
                    {section.paragraphs.map((paragraph, i) => (
                      <View key={i} style={styles.paragraphContainer}>
                        {paragraph.subheading && (
                          <Text style={styles.subheading}>
                            {paragraph.subheading}
                          </Text>
                        )}
                        <Text style={styles.paragraph}>
                          {paragraph.content}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
                {hasMedia && <MediaComponent />}
              </View>
            );
          })}

          {/* Contact Us Section */}
          <View style={styles.divider} />

          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Contact Us</Text>
            <Text style={styles.contactDescription}>
              If you're experiencing any issues or have questions about the app,
              please reach out to our support team.
            </Text>

            <View style={styles.emailContainer}>
              <Text style={styles.emailLabel}>Email:</Text>
              <TouchableOpacity onPress={handleEmailPress}>
                <Text style={styles.emailLink}>
                  support@collectionparadise.com.au
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.responseTime}>
              We typically respond within 24-48 hours during business days.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
  },
  scrollContainer: {
    flex: 1,
    padding: 12,
  },
  contentWrapper: {
    backgroundColor: colours.panelBackground,
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    maxWidth: Platform.OS === "web" ? 1000 : "100%",
    alignSelf: "center",
    width: "100%",
  },
  sectionRow: {
    marginBottom: 32,
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  spacing: {
    paddingRight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    color: colours.text,
  },
  image: {
    borderRadius: 8,
  },
  imageWide: {
    width: 300,
    height: 600,
  },
  imageNarrow: {
    //width: 300,
    height: 600,
    marginTop: 16,
  },
  video: {
    borderRadius: 8,
    backgroundColor: "#000",
  },
  videoWide: {
    width: 300,
    height: 300,
  },
  videoNarrow: {
    width: 300,
    height: 600,
  },
  media: {
    borderRadius: 8,
  },
  mediaWide: {
    width: 300,
    height: 450,
    alignSelf: "flex-start",
    maxWidth: "100%", // Prevents overflow on small screens
  },
  mediaNarrow: {
    width: 300,
    height: 500,
    marginTop: 16,
    alignSelf: "stretch",
    maxWidth: "100%", // Prevents overflow on small screens
  },
  videoContainer: {
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#000",
  },
  videoContainerWide: {
    width: 270, // Adjusted for portrait video in desktop view
    height: 480,
    alignSelf: "flex-start",
  },
  videoContainerPortrait: {
    // New style specifically for portrait videos
    width: 280,
    height: 500,
    aspectRatio: 9 / 16, // Portrait aspect ratio
    marginTop: 16,
  },
  videoContainerNarrow: {
    width: 300,
    height: 500,
    aspectRatio: 16 / 9,
    marginTop: 16,
  },
  videoPlayer: {
    flex: 1,
    width: 300,
    height: 600,
  },
  mediaWrapper: {
    alignItems: "center",
  },
  caption: {
    fontSize: 14,
    fontStyle: "italic",
    color: colours.idleText,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    maxWidth: 400,
    paddingHorizontal: 8,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 24,
    width: "100%",
  },
  logo: {
    width: Platform.OS === "web" ? 300 : 200,
    height: Platform.OS === "web" ? 120 : 80,
  },
  introSection: {
    marginBottom: 32,
    alignItems: "center",
    padding: 16,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    color: colours.text,
    textAlign: "center",
  },
  introText: {
    fontSize: 18,
    lineHeight: 28,
    color: colours.text,
    textAlign: "center",
    maxWidth: 800,
  },
  divider: {
    height: 1,
    backgroundColor: colours.border,
    width: "100%",
    marginBottom: 32,
  },
  paragraphContainer: {
    marginBottom: 12,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: colours.text,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.text,
  },
  contactSection: {
    marginTop: 32,
    padding: 20,
    backgroundColor: colours.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colours.border,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: colours.text,
  },
  contactDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.text,
    marginBottom: 16,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colours.panelBackground,
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colours.border,
    flexWrap: "wrap",
  },
  emailLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: colours.text,
    marginRight: 8,
    flexShrink: 0,
  },
  emailLink: {
    fontSize: 16,
    color: colours.border,
    textDecorationLine: "underline",
    flex: 1,
    flexWrap: "wrap",
  },
  responseTime: {
    fontSize: 14,
    fontStyle: "italic",
    color: colours.idleText,
    marginTop: 8,
  },
});

export default ReadMe;
