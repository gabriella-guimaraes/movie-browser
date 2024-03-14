import { HeroComponent } from "../components/Hero";

import styles from "../css/about.module.css";

export function AboutViewComponent() {
  return (
    <div className={styles.aboutComponent}>
      <HeroComponent text="About Movie Browser" darkTheme={true}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-11 offset-lg-2 m-5">
            <p className="lead intro-text mb-5">
              Welcome to Movie Browser, the brainchild of a solo developer{" "}
              <a href="https://github.com/gabriella-guimaraes" target="blank">
                (yes, that's me!)
              </a>
              . This application emerged from my journey through "The Ultimate
              2023 Fullstack Web Development Bootcamp," where React became not
              just a tool but a creative playground. Movie Browser is more than
              code; it's a shared adventure in cinema. Join me in exploring the
              world of movies, experiencing the joy of discovery, one frame at a
              time. Thank you for being part of the Movie Browser story. Here's
              to many more frames, features, and the excitement of discovering
              great films together!
            </p>
            <h2>Crafting with Passion</h2>
            <p className="lead intro-text mb-5">
              Movie Browser is a testament to my dedication to mastering React.
              Every component and line of code reflects not just theoretical
              knowledge but practical, hands-on learning, resulting in a
              seamless and responsive cinematic experience.
            </p>
            <h2>Commitment to Excellence</h2>
            <p className="lead intro-text mb-5">
              Beyond functionality, Movie Browser is a commitment to excellence.
              It's not just an application; it's a continuous journey of
              learning and development, evolving based on user feedback and the
              dynamic world of web development.
            </p>
            <h2>Powered by TMDB API</h2>
            <p className="lead intro-text mb-5">
              Utilizing The Movie Database (TMDB) API, Movie Browser ensures you
              have a comprehensive catalog of movies at your fingertips,
              featuring the latest information, ratings, and reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
