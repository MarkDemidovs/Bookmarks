import { useEffect, useState } from "react";
import type { bookmarkType } from "../types/bookmark";
import { getAllBookmarks  } from "../api/bookmarks";

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

    if (loading) return <div>Loading...</div>;

    return (
      <>
      <form>
        <input value={url} placeholder="Enter new URL"></input>
        <input value={title} placeholder="Enter new title"></input>
        <button>Create</button>
      </form>
      <div className="gap-6 flex flex-wrap">
        {bookmarks.map(bookmark => (
          <div>
            <p>
                {bookmark.title}
                {bookmark.url}
            </p>
          </div>
        ))}
      </div>

      </>
    )
}