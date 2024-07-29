import FormPrevVersion from "./components/uncontrolledForm/FormPrevVersion";
import FormReact19 from "./components/uncontrolledForm/FormReact19";

import UseFormStatusPrevVersion from "./components/useFormStatus/UseFormStatusPrevVersion";
import UseFormStatusReact19 from "./components/useFormStatus/UseFormStatusReact19";

import UseTransitionPrevVersion from "./components/useTransition/UseTransitionPrevVersion";
import UseTransitionReact19 from "./components/useTransition/UseTransitionReact19";

import UseActionStatePrevVersion from "./components/useActionState/UseActionStatePrevVersion";
import UseActionStateReact19 from "./components/useActionState/UseActionStateReact19";


import UseOptimisticPrevVersion from "./components/useOptimistic/useOptimisticPresVersion";
import UseOptimisticReact19 from "./components/useOptimistic/useOptimisticReact19";

import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="containerDemo">
        <FormPrevVersion />
        <FormReact19 />
      </div>
      <div className="containerDemo">
        <UseFormStatusPrevVersion />
        <UseFormStatusReact19 />
      </div>
      <div className="containerDemo">
        <UseTransitionPrevVersion />
        <UseTransitionReact19 />
      </div>
      <div className="containerDemo">
        <UseActionStatePrevVersion />
        <UseActionStateReact19 />
      </div>
      <div className="containerDemo">
        <UseOptimisticPrevVersion />
        <UseOptimisticReact19 />
      </div>
    </div>
  );
}

export default App;
