import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/error/error-component';
import QuotesListPage from './components/quoteListPage/quotes-list-page.component';
import RandomQuotePage from './components/randomQuotePage/random-quote-page.component';

function App() {
	return (
    <Router>
      <Switch>
        <Route exact path='/' component={RandomQuotePage}/>
        <Route exact path='/author/:quoteAuthor' component={QuotesListPage}/>
        <Route render={() => (
          <Error typeError={2}/>
        )}/>
      </Switch>
    </Router>
  )
}

export default App;
