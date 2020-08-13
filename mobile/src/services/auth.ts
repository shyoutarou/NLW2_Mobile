interface Response {
  token: string;
  user: {
    name: string,
    email: string,
  };
}

export function signIn() : Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTk3MTkzOTQyfQ.1aIJgfN2Z1QcOQQGWTQ-Pp4V_D4hnmmuYHaeasCG-QA',
          user: {
            name: "Jo",
            email: "jo@gmail.com",
          },
        });
      }, 2000);
    });
  }