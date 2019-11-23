import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AllItems from './views/allitems/AllItems';
import DetailsItem from './views/detailsitem/DetailsItem';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Order from './views/order/Order';
import AllPurchases from './views/allpurchases/AllPurchases';
import Delivery from './views/delivery/Delivery';
import Info from './views/info/Info';
import Payment from './views/payment/Payment';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="app-body">
            <div className="content">
              <Switch>
                <Route path='/' exact component={AllItems} />
                <Route path='/details/:id' exact component={DetailsItem} />
                <Route path='/login/' exact component={Login} />
                <Route path='/register/' exact component={Register} />
                <Route path="/order/" exact component={Order} />
                <Route path="/allpurchases/" exact component={AllPurchases} />
                <Route path="/delivery/" exact component={Delivery} />
                <Route path="/info/" exact component={Info} />
                <Route path="/payment/" exact component={Payment} />
                <Route
                  component={() => (
                    <div style={{ padding: 20 }}>Page not found</div>
                  )}
                />
              </Switch>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);

