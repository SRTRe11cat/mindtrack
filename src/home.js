const Home = () => {
  return (
    <div style={styles.container}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>MindTrack</h1>
        <p style={styles.subtitle}>
          Track your mood. Build better habits. Improve your well-being.
        </p>

        <div>
          <button style={styles.primaryBtn}>Login</button>
          <button style={styles.secondaryBtn}>Sign Up</button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3> Mood Tracking</h3>
          <p>Log your daily emotions and reflect on your experiences.</p>
        </div>

        <div style={styles.card}>
          <h3>Habit Tracking</h3>
          <p>Build consistent routines and track your progress.</p>
        </div>

        <div style={styles.card}>
          <h3> Insights</h3>
          <p>Visualize trends with simple charts and summaries.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Start improving your daily routine today</h2>
        <button style={styles.primaryBtn}>Get Started</button>
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },

  hero: {
    padding: "100px 20px",
    background: "linear-gradient(to right, #4CAF50, #81C784)",
    color: "white",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  primaryBtn: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#2E7D32",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "white",
    color: "#2E7D32",
    border: "1px solid #2E7D32",
    cursor: "pointer",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "50px 20px",
  },

  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },

  cta: {
    padding: "50px 20px",
    backgroundColor: "#f4f4f4",
  },
};

export default Home;