import { useEffect, useState } from "react";
import type { bookmarkType } from "../types/bookmark";
import { getAllBookmarks  } from "../api/bookmarks";

export default function Dashboard() {
    const [bookmarks, setBookmarks] = useState<bookmarkType[]>([]);
    const [loading, setLoading] = useState(true);

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
    )
}