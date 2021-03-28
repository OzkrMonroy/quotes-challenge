import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuotesListPage from './components/quoteListPage/quotes-list-page.component';
import RandomQuotePage from './components/randomQuotePage/random-quote-page.component';

function App() {
	return (
    <Router>
      <Switch>
        <Route exact path='/' component={RandomQuotePage}/>
        <Route exact path='/:quoteAuthor' component={QuotesListPage}/>
      </Switch>
    </Router>
  )
}

export default App;
