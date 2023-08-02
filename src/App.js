import './index.css';
import { Button } from './Button'


function App() {
  return (
    <div className="App">
    <Button
    text='Click here yoy'
    onClick={() => console.log('small button is enter')}
    >small</Button>

      <Button
        onClick={() => console.log('medium button is enter')}
      >Hack</Button>

      <Button
        text='Click here dude'
        onClick={() => console.log('large button is enter')}
      >large</Button>
    </div>
  );
}
// button

export default App;
