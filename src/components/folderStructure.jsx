import Folder from "./folder"

const structure = [
  { name: "public", isFolder: true, children: [{ name: "vite.svg", isFolder: false }] },
  {
    name: "src", isFolder: true, children: [
      { name: "assets", isFolder: true, children: [{ name: "react.svg", isFolder: false }] },
      {
        name: "pages", isFolder: true, children: [
          { name: "folderDirectory.jsx", isFolder: false },
          { name: "home.jsx", isFolder: false },
          { name: "practice.jsx", isFolder: false },
        ]
      },
      {
        name: 'components', isFolder: true, children: [
          { name: 'button.jsx', isFolder: false },
          { name: 'title.jsx', isFolder: false },
          { name: 'tag.jsx', isFolder: false },
        ]
      }
    ]
  },
  { name: "package.json", isFolder: false }
]

function FolderStructure() {
  return (
    <div className="text-left w-full absolute top-10 left-10">
      {structure.map(section => <Folder section={section} level={0} />)}
    </div>
  )
}

export default FolderStructure
