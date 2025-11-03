import { useNavigate } from 'react-router-dom';
import { ErrorDisplay } from '@/components/error-display/error-display';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <ErrorDisplay
      title="Page Not Found"
      status={404}
      message="The page you're looking for doesn't exist."
      showReload={false}
      onGoHome={() => navigate('/users')}
    />
  );
}
