import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import "./home.css";

const Home = () => {
  const page = usePage();
  const heading = useTextAnimation("Welcome.", 4200);

  return (
    <section
      className={`home--section ${page === "Home" ? "visible" : "invisible"}`}
    >
      <h1>{heading}</h1>
      <p>
        Welcome to my page<span>.</span> My name is <span>Marcel Peda. </span>
        I'm 26 years old and from Hamburg<span>,</span> Germany<span>. </span>
        I'm passionate about pretty much everything that has to do with tech
        <span>.</span>
        <br />
        <br />
        My journey into the endless space of I.T. started with learning how to
        create Websites and Web games<span>.</span> It didn't take long til I
        got curious about how the Internet works<span>,</span> so I started
        learning about things like Networking and Internet Protocols which led
        me to what I'm doing today
        <br />- Cybersecurity<span>.</span>
      </p>
    </section>
  );
};

export default Home;
