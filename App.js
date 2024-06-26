import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

const devImage = require("./Images/person.png");
const searchImageIcon = require("./Images/mynaui_search.png");
const filter = require("./Images/Filter.png");
const studyImage = require("./Images/young woman working at desk.png");
const exerciseImage = require("./Images/young woman working online.png");
const codeImage = require("./Images/code.jpeg");
const assignmentImage = require("./Images/Assignment.jpeg");
const projectImage = require("./Images/project.png");
const presentationImage = require("./Images/presentation_icon.jpeg");
const groupMeetingImage = require("./Images/group_meeting.png");
const quizImage = require("./Images/taking_quiz.jpeg");

const categories = [
  { key: '1', title: 'Exercise', tasks: '12 Tasks', image: exerciseImage },
  { key: '2', title: 'Study', tasks: '12 Tasks', image: studyImage },
  { key: '3', title: 'Code', tasks: '1 Task', image: codeImage },
  { key: '4', title: 'Assignment', tasks: '7 Tasks', image: assignmentImage },
  { key: '5', title: 'Project', tasks: '3 Tasks', image: projectImage },
  { key: '6', title: 'Presentation', tasks: '5 Tasks', image: presentationImage },
  { key: '7', title: 'Group Meeting', tasks: '8 Tasks', image: groupMeetingImage },
  { key: '8', title: 'Quiz', tasks: '3 Tasks', image: quizImage },
];

const ongoingTasks = [
  { key: '1', title: 'Mobile App Development' },
  { key: '2', title: 'Web Development' },
  { key: '3', title: 'Software Engineering' },
  { key: '4', title: 'Data Structures and Algorithms' },
  { key: '5', title: 'Trading' },
  { key: '6', title: 'Data Mining' },
  { key: '7', title: 'Cyber Security' },
  { key: '8', title: 'Programming' },
  { key: '9', title: 'Web App Development' },
  { key: '10', title: 'Basic Electronics' },
  { key: '11', title: 'Network Studies' },
  { key: '12', title: 'Artificial Intelligence' },
  { key: '13', title: 'Mathematics' },
  { key: '14', title: 'Machine Learning' },
  { key: '15', title: 'Cybersecurity' },
];

const renderOngoingTask = ({ item }) => (
  <View style={styles.finalBoxes}>
    <Text style={styles.finalBoxesTexts}>{item.title}</Text>
  </View>
);

const renderCategory = ({ item }) => (
  <View style={styles.categoriesBoxes}>
    <Text style={styles.bigText}>{item.title}</Text>
    <Text style={styles.littleText}>{item.tasks}</Text>
    <Image source={item.image} style={styles.imagesFormat} />
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.helloDevsFrame}>
          <View>
            <Text style={styles.helloDevs}>Hello , Devs </Text>
            <Text style={styles.todayTasks}>14 tasks today </Text>
          </View>
          <View style={styles.circle}>
            <Image source={devImage} style={styles.devImageStyle} />
          </View>
        </View>

        <View style={styles.searchBoxFrame}>
          <View style={styles.searchBox}>
            <View style={styles.searchImage}>
              <Image source={searchImageIcon} />
            </View>
            <Text style={styles.searchText}>Search </Text>
          </View>
          <View style={styles.filterImage}>
            <Image source={filter} />
          </View>
        </View>

        <View>
          <Text style={styles.categories}>Categories</Text>
        </View>

        <View>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            horizontal={true}
            keyExtractor={item => item.key}
            contentContainerStyle={styles.categoriesFrame}
          />
        </View>

        <View>
          <Text style={styles.ongoingText}> Ongoing Tasks </Text>
        </View>

        <View>
          <FlatList
            style={{ height: 300, borderRadius: 14, marginLeft: 10}}
            data={ongoingTasks}
            renderItem={renderOngoingTask}
            keyExtractor={item => item.key}
          />
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  helloDevsFrame: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    width: 400,
    height: 54,
    paddingleft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  helloDevs: {
    color: 'black',
    fontWeight: '800',
    fontSize: 35,
  },

  todayTasks: {
    color: 'black',
    fontWeight: '500',
    fontSize: 12,
  },

  devImageStyle: {
    width: 46,
    height: 45,
  },

  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBoxFrame: {
    marginTop: 32,
    marginRight: 5,
    width: 360,
    height: 49,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBox: {
    width: 330,
    height: 50,
    borderRadius: 23,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  searchText: {
    fontSize: 18,
    fontWeight: 800,
    marginLeft: 8,
    color: 'gray',
  },

  searchImage: {
    marginLeft: 20,
    marginRight: 10,
  },

  filterImage: {
    marginLeft: 15,
  },

  categories: {
    color: 'black',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 10,
    fontSize: 27,
  },

  categoriesFrame: {
    height: 250,
    marginTop: 5,
  },

  categoriesBoxes: {
    width: 186,
    height: 210,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 15,
  },

  imagesFormat: {
    width: 130,
    height: 140,
    borderRadius: 16,
    flexBasis: 135,
    alignSelf: 'center',
  },

  bigText: {
    margin: 10,
    fontSize: 24,
    fontWeight: 700,
  },

  littleText: {
    margin: 12,
    marginTop: -10,
    fontWeight: 500,
    fontSize: 15,
  },

  ongoingContainer: {
    width: 1200,
    height: 24,
    fontSize: 20,
    marginTop: 200,
  },

  ongoingText: {
    color: 'black',
    marginTop: 8,
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 20,
    borderRadius: 25,
  },

  finalBoxes: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 380,
    height: 120,
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 25,
    backgroundColor: 'white',
    borderColor: '#E8D1BA',
  },

  finalBoxesTexts: {
    paddingTop: 50,
    paddingLeft: 20,
    fontWeight: '700',
    fontSize: 20,
  },
});