import Link from "next/link"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column" ,gap: "16px", listStyle: "none", background: "blue", color: "black" }}>
        <li><Link href={"/"}>Top</Link></li>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
      </ul>
        {children}
    </div>
  )
}
