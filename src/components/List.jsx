import Card from "./Card";

export default function List(props) {
  const { todos } = props;

  return (
    <>
      <ul className="listItem">
        {todos.map((todo, todoIndex) => {
          return (
            <Card {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </Card>
          );
        })}
      </ul>
    </>
  );
}
