import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';

const App = () => {
  const[data,setData]= useState ([]) ;        

  const getAPIData = async () =>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url);
    result= await result.json();
    setData(result);

  }
  useEffect(()=>{
    getAPIData()
  },[]);
  return (
    <ScrollView >
      <Text style={{fontSize:30}}>list with api call</Text>
      {data.length?
      data.map((item)=><View style={{padding:10,borderBottomColor: "#ccc", borderBottomWidth:1}}>
        <Text style={{fontSize:20 , backgroundColor:"#ddd"}}>id: {item.id}</Text>
        <Text style={{fontSize:20}}>title: {item.title}</Text>
        <Text style={{fontSize:20}}>body: {item.body}</Text>
      </View>)
      :
      null
      }

      
    </ScrollView>
  );
};


export default App;
