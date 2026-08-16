export interface Project {
  name: string;
  description: string;
  keypoints: string[];
}

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description:
      "A high-performance task runner that orchestrates distributed jobs with a focus on reliability.",
    keypoints: ["Fault-tolerant job queue", "gRPC microservices", "99.9% uptime"],
  },
  {
    name: "Project Beta",
    description:
      "A developer tool for visualizing and debugging API request flows in real time.",
    keypoints: ["Streaming logs", "WebSocket transport", "Plugin system"],
  },
  {
    name: "Project Gamma",
    description:
      "An open-source CLI that automates infrastructure provisioning across cloud providers.",
    keypoints: ["Declarative config", "Idempotent runs", "Multi-cloud"],
  },
  {
    name: "Project Delta",
    description:
      "A full-stack web app for managing inventory with barcode scanning and reporting.",
    keypoints: ["React + TypeScript", "PostgreSQL", "Role-based access"],
  },
  {
    name: "Project Epsilon",
    description:
      "A lightweight metrics aggregator designed for edge devices with constrained resources.",
    keypoints: ["Sub-1MB footprint", "Time-series storage", "Dashboards"],
  },
  {
    name: "Project Zeta",
    description:
      "A static analysis tool that flags code smells and suggests refactors on pull requests.",
    keypoints: ["AST parsing", "CI integration", "Custom rules"],
  },
];
