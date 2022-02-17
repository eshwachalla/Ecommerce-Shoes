import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
            <Header />
            <Section />
        </div>
      </DataProvider>
    );
  }
}

export default App;