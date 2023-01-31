import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {

    const data = route.params.data

    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>History:</Text>
            <FlatList style={styles.list}
              data={data}
              renderItem={({ item }) =>
                <Text>{item.key}</Text>
              }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 160,
    },
  });