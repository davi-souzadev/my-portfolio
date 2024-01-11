export function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="max-w-3xl mx-auto px-4">
      <span className="text-muted-foreground decoration-slice cursor-pointer">
        &copy; {year}{" "}
        <a
          className="underline"
          href="https://github.com/davi-souzadev"
          target="blank"
        >
          Davi Souza
        </a>
      </span>
    </div>
  )
}
