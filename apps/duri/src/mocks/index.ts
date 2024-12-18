export async function enableMocking() {
  if (import.meta.env.VITE_MSW_ENABLED === 'true') {
    const { worker } = await import('./browser');
    return await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}
