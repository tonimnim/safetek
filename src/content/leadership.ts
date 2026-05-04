export type Member = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  tags: string[];
  linkedin?: string;
};

export const team: Member[] = [
  {
    name: "Samuel Ndegwa",
    title: "Founder & CEO",
    bio: "Founded Safetek in 2018. Leads strategy, partnerships, and the relationships behind every engagement.",
    photo: "https://i.pravatar.cc/600?img=12",
    tags: ["Strategy", "Partnerships"],
    linkedin: "#",
  },
  {
    name: "Millicent",
    title: "Project Manager",
    bio: "Runs delivery across every engagement. Turns client needs into shipped work and keeps the team focused on what's next.",
    photo: "https://i.pravatar.cc/600?img=49",
    tags: ["Delivery", "Process"],
    linkedin: "#",
  },
  {
    name: "Mary Lyne",
    title: "Head of Operations & Design",
    bio: "Owns operations and product design. Where the company's polish — internal and external — comes from.",
    photo: "https://i.pravatar.cc/600?img=26",
    tags: ["Operations", "Design"],
    linkedin: "#",
  },
  {
    name: "Eric",
    title: "Head of Engineering",
    bio: "Leads engineering. Owns architecture and the technical decisions behind every product Safetek ships.",
    photo: "/team/eric.jpg",
    tags: ["Backend", "Architecture"],
    linkedin: "#",
  },
  {
    name: "Anthony Mwangi",
    title: "Software Engineer (Mobile)",
    bio: "Builds mobile apps and contributes across backend and frontend systems. Closest to the device, where most users meet the work.",
    photo: "https://i.pravatar.cc/600?img=51",
    tags: ["Mobile", "Frontend"],
    linkedin: "#",
  },
];
