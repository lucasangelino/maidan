import Card from "../../ui/cards";
const recomendations = [
  {
    title: "Recom1",
  },
  {
    title: "Recom2",
  },
  {
    title: "Recom2",
  },
];
export default function Sidebar() {
  return (
    <>
      <div>
        <h4>Recomendaciones</h4>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recomendations.map((recom, index) => (
          <Card key={index} title />
        ))}
      </div>
    </>
  );
}
