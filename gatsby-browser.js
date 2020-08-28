export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display new content?`
  )

  if (answer === true) {
    window.location.reload()
  }
}