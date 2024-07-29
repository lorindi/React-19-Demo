import { use, Suspense } from "react";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchCharacter(id) {
  await wait(200);
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return response.json();
}
function Character(props) {
  const character = use(fetchCharacter(props.id));
  console.log(character);
  return <div>SW Character: {character.name}</div>;
}

function UseHookReact19() {
  return (
    <div>
      <h2>use Hook</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Character id="4" />
      </Suspense>
    </div>
  );
}
export default UseHookReact19;
