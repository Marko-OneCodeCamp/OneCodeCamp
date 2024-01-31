import './App.css'
import commentsData from './Comments.json';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="comments">
          <h1>Comments Section</h1>
          <Comment comments={commentsData} />
        </div>
      </header>
    </div>
  );
}

export default App;
