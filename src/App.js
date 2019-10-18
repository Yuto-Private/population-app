import React from 'react';
import axios from "axios";

export default class App extends React.Component {

  asyncData( api ) {
    const endPoint = process.env.REACT_APP_RESAS_API_ENDPOINT;
    const apiKey = { headers:{'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY } };
    let temp = {}

    axios.get(`${endPoint}/api/v1/${api}`,apiKey).then( ({ data }) => {
      temp = data.result.map((v) => {
        return <li><input type='checkbox' value={v.prefName}/>{v.prefName}</li>
      })
    }).catch( error => {
      console.log('ERROR!!')
    }).then( () => {
      this.setState({ apiData: temp });
    } )
  }
  
  constructor(props) {
    super(props)
    this.asyncData('prefectures');
    this.state = {
      apiData: []
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.apiData}
      </div>
    );
  }


}