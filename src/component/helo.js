export function Hello({ name }) {
  function clickme() {
    console.log("Hello ", name);
  }

  return (
    <div>
      <h1
        onClick={() => {
          clickme();
        }}
      >
        Hello {name}
      </h1>
    </div>
  );
}
