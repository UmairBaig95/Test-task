import FormikContainer from "./Form/FormikContainer";
import Icons from "./svg/Icons";

function App() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3 my-md-4">
          <h2 className="">Add Tax</h2>
          <div>
            <Icons name="cross" size="50" />
          </div>
        </div>
        <FormikContainer />
      </div>
    </>
  );
}

export default App;
