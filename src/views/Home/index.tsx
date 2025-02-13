import Hero from "./Hero";
import Layout from "@/Component/Layout";
import Second from "./Second";
import Cards from "./Cards";
import Cardstwo from "./Cardstwo";
import Cardsfour from "./Cardsfour";
import Third from "./Third";

const Home = () => {
  return (
    <Layout>
      <Hero />
     <Second />
     <Cards/>
     <Cardstwo/>
     <Cardsfour/>
     <Third/>
    </Layout>
  );
};

export default Home;