import { useNavigate } from 'react-router-dom';

interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback = ({ resetErrorBoundary }: IErrorFallbackProps) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>There was an error!</h1>
      <div>
        <button type="button" onClick={() => resetErrorBoundary()}>
          Try again
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/', { replace: true });
            window.location.reload();
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
