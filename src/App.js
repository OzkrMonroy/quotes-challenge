import './App.css';

function App() {
  return (
    <div className="App">
      <div className="quote-container">
        <p className="quote">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae qui fuga illum recusandae maxime esse deserunt laboriosam quas distinctio reprehenderit ratione, magnam harum, aut optio obcaecati natus praesentium cupiditate!"</p>
        <div className="quote-footer">
          <div className="quote-footer-container">
            <p>Bill Gates</p>
            <span>business</span>
          </div>
        </div>
        <button className="get-random-quote" type="button">Get random quote</button>
      </div>
    </div>
  );
}

export default App;
