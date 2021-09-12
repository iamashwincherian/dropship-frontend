import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router'

import TopNavBar from './Navbar'
import Home from '../routes/Home'
import Cart from '../routes/Cart'

const App = () => {
    return (
        <div>
            <TopNavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </div>
    )
}

export default App