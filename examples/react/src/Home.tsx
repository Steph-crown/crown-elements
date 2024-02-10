import {
  MyComponent,
  defineCustomElements,
} from "@crownelements/react-library";

defineCustomElements();

const Home = () => {
  return (
    <div>
      Home
      <MyComponent first="Shitttttttt!" last="Stay Cavyyyyyyyyyy!" />
    </div>
  );
};

export default Home;
