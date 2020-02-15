import React from 'react';
import Navbar from './Components/Navbar/NavBar';
import Logo from './Components/Logo/Logo'
import Watch from './Components/Watch/Watch'
import WatchData from './Components/WatcInfo/WatchInfo'
import AppCss from './app.module.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: "https://i.imgur.com/Zygu7I3.png",
      alt: "PinkWatch",
      time: this.props
    }

    this.onRedColorClicked = this.onRedColorClicked.bind(this)
    this.onBlueColorClicked = this.onBlueColorClicked.bind(this)
    this.onBlackColorClicked = this.onBlackColorClicked.bind(this)
    this.onPurpleColorClicked = this.onPurpleColorClicked.bind(this)
  }


  onRedColorClicked() {
    let updatedSrc = "https://i.imgur.com/PTgQlim.png"
    let updatedAlt = "RedWatch"
    this.setState({
      imgSrc: updatedSrc,
      alt: updatedAlt
    })
  }
  onBlueColorClicked() {

    let updatedSrc = "https://i.imgur.com/Mplj1YR.png"
    let updatedAlt = "BlueWatch"
    this.setState({
      imgSrc: updatedSrc,
      alt: updatedAlt
    })

  }
  onBlackColorClicked() {
    let updatedSrc = "https://i.imgur.com/iOeUBV7.png"
    let updatedAlt = "BlackWatch"
    this.setState({
      imgSrc: updatedSrc,
      alt: updatedAlt
    })
  }
  onPurpleColorClicked() {
    let updatedSrc = "https://i.imgur.com/xSIK4M8.png"
    let updatedAlt = "PurpleWatch"
    this.setState({
      imgSrc: updatedSrc,
      alt: updatedAlt
    })
  }

  render() {
    return (
      <div className={AppCss.App}>
        <div className={AppCss.header}>
          <Navbar>
            <Logo />
          </Navbar>
        </div>
        <div className={AppCss.container}>


          <Watch img={this.state.imgSrc} alt={this.state.alt} />
          <WatchData red={this.onRedColorClicked} blue={this.onBlueColorClicked} black={this.onBlackColorClicked} purple={this.onPurpleColorClicked} />
        </div>
      </div>

    )
  }

}
export default App;
