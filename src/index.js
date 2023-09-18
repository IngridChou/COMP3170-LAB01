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
          newsImage="https://cleantechnica.com/files/2021/10/Tesla-China-Sales-e1642076454693.jpeg"
          newsTitle="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          newsLink="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          newsAuthor="Steve Hanley"
          newsDescription="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />
        <NewsItem
          newsImage="http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
          newsTitle="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          newsLink="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          newsAuthor="Milenio Digital"
          newsDescription="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de ..."
        />
        <NewsItem
          newsImage="https://www.teslarati.com/wp-content/uploads/2020/11/tesla-model-3-heat-pump-refresh.jpeg"
          newsTitle="Tesla recall for heater and defroster systems issued by Transport Canada"
          newsLink="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          newsAuthor="Maria Merano"
          newsDescription="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over ..."
        />
        <NewsItem
          newsImage="https://i.cbc.ca/1.6960149.1694135210!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/ai-classroom-20230305.jpg"
          newsTitle="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          newsLink="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
          newsAuthor="Newsroom Infobae"
          newsDescription="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente ..."
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
