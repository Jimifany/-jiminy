import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
class RouterMap extends Component {
  render() {
    let { routes, history } = this.props;
    console.log(routes)
    const defaultRoute = (
      <Redirect from="/" to="/login" key={"default"} exact></Redirect>
    );
    return (
      <Router history={history}>
        <Switch>
            {
                routes.map((item,index)=>{
                    const children = item.children===undefined?[]:item.children;
                    const Comp = item.component;
                    return <Route key={item.name} path={item.path} component={()=>{
                        return <Comp routes={children} history={history}></Comp>
                    }}></Route>
                }).concat([defaultRoute])
            }
        </Switch>
      </Router>
    );
  }
}
export default RouterMap;
