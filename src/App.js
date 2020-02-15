import React from 'react';
import Navbar from './Components/Navbar/NavBar';
import Logo from './Components/Logo/Logo'
import Watch from './Components/Watch/Watch'
import WatchData from './Components/WatcInfo/WatchInfo'
import AppCss from './app.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={AppCss.App}>
        <div className={AppCss.header}>
          <Navbar>
            <Logo />
          </Navbar>
        </div>
        <div className={AppCss.container}>


          <Watch />
          <WatchData />
        </div>
      </div>

    )
  }

}
export default App;
