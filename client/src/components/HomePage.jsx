import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import FrontPictures from './FrontPictures.jsx';
import FeaturedListings from './FeaturedListings.jsx';
import QuickSearches from './QuickSearches.jsx';
import BottomNav from './BottomNav.jsx';

class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891'
    }
    this.titleClick=this.titleClick.bind(this);
  }
  titleClick(){
    location.reload();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div>
        <LeadingBar/>
        <FrontPictures/>
        <FeaturedListings/>
        <QuickSearches/>
        <BottomNav/>
        </div>
)
}
};

export default HomePage;
