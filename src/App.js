import React, {Component} from 'react';

import ProductNav from "./components/productnav/ProductNav.js";
import MainNav from "./components/mainnav/MainNav.js";
import Hero from "./components/hero/Hero.js";
import Slider from "./components/reviews/Slider.js";
import Library from "./components/library/Library.js";
import Equipment from "./components/equipment/Equipment.js";
import Footer from "./components/footer/Footer.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      isEquipmentVisible: false
    }

    this.heroRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const heroBottom = this.heroRef.current.getBoundingClientRect().bottom;
    this.setState({ fixedHeader: heroBottom > 0 });
  }

  render() {
    return (
      <div className="App">
        <div className={"header" + (this.state.fixedHeader ? "" : " header--unfixed")}>
          <ProductNav />
          <MainNav />
        </div>
        <Hero heroRef={this.heroRef} />
        <Slider />
        <Library />
        <Equipment />
        <Footer />
      </div>
    );
  }
}

export default App;
