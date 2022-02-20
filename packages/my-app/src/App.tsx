import MuiButton from 'material-ui/dist';
import ExampleComponent from 'material-ui';

const App = () => {
  return (
    <div className='App'>
      <MuiButton variant='text' buttonText='hello' />
      <ExampleComponent text='hello' />
    </div>
  );
};

export default App;
