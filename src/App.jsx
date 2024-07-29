import FormPrevVersion from "./components/uncontrolledForm/FormPrevVersion";
import FormReact19 from "./components/uncontrolledForm/FormReact19";

import UseActionStatePrevVersion from "./components/useActionState/UseActionStatePrevVersion";
import UseActionStateReact19 from "./components/useActionState/UseActionStateReact19";

import UseFormStatusPrevVersion from "./components/useFormStatus/UseFormStatusPrevVersion";
import UseFormStatusReact19 from "./components/useFormStatus/UseFormStatusReact19";

import UseOptimisticPresVersion from "./components/useOptimistic/useOptimisticPresVersion";
import UseOptimisticReact19 from "./components/useOptimistic/useOptimisticReact19";

import UseTransitionPrevVersion from "./components/useTransition/UseTransitionPrevVersion";
import UseTransitionReact19 from "./components/useTransition/UseTransitionReact19";


function App() {
  return (
    <div className="">
      <div>
        <FormPrevVersion />
        <FormReact19 />
      </div>
      <div>
        <UseFormStatusPrevVersion />
        <UseFormStatusReact19 />
      </div>
      <div>
        <UseTransitionPrevVersion />
        <UseTransitionReact19 />
      </div>
      <div>
        <UseActionStatePrevVersion />
        <UseActionStateReact19 />
      </div>
      <div>
        <UseOptimisticPresVersion />
        <UseOptimisticReact19 />
      </div>
    </div>
  );
}

export default App;
