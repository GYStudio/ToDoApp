import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';

const TodoListScreen = () => {
  const [activeSections, setActiveSections] = useState([0]);
  const navigation = useNavigation([]);

  const navigateToAddTodo = useCallback(() => {
    navigation.navigate('AddTodo');
  }, [navigation]);
  

  const [data, setData] = useState([
    {
      title: "Pending",
      data: ["Task 1", "Task 2", "Task 3"]
    },
    {
      title: "Completed",
      data: ["Task 4", "Task 5", "Task 6"]
    }
  ]);

  const handleCheckboxClick = (item) => {
    setData(prevData => {
      const newData = [...prevData];
      const pendingIndex = newData.findIndex(section => section.title === "Pending");
      const completedIndex = newData.findIndex(section => section.title === "Completed");
  
      const pendingItemIndex = newData[pendingIndex].data.indexOf(item);
      const completedItemIndex = newData[completedIndex].data.indexOf(item);
  
      if (pendingItemIndex !== -1) {
        // Move item from "Pending" to "Completed"
        newData[pendingIndex].data.splice(pendingItemIndex, 1);
        newData[completedIndex].data.push(item);
      } else if (completedItemIndex !== -1) {
        // Move item from "Completed" to "Pending"
        newData[completedIndex].data.splice(completedItemIndex, 1);
        newData[pendingIndex].data.push(item);
      }
  
      return newData;
    });
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={styles.headerWithIcon}>
        <Icon style={styles.headerElement} name={isActive ? 'chevron-down' : 'chevron-forward'} size={15} color="#000" />
        <Text style={[styles.headerText, styles.headerElement]}>{section.title}</Text>
        <Text style={styles.headerText}>{section.data.length}</Text>
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View>
        {section.data.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardContent}>
              <Pressable onPress={() => handleCheckboxClick(item)}>
                <Icon name="checkmark" size={15} color="#000" style={{ marginRight: 10 }}/>
              </Pressable>
              <Text style={styles.text}>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Accordion
        sections={data}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={setActiveSections}
        expandMultiple={true}
      />
      {/* <View style={styles.placeholder} /> */}
      <Pressable
        style={styles.addButton}
        onPress={navigateToAddTodo}
      >
        <Icon name="add" size={24} color="6a5acd" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    backgroundColor: '#5150b5',
  },
  // placeholder: {
  //   flex: 1,
  //   backgroundColor: 'rgba(106, 90, 205, 0.7)',
  // },
  header: {
    padding: 20,
    borderRadius: 10,
  },
  headerWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 15,
    color: '#fff',
  },
  headerElement: {
    marginRight: 10,
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 2.5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems:'flex-start',
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TodoListScreen;