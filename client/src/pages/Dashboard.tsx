import { useEffect, useState } from "react";
import type { bookmarkType } from "../types/bookmark";
import { getAllBookmarks, createBookmark } from "../api/bookmarks";

export default function Dashboard() {
  const [bookmarks, setBookmarks] = useState<bookmarkType[]>([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllBookmarks();
        setBookmarks(data);
      } catch (err) {

      } finally {
        setLoading(false);
      }
    }

    load();
  }, [])


  async function createBookmarkFunction(url: string, title: string) {
    try {
      const data = await createBookmark(url, title);
      setBookmarks(prev => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  }
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <form>
        <input value={url} placeholder="Enter new URL" onChange={e => setUrl(e.target.value)}></input>
        <input value={title} placeholder="Enter new title" onChange={e => setTitle(e.target.value)}></input>
        <button onClick={() => createBookmarkFunction(url, title)}>Create</button>
      </form>
      <div className="gap-6 flex flex-wrap flex-col">
        {bookmarks.map(bookmark => (
          <div>
            <p>
              <a href={bookmark.url}>{bookmark.title}</a>
              <button>DELETE THIS!!</button>
            </p>
          </div>
        ))}
      </div>

    </>
  )
}