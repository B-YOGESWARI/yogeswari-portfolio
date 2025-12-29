export default function Footer() {
  return (
    <footer style={{
      padding: "30px",
      textAlign: "center",
      color: "#94a3b8",
      fontSize: "0.9rem"
    }}>
      © {new Date().getFullYear()} BOREDDI YOGESWARI · All Rights Reserved
    </footer>
  );
}