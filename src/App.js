import logo from './logo.svg';
import './App.css';
import List from './components/List.js';
import Form from './components/Form.js';


function addItem() {
    
}

function App() {
    return (
        <div className="App flex justify-center items-center h-screen w-screen">
            <div className='max-w-5xl h-screen bg-white flex flex-col justify-center items-center'>
                    <Form />
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <List />   
                </div>
            </div>
        </div>
    );
}


export default App;
