import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();

  const book = useSelector(state =>
    state.books.find(b => String(b.id) === String(id))
  );

  if (!book) {
    return <p className="book-not-found">Book not found</p>;
  }

  return (
    <div className="book-details-container">
      <h1 className="book-title">{book.title}</h1>
      <p className="book-meta"><strong>Author:</strong> {book.author}</p>
      <p className="book-meta"><strong>Category:</strong> {book.category}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-meta"><strong>Rating:</strong> {book.rating} / 5</p>

      <Link to="/books" className="back-button">← Back to Browse</Link>
    </div>
  );
}
