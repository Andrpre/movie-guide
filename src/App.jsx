import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Title text="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Button text="Искать" />
    </>
  );
}

export default App;
