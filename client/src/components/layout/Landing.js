import React from 'react'

const Landing = () => {
  return (
    <section className="landing">
        <div className="post-container">
         <div className="post-frame">
        <div className="post-img">
        </div>
        <div className="post-description">
          <a className="circle-profile" href="./App.js"></a>
          <div className="container-userdescription">
            UserName
            <p className="p-description">Descripción del post, hecho por el usuario</p>
                </div>
              </div>
            </div>
        </div>
      <div className="comentary-section">
        <div className="yourcomment">
          <a className="circle-profile" href="./App.js"></a>
          UserName
        </div>
        <div className="otherscomment">
          <a className="circle-profile" href="./App.js"></a>
          UserName
        </div>
        <a className="p-comment" href="./App.js">ver más...</a>
      </div>
      <div className="post-container">
        <div className="post-frame">
          <div className="post-img">
          </div>
          <div className="post-description">
            <a className="circle-profile" href="./App.js"></a>
            <div className="container-userdescription">
              UserName
              <p className="p-description">Descripción del post, hecho por el usuario</p>
             </div>
            </div>
          </div>
        </div>
        <div className="comentary-section">
          <div className="yourcomment">
            <a className="circle-profile" href="./App.js"></a>
            UserName
          </div>
          <div className="otherscomment">
            <a className="circle-profile" href="./App.js"></a>
            UserName
          </div>
          <a className="p-comment" href="./App.js">ver más...</a>
        </div>
  </section>
  )
}

export default Landing