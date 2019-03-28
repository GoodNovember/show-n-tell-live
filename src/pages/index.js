import React, { Component } from 'react'
export default class HomePage extends Component{
  render(){
    return(
      <main className="logo">
        <div className="logo__wrapper logo__wrapper--outer">
          <div className="logo__wrapper logo__wrapper--inner">
            <h1 className="logo__title">Show 'N Tell Live</h1>
            <div>an alternative talent show</div>
            <div>irl + online</div>
            <div className="logo__links">
              <a href='https://www.youtube.com/channel/UCm-wBSAXZnHofyUVU5vHfNg'>youtube</a>
              <a href='https://www.twitch.tv/showntelllive'>twitch</a>
              <a href='https://www.instagram.com/atlshowntell/'>insta</a>
              <a href='https://www.facebook.com/atlshowntell'>f b</a>
              <span role="img" aria-label='red heart'>️️❤️</span>
            </div>
          </div>
        </div>
      </main>
    )
  }
}