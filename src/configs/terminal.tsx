import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Muhammad Fatih Yumna. I received my master's degree in Computer Science
              at Boston University and bachelor's degree in Software Engineering at Telkom 
              University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Vision-Language Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm a incoming Ph.D. student lol."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:renovamenzxh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                renovamenzxh@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Renovamen"
                target="_blank"
                rel="noreferrer"
              >
                @Renovamen
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/muhammad-fatih-yumna-lajuwirdi-lirrahman"
                target="_blank"
                rel="noreferrer"
              >
                Muhammad Fatih Yumna
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://fthyll.my.id"
                target="_blank"
                rel="noreferrer"
              >
                https://fthyll.my.id
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
