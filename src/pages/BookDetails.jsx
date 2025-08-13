import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();

  // Ensure ID comparison works even if stored as number
  const book = useSelector(state =>
    state.books.find(b => String(b.id) === String(id))
  );

  if (!book) {
    return <p style={{ padding: '20px' }}>Book not found</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating} / 5</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
}
