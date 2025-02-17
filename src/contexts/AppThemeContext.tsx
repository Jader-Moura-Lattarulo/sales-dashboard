import { createContext, useState, useEffect, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles'
import { AppThemeContextProps } from '@/types'

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined
)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [appTheme, setAppTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('appTheme') as 'light' | 'dark') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('appTheme', appTheme)
  }, [appTheme])

  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
      <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider 
