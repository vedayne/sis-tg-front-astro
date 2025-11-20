

export const getToken = (): string | undefined => {
  const token = localStorage.getItem('token')
  return token || undefined
}