import Navbar from "../components/navbar";
export default function CreatePost() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Create a Post</h1>
        <div className="line"></div>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
          <label htmlFor="content">Content</label>
          <textarea id="content" placeholder="Please enter text"></textarea>
          <button type="submit">Create Post</button>
        </form>
      </main>
    </>
  );
}
