import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dibujar from './Styles';
import { Task } from './App';

interface ItemProps{
    item: Task;
    MarkDone:(tarea:Task)=>void
    deleteFunction:(tarea:Task)=>void
}

export default function RenderItem({item, MarkDone, deleteFunction}:ItemProps){
    return (
      <View style={dibujar.tasksContainer}>
        <TouchableOpacity onPress={()=>MarkDone(item)}>
          <Text style={item.estado ? dibujar.textDone: dibujar.textCard}>
            {item.titulo}
          </Text>
          <Text style={dibujar.text}>
            {new Date(item.date).toDateString()}
          </Text>
        </TouchableOpacity>
        {
          item.estado && 
        <TouchableOpacity
        style={dibujar.removeBtn} 
        onPress={()=>deleteFunction(item)}>
          <Text style={dibujar.wtext}>
            Eliminar
          </Text>
        </TouchableOpacity>}
      </View>
    );
}