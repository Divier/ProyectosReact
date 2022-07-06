import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"

export const AppRouter = () => {

    const authStatus = 'authenticated'
  return (
    <Routes>
      {
          //TODO
        (authStatus === 'not-authenticated')
        ? <Route path="/auth/*" element={<LoginPage />}></Route>
        : <Route path="/*" element={<CalendarPage />}></Route>
      }
      <Route path="/*" element={<Navigate to={"/auth/login"}/>}></Route>
    </Routes>
  )
}
