import {
  CrownButton,
  MyComponent,
  defineCustomElements,
} from "@crownelements/react";

defineCustomElements();

const Home = () => {
  return (
    <div style={{ background: "#1d1d1d" }}>
      Home
      <MyComponent first="Shitttttttt!" last="Stay Cavyyyyyyyyyy!" />
      <CrownButton variant="tonal" mode="dark">
        my button
      </CrownButton>
    </div>
  );
};

export default Home;
