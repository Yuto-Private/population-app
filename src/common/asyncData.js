import axios from "axios";

export default async function asyncData( api ) {

  const endPoint = process.env.REACT_APP_RESAS_API_ENDPOINT;
  const apiKey = { headers:{'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY } };
  let hoge = {}

  return await axios.get(`${endPoint}/api/v1/${api}`,apiKey)
  .then( ({ data }) => {
    return data.result
  })
  .catch( error => {
    console.log('ERROR!! occurred in Backend.')
  })
  .then(() => {
    this.setState({apiData: this.hoge});
  });

}
