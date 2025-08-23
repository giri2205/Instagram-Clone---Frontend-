export default function Stories({ stories = [] }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {stories.length > 0 ? (
        stories.map((s) => (
          <div key={s.id} style={{ textAlign: "center" }}>
            <img
              src={s.profilePic}
              alt={s.username}
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <p style={{ fontSize: "12px" }}>{s.username}</p>
          </div>
        ))
      ) : (
        <p>Loading Stories...</p>
      )}
    </div>
  );
}