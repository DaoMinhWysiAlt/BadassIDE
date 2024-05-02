// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
// import "./App.css";
// import { Button } from "@/components/ui/button";
// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           greet();
//         }}
//       >
//         <input
//           id="greet-input"
//           onChange={(e) => setName(e.currentTarget.value)}
//           placeholder="Enter a name..."
//         />
//         <Button type="submit">Greet</Button>
//       </form>

//       <p>{greetMsg}</p>
//     </div>
//   );
// }

import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";
import { ChevronRightIcon } from 'lucide-react';

import "@fontsource/jetbrains-mono"
import Edtior from "./components/CodeEditor";

export default function Component() {

  
  return (
    

    <ResizablePanelGroup direction="horizontal" className="flex h-screen">
      {/* Resizable panel for sidebar file explorer */}
      <ResizablePanel defaultSize={15}>
        <div className="w-64 pt-2 bg-background">
          <nav>
            <ul className="space-y-2">
              <li>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center">
                      <ChevronRightIcon className="h-4 w-4" />
                      <span>Downloads</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-7 my-1 space-y-2">
                    <a className="flex items-center transition-colors" href="#">
                      file1.pdf
                    </a>
                    <a className="flex items-center transition-colors" href="#">
                      file2.docx
                    </a>
                    <a className="flex items-center transition-colors" href="#">
                      file3.jpg
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="pl-4">
                <a className="flex items-center transition-colors" href="#">
                  Pictures
                </a>
              </li>
              <li className="pl-4">
                <a className="flex items-center transition-colors" href="#">
                  Music
                </a>
              </li>
              <li className="pl-4">
                <a className="flex items-center transition-colors" href="#">
                  Videos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </ResizablePanel >
      <ResizableHandle />
      {/* Resizable panel for code editor */}
      <ResizablePanel defaultSize={85} className="flex flex-col w-full ">
          {/* Top bar with buttons */}
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center divide-x">
              <a href="#" className="px-2 rounded-none text-sm font-medium text-white border-l-2 border-blue-400 ml-1">index.html</a>
              <a href="#" className="px-2 rounded-none text-sm font-medium text-gray-300 hover:text-white">app.js</a>
              <a href="#" className="px-2 rounded-none text-sm font-medium text-gray-300 hover:text-white">styles.css</a>
            </div>
            <div className="flex items-center space-x-3 mr-3">
              {/* <Button variant={'ghost'} className="py-0 px-2">
                <Plus className="h-4 w-4"/>
              </Button>
              <Button variant={'ghost'} className="py-0 px-2">
                <Play className="h-4 w-4"/>
              </Button> */}
            </div>
          </div>
          {/* Resizable code editor */}
          <div className="flex-grow flex">
            <ResizablePanelGroup direction="horizontal" className="border-t">
              {/* Code editor panel */}
              <ResizablePanel defaultSize={80}  >
                <Edtior/>

              </ResizablePanel>
              <ResizableHandle />
              {/* Resizable panel for other content */}
              <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                  {/* Panel content */}
                  <ResizablePanel defaultSize={50}>
                    <textarea className="h-full w-full bg-background resize-none text-xl p-5" />
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <textarea className="h-full w-full bg-background resize-none text-xl p-5" />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}


