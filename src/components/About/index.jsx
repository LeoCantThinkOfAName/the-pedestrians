import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <div className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <div className="about-article about-en">
              <p>
                Hi, I'm LCTOAN., short for Leo Can't Think of A Name. Because I
                really don't know how to properly name myself.
              </p>
              <p>
                As a web developer, my life is boring as hell. There's not to
                much going on in my daily life. Same bed, same time to wake up,
                same route to my office, same cubicle, same desk, same computer,
                you know the idea...
              </p>
              <p>
                And this blog is the answer for this perticular perior in my
                life.
              </p>
              <p>
                By writing all this posts, I will eventually try to motivate
                myself to go further... Hopefully...
              </p>
              <p>
                Anyway. This blog is dedicated to all the little things I
                purchased, or anything I found, anything I experienced.
              </p>
              <p>
                Since I'm a sort of an average joe, there won't be things like
                supercars, fancy restaurants, mansion tour etc... Everyone who
                living a life like I do can enjoy all the things that presented
                in this blog.
              </p>
              <p>
                Sorry for all the people who come here to fantisize you can have
                a luxuary life.
              </p>
              <p>Now you know how lame the blog is :P</p>
            </div>

            <div className="about-article about-tw">
              <p>
                Hi, 我是LCTOAN.，全名為 Leo Can't Think of A
                Name，因為我真的不知道該怎麼稱呼自己。
              </p>
              <p>
                身為一個網站工程師，我的人生簡直無聊透頂。在我的日常生活當中並沒有什麼有趣的事情。同樣的一張床，同個時間起床、同一條上班的路線、同樣的辦公隔間、同一張辦公桌、同一台電腦，諸如此類的。
              </p>
              <p>這個部落格就是為了我這段期間的人生而生的。</p>
              <p>希望藉由寫作能激勵我自己走得更遠... 希望如此...</p>
              <p>
                總而言之，這個部落格獻給所有我購買的小東西、找到的奇聞軼事、以及我所體驗的一切。
              </p>
              <p>
                基於我只是個一般人，這裡不會出現超跑試駕、頂級餐廳、豪宅開箱等等的東西。任何一個跟我一樣的一般人都可以擁有並且享受我提到的一切。
              </p>
              <p>先跟所有來到此處是為了幻想自己過著奢華生活的人說聲抱歉。</p>
              <p>現在你知道這個部落格有多沒用了。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
