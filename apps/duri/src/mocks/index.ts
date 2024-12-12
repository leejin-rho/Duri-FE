export async function enableMocking() {
  console.log(import.meta.env.VITE_MSW_ENABLED);
  if (import.meta.env.VITE_MSW_ENABLED === 'true') {
    const { worker } = await import('./browser');
    return await worker.start({
      onUnhandledRequest: 'bypass',
    });
  } else {
    console.log('MSW is disabled');
  }
}
