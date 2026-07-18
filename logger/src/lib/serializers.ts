export const serializers = {
  error(error: unknown) {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    }

    return {
      error,
    };
  },

  user(user: {
    id?: string;
    email?: string;
  }) {
    return {
      id: user.id,
      email: user.email,
    };
  },

  request(request: {
    method?: string;
    url?: string;
  }) {
    return {
      method: request.method,
      url: request.url,
    };
  },
};