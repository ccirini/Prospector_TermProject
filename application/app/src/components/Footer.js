import "bootstrap/dist/css/bootstrap.min.css";

const Footer = (props) => {
  return (
    <div className="d-flex flex-column">
      <footer className={props.footer}>
        <div>
          <p>CSC 648 - Software Engineering Spring 2021</p>
        </div>
        <hr></hr>
        <div className="ml-auto">
          <p>Made with ♡ in California</p>
          <p>Copyright © 2021 CSC 648.02 - Team 2</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
