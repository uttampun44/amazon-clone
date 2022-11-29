import { legacy_createStore as createStore } from 'redux';
 import rootreducer from './Main';


 const Store = createStore(
  rootreducer 
 );
 export default Store;