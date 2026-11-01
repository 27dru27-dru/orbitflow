export const supabase = {
  auth: {
    signInWithPassword: async () => ({ data: { user: { email: 'dru@orbitflow.app' } }, error: null }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: { email: 'dru@orbitflow.app' } }, error: null }),
  },
};
