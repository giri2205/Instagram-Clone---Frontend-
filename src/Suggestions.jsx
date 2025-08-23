export default function Suggestions() {
  const suggestions = [
    {
      id: 1,
      username: "alex_23",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      id: 2,
      username: "emily_rose",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 3,
      username: "chris_dev",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg"
    }
  ];

  return (
    <div>
      <h3>Suggestions for you</h3>
      {suggestions.map((s) => (
        <div
          key={s.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          <img
            src={s.profilePic}
            alt={s.username}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px"
            }}
          />
          <p>{s.username}</p>
        </div>
      ))}
    </div>
  );
}