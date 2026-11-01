export async function createSupabaseServerClient() {
  return {
    auth: {
      getUser: async () => ({
        data: { user: { email: 'dru@orbitflow.app' } },
        error: null,
      }),
      signOut: async () => ({ error: null }),
    },
  };
}
