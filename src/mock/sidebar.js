import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  Cog8ToothIcon,
  DocumentIcon,
  FolderOpenIcon,
  GlobeAltIcon,
  InboxIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const mainLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: GlobeAltIcon,
  },
  {
    title: "Discover",
    url: "/discover",
    icon: GlobeAltIcon,
  },
  {
    title: "Users",
    url: "/users",
    icon: UsersIcon,
  },
  {
    title: "Documents",
    url: "/docs",
    icon: BookOpenIcon,
  },
  {
    title: "Applications",
    url: "/apps",
    icon: Squares2X2Icon,
  },
  {
    title: "Pages",
    url: "/pages",
    icon: DocumentIcon,
  },
];

export const secondaryLinks = [
  {
    title: "Support Center",
    url: "/support",
    icon: QuestionMarkCircleIcon,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: InboxIcon,
  },
  {
    title: "File Manager",
    url: "/files",
    icon: FolderOpenIcon,
  },
  {
    title: "Data List",
    url: "/data",
    icon: ListBulletIcon,
  },
];

export const utilLinks = [
  {
    title: "Settings",
    url: "/settings",
    icon: Cog8ToothIcon,
  },
  {
    title: "Log Out",
    url: "/auth/login",
    icon: ArrowTopRightOnSquareIcon,
  },
];
