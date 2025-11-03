export function extractErrorMessage(err: unknown, defaultMessage: string): string {
  if (typeof err === 'object' && err !== null) {
    const error = err as { data?: { error?: string }; status?: number };

    if (error.data?.error) {
      return error.data.error;
    }

    if (error.status) {
      return `Error ${error.status}: ${defaultMessage}`;
    }
  }

  return defaultMessage;
}
