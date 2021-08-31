import { useRouter } from "next/router";

export default function Article(props) {
  const router = useRouter();
  if (router.isFallback) return "Loading...";
  return (
    <>
      <h1>Article</h1>
    </>
  );
}
