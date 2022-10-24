import React from 'react'
import { Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View
        style = {{
          flex: 1
        }}
      >
       <View 
        style = {{
          alignItems: 'center',
          backgroundColor: 'pink',
          flex: 1,
          justifyContent: 'center'
        }}
        >

        <Text> 
          Kosong masih belum ada item
        </Text>
      </View>

        <View
          style = {{
            backgroundColor: 'lightblue',
            flexDirection : 'row',
            justifyContent: 'space-between',
            padding : 10
          }}
        >
          <View
            style = {{
              backgroundColor: 'red',
              height: 30,
              width: 30
            }}
          >
          </View>

          <View
            style = {{
              backgroundColor: 'white',
              height: 30,
              width: 30
            }}
          >
          </View>

          <View
            style = {{
              backgroundColor: 'blue',
              height: 30,
              width: 30
            }}
          >
          </View>
        </View>
      </View>
    )
  }
}
