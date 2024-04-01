interface devDataType {
  question: string;
  code: string[];
}

export const devData: devDataType[] = [
  {
    question: "1. Upload a file to bzzhr",
    code: [
      `curl --progress-bar -o - \\`,
      `-T "sample.mp4" \\`,
      `"https://ul.bzzhr.co/sample.mp4" | cat`,
    ],
  },
  {
    question: "2. Upload a file to bzzhr my files",
    code: [
      `curl --progress-bar -o - \\`,
      `-H "Authorization: Bearer YOUR_API_KEY" \\`,
      `-T "sample.mp4" \\`,
      `"https://ul.bzzhr.co/sample.mp4" | cat`,
    ],
  },
  {
    question: "3. Upload a file to folder",
    code: [
      `curl --progress-bar -o - \\`,
      `-H "Authorization: Bearer YOUR_API_KEY" \\`,
      `-T "sample.mp4" \\`,
      `"https://ul.bzzhr.co/sample.mp4?folderId=YOUR_FOLDER_ID" | cat`,
    ],
  },
];
