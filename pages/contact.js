import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ color: "green" }}>Hello World my contact </h1>
      <p className="intro">Snehal Prajapati is here ❤️</p>

      <style jsx>
        {`
          h1 {
            color: pink;
          }

          .intro {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
