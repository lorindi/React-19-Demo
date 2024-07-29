import { useState, useEffect } from "react";

// Utility function to simulate network delay
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to fetch character data
async function fetchCharacter(id) {
  await wait(200); // Simulate network delay
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

function Character({ id }) {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchCharacter(id);
        setCharacter(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [id]); // Add id as a dependency

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return <div>SW Character: {character.name}</div>;
}

function UseHookPrevVersion() {
  return (
    <div>
      <h2>use Hook</h2>
      <Character id="4" />
    </div>
  );
}

export default UseHookPrevVersion;
