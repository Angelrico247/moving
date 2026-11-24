// Aviso fijo al pie: deja claro que el sitio es una maqueta de portafolio y no un negocio real.
export default function DemoNotice() {
  return (
    <p
      role="note"
      style={{
        margin: 0,
        padding: "14px 20px",
        background: "#0b0b0b",
        color: "rgba(255,255,255,0.85)",
        fontSize: "12px",
        lineHeight: 1.6,
        textAlign: "center",
        letterSpacing: "0.01em",
      }}
    >
      Sitio de demostración · Proyecto concepto de{" "}
      <a
        href="https://twoworldsindesign.com"
        style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}
      >
        TWID
      </a>
      . Los textos, cifras y datos de contacto son ficticios.
    </p>
  );
}
