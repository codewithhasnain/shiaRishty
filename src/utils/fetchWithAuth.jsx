const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const baseUrl = import.meta.env.VITE_API_BASE_URL; // Vite environment variable

  // Debugging: Check the base URL and endpoint before concatenation
  console.log('Base URL:', baseUrl);
  console.log('Endpoint:', endpoint);

  // Remove any trailing slash from baseUrl to avoid duplication
  const formattedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  // If endpoint already includes 'http://' or 'https://', don't prepend the baseUrl
  const url = endpoint.startsWith('http://') || endpoint.startsWith('https://')
    ? endpoint
    : `${formattedBaseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  // Debugging: Log the final URL
  console.log('Final URL:', url);

  if (!options.headers) {
    options.headers = {};
  }

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  } else {
    console.log('No token found');
  }

  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchWithAuth;
