import Header from "./components/Header";
import ContainerMain from "./components/ContainerMain";
import TextAreaContainer from "./components/TextAreaContainer";
import CategoryLinks from "./components/CategoryLinks";
if (typeof window !== 'undefined') {
  require('regenerator-runtime/runtime');
}

export default function Home() {
  return (
    <ContainerMain>
      <Header/>
      <TextAreaContainer/>
      <CategoryLinks/>
    </ContainerMain>
  );
}