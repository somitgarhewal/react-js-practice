
import { useState } from "react";


const structure1 = [
    {
        id: 1,
        title: "root",
        isFile: false,
        children: [
            {
                id: 2,
                title: "src",
                isFile: false,
                children: [
                    {
                        id: 4,
                        title: "app.js",
                        isFile: true,
                    },
                ],
            },
            {
                id: 3,
                title: "package.json",
                isFile: true,
            },
        ],
    },
];

export default function FileExplorer() {
    const [structure, setStructure] = useState(structure1);
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValFile, setInputValFile] = useState("");
    const [inputValFolder, setInputValFolder] = useState("");
    const [editValFile, setEditValFile] = useState({});

    const getStructureNode = (node, obj) => {
        if (node.id === selectedFolder.id) {
            node.children = [...node.children, { ...obj }];
            return;
        } else {
            node.children?.foreach((item) => getStructureNode(item));
        }
    };

    const updateStructureNodeName = (node, obj, type) => {
        if (node.id === selectedFolder.id) {
            node.title = type === "file" ? inputValFile : inputValFolder;
            return;
        } else {
            node.children?.foreach((item) => getStructureNode(item));
        }
    };

    const handleCreateNew = (type) => {
        let tempStructure = { ...structure };
        let temp = { ...selectedFolder };
        const obj = {
            id: selectedFolder.title + (selectedFolder.children?.length || 1),
            title: type === "file" ? inputValFile : inputValFolder,
            isFile: type === "file",
            children: [],
        };
        temp.children.push(obj);
        setSelectedFolder(temp);
        getStructureNode(tempStructure, obj);
        setStructure(tempStructure);
    };

    return (
        <div className="App">
            {selectedFolder !== null && (
                <div className="grid gap-3">
                    <div className="flex gap-4">
                        <input
                            className="bg-white text-black"
                            type="text"
                            value={inputValFile}
                            onChange={(e) => setInputValFile(e.target.value)}
                        />
                        <button onClick={() => handleCreateNew("file")}>
                            Create New File
                        </button>
                    </div>
                    <div className="flex gap-4">
                        <input
                            className="bg-white text-black"
                            type="text"
                            value={inputValFolder}
                            onChange={(e) => setInputValFolder(e.target.value)}
                        />
                        <button onClick={() => handleCreateNew("folder")}>
                            Create New Folder
                        </button>
                    </div>
                </div>
            )}
            {selectedFolder === null ? (
                structure.map((node) => (
                    <RenderComp
                        node={node}
                        setSelectedFolder={setSelectedFolder}
                        editValFile={editValFile}
                        setEditValFile={setEditValFile}
                    />
                ))
            ) : selectedFolder.children?.length ? (
                selectedFolder.children?.map((node) => (
                    <RenderComp
                        node={node}
                        setSelectedFolder={setSelectedFolder}
                        editValFile={editValFile}
                        setEditValFile={setEditValFile}
                    />
                ))
            ) : (
                <div>no files</div>
            )}
        </div>
    );
}

function RenderComp({ node, setSelectedFolder, editValFile, setEditValFile }) {
    return (
        <div
            onClick={() => {
                if (node.isFile) return;
                setSelectedFolder(node);
            }}
        >
            {!node.isFile && <span>F : </span>}
            {node.title}
        </div>
    );
}
