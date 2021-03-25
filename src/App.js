import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button label="Button" />
        <Button label="Button" color="primary" />
        <Button label="Button" color="secondary" />
        <Button label="Button" color="danger" />
      </div>
      <div>
        <Button label="Button" variant="outline" />
        <Button label="Button" variant="outline" color="primary" />
        <Button label="Button" variant="outline" color="secondary" />
        <Button label="Button" variant="outline" color="danger" />
      </div>
      <div>
        <Button label="Button" variant="text" />
        <Button label="Button" variant="text" color="primary" />
        <Button label="Button" variant="text" color="secondary" />
        <Button label="Button" variant="text" color="danger" />
      </div>
      <div>
        <Button label="Button" startIcon="local_grocery_store" />
        <Button
          label="Button"
          color="primary"
          startIcon="local_grocery_store"
        />
        <Button
          label="Button"
          color="secondary"
          startIcon="local_grocery_store"
        />
        <Button label="Button" color="danger" startIcon="local_grocery_store" />
      </div>
      <div>
        <Button label="Button" endIcon="local_grocery_store" />
        <Button label="Button" color="primary" endIcon="local_grocery_store" />
        <Button
          label="Button"
          color="secondary"
          endIcon="local_grocery_store"
        />
        <Button
          label="Button"
          color="danger"
          endIcon="local_grocery_store"
          disabled
        />
      </div>
      <div>
        <Button
          label="Button"
          variant="outline"
          endIcon="local_grocery_store"
        />
        <Button
          label="Button"
          variant="outline"
          color="primary"
          endIcon="local_grocery_store"
          disabled
        />
        <Button
          label="Button"
          variant="outline"
          color="secondary"
          endIcon="local_grocery_store"
        />
        <Button
          label="Button"
          variant="outline"
          color="danger"
          endIcon="local_grocery_store"
        />
      </div>
      <div>
        <Button label="Button" variant="text" startIcon="local_grocery_store" />
        <Button
          label="Button"
          variant="text"
          color="primary"
          startIcon="local_grocery_store"
        />
        <Button
          label="Button"
          variant="text"
          color="secondary"
          startIcon="local_grocery_store"
        />
        <Button
          label="Button"
          variant="text"
          color="danger"
          startIcon="local_grocery_store"
        />
      </div>
      <div>
        Build by{" "}
        <a href="https://github.com/Timothy1982/react-button-component">
          Timothy Morrell
        </a>
      </div>
    </div>
  );
}

export default App;
