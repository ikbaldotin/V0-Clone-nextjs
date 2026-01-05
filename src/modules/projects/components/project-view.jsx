"use client";

import React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

import ProjectHeader from "./project-header";

const ProjectView = ({ projectId }) => {
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel
          defaultSize={35}
          minSize={20}
          className="flex flex-col min-h-0"
        >
          <ProjectHeader projectId={projectId} />
        </ResizablePanel>

        {/* 👇 MUST be here */}
        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={65} minSize={50}>
          {/* Right panel content */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ProjectView;
