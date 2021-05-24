import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';


import './App.css';
import TodoPanel from './views/todoPanel/TodoPanel';
import store from './store';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
      <Provider store={store}>
      <Switch>       
        <Route path="/movie/:id" component={Movie} />
        <Route path="/" component={Home} exact/>
        <Route path="/todo" component={TodoPanel}/>
        <Route path="*" component={Page404} />
      </Switch>
      </Provider>
      </BrowserRouter>
      
      {/* <Home/>
      <Movie/> */}
    </div>
  );
}

export default App;






















// //import CustomHeader, { addNumber } from './components/CustomHeader';
// import Counter from './components/Counter';
// import CustomHeader from './components/CustomHeader';

// const App = () => {
//   //const addedNumber = addNumber(1, 2);
//    const [changedNumber, setChangedNumber ] = React.useState(0);

//   const handleNumberChange = (newNumber: number) => {
//     setChangedNumber(newNumber);
//     //console.log(newNumber)
//    // return newNumber;
//   }
  
//   const liczbaMniejszaOdZera = (liczba: number) =>
//   {
//     if (liczba < 0){
//       return (<div>Liczba jest mniejsza od 0</div>)
//     }
//   }
//   const liczbawiekszaOdZera = (liczba: number) =>
//   {
//     if (liczba > 0){
//       return (<div>Liczba jest wieksza od 0</div>)
//     }
//   }
//   const liczbawiekszaOd10 = (liczba: number) =>
//   {
//     if (liczba > 15)
//       {
//         return (<div>Liczba przekroczona</div>)
//       }
//     if (liczba > 10){
//       return (<div>Liczba jest wieksza od 10</div>)
//     }
    
//   }
//   const liczbamniejszaOdminus10 = (liczba: number) =>
//   {
//     if (liczba < -10){
//       return (<div>Liczba jest mniejsza od -10</div>)
//     }
//   }
  


//   return (
//     <div className="App">
//       <CustomHeader>        
//         {/* <Counter onNumberChange={(newNumber)=>{ console.log(newNumber) }}/> */}
//         <Counter onNumberChange={handleNumberChange}/>
//         {liczbaMniejszaOdZera(changedNumber)}
//         {liczbawiekszaOdZera(changedNumber)}
//         {liczbawiekszaOd10(changedNumber)}
//         {liczbamniejszaOdminus10(changedNumber)}
//       </CustomHeader>
      
//     </div>
//   );

// }

// export default App;
