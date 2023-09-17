import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";
import "./styles.css";

function App() {
  return (
    <div>
      <Title />
      <News>
        <NewsItem
          newsImage="https://i.cbc.ca/1.6945190.1694824581!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/shutterstock-medium-file.jpg"
          newsTitle="Artificial intelligence is being used in university classes. How it's being used matters, say profs"
          newsLink="https://www.cbc.ca/news/canada/nova-scotia/artificial-intelligence-university-classes-research-1.6968138"
          newsAuthor="Cassidy Chisholm"
          newsDescription="2 professors weigh in on how large-language models may help — or hinder — student research"
        />
        <NewsItem
          newsImage="https://i.cbc.ca/1.6816594.1682000589!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/space-exploration-starship.jpg"
          newsTitle="Elon Musk's SpaceX can't launch its giant rocket again until 63 fixes are made, FAA says"
          newsLink="https://www.cbc.ca/news/science/spacex-faa-1.6956818"
          newsAuthor="The Associated Press"
          newsDescription="Closing its investigation into April explosion, U.S. agency says corrective actions needed before any relaunch"
        />
        <NewsItem
          newsImage="https://i.cbc.ca/1.6595252.1664117761!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/power-poles-snapped-glace-bay-fiona.jpg"
          newsTitle="Climate change is affecting telecommunications infrastructure. Ham radio might be able to help"
          newsLink="https://www.cbc.ca/news/canada/nova-scotia/cimate-change-telecommunications-ham-radio-help-1.6884108"
          newsAuthor="Moira Donovan"
          newsDescription="The technology is ‘an unsung hero’ for getting messages out, one operator says"
        />
        <NewsItem
          newsImage="https://i.cbc.ca/1.6960149.1694135210!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/ai-classroom-20230305.jpg"
          newsTitle="The 'perfect' teaching assistant? Universities find new uses for AI"
          newsLink="https://www.cbc.ca/news/ai-chatgpt-openai-universities-1.6958321"
          newsAuthor="Joseph Pugh"
          newsDescription="New wave of tools embraced by educators — and not just in computer labs"
        />
      </News>
    </div>
  );
}

function Title(props) {
  return (
    <div className="title-container">
      <div className="title">
        <p>My News Feed</p>
      </div>
    </div>
  );
}

function News(props) {
  return (
    <div>
      <ul className="news">{props.children}</ul>
    </div>
  );
}

function NewsItem(props) {
  return (
    <li>
      <h2 className="news-title">
        <div className="news-image">
          <img src={props.newsImage} alt="" />
        </div>
        <div className="news-title-container">
          <span>
            <a href={props.newsLink}>{props.newsTitle}</a>
          </span>
          <span className="news-author">By {props.newsAuthor}</span>
        </div>
      </h2>
      <p className="news-description">{props.newsDescription}</p>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
