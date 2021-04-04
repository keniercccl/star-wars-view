import { ThemeProvider } from '@material-ui/styles';
import Finder from './finder'
import Navbar from './navbar';
import theme from './themes'

const Wrapper = () => {
  return(
    <div>
      <Navbar/>
      <ThemeProvider theme={theme}>
        <Finder />
      </ThemeProvider>

    </div>
  )
}

export default Wrapper;