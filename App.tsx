import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import Styles from "./Styles";
import RenderItem from "./RenderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tareas = [
]

export interface Task {
  titulo: string,
  estado: boolean,
  date: Date
}

export default function App() {
  const [text, setText] = React.useState('')
  const [tareas, setTask] = React.useState<Task[]>([])
  //npm i @react-native-async-storage/async-storage
  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('my-key', JSON.stringify(value))
    } catch (e) {
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key')
      if (value !== null) {
        const tasksLocal = JSON.parse(value)
        setTask(tasksLocal)
      }
    } catch (e) {
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const addTarea = () => {
    if (tareas.some(tarea => tarea.titulo === text)) {
      Alert.alert('Error', 'Ya existe una tarea con este título.');
      return;
    }
    const newTarea = {
      titulo: text,
      estado: false,
      date: new Date()
    }
    setTask(prevTareas => [...prevTareas, newTarea])
    setText('')
  }
  const MarkDone = (tarea: Task) => {
    const tmp = [...tareas]
    const index = tmp.findIndex(k => k.titulo === tarea.titulo)
    const t = tmp[index]
    t.estado = !t.estado
    setTask(tmp)
  }
  const deleteFunction = (tarea: Task) => {
    const tmp = [...tareas]
    const index = tmp.findIndex(k=>k.titulo===tarea.titulo)
    tmp.splice(index,1)
    setTask(tmp)
  }
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Tareas</Text>
      <View style={Styles.inputContainer}>
        <TextInput style={Styles.textInput}
          placeholder="Agregar"
          value={text}
          onChangeText={(t: string) => setText(t)}
        />
        <TouchableOpacity style={Styles.button} onPress={addTarea}>
          <Text style={Styles.wtext}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          renderItem={({ item }) =>
          (<RenderItem
            item={item}
            MarkDone={MarkDone}
            deleteFunction={deleteFunction}
          />)}
          data={tareas}
        />
      </View>
    </View>
  );
}