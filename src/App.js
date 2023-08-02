import './index.css';
import { Button } from './Button'


function App() {
  return (
    <div className="App">
    <Button
    size='small'
    text='Click here yoy'
    onClick={() => console.log('small button is enter')}
    />

      <Button
        size='medium'
        text='Click here yooooyy'
        onClick={() => console.log('medium button is enter')}
      />

      <Button
        size='large'
        text='Click here dude'
        onClick={() => console.log('large button is enter')}
      />
    </div>
  );
}

export default App;
