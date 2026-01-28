import { IconCloud } from "./ui/icon-cloud"

const slugs = [
  "python",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "tailwindcss",
  "html5",
  "css3",
  "flask",
  "reactnative",
  "git",
  "github",
  "vscode",
  "microsoftoffice",
  "openai",
  "gemini",
  "groq",
  "llama",
  "codeskulptor",
  "plotly",
  "pytorch",
  "claude",
  "css",
  "latex",
  "sql",
  "figma",
  "adobeillustrator",
]

export function OrbitTechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden" style={{ marginLeft: "40%" }}>
      <IconCloud images={images} />
    </div>
  )
}
