import { Page } from "../../components";
import "./404.style.scss";
import notFoundGif from './imgs/notFound.gif';

function NotFound() {
  return (
    <Page>
      <div className="404NotFound-page">
        <h1>404: Not Found</h1>
        <img src={notFoundGif} alt="Not Found GIF" />
      </div>
    </Page>
  );
}

export default NotFound;