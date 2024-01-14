import { useRouter } from "next/router";
export default {
  logo: <strong>Modern React DeepDive Book Study</strong>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  sidebar: {
    titleComponent({ title }) {
      if (title.includes("week")) {
        return (
          <div
            style={{
              fontSize: "1.2rem",
            }}
          >
            {title}
          </div>
        );
      } else if (title.includes("리액트")) {
        return (
          <div
            style={{
              fontSize: "1.25rem",
            }}
          >
            {title}
          </div>
        );
      } else if (title.includes("발표")) {
        return (
          <div
            style={{
              fontSize: "1.2rem",
            }}
          >
            {title}
          </div>
        );
      }
      return <> {title}</>;
    },
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "React DeepDive",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="리액트 딥다이브 스터디" />
      <meta property="og:description" content="모던 리액트 딥다이브" />
    </>
  ),
};
