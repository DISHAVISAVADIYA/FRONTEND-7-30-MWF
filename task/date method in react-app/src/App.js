import logo from './logo.svg';
import './App.css';
const date = new Date().toDateString();
const Time = new Date().toLocaleTimeString();


function App() {
  return (
    <>
    <div style={{'textAlign':'center','background': 'skyBlue', 'padding':'10px','marginTop':'15%'}}>
   <h1 style={{'color':'white','textTransform':'uppercase'}}>welcome to the page</h1>
   <p style={{'fontWeight':'bold'}}>today's date is :-{date}</p>
   <p>today's day is :-{Time}</p>
    </div>
   </>
  );
}

export default App;
