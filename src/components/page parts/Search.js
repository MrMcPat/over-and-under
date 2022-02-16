import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import * as Mui from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AdvancedSearch from './AdvancedSearch'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Search({onSearch, onAdvSearch, onToggleSearch, onToggleAdvSearch, onOverUnder, onBackgroundColor, landingPage, onNavbar, open, setOpen, handleClose, handleOpen}) {
  const [search, setSearch] = useState("")
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
    onNavbar()
    history.push({
      pathname: "/reciperesults",
    })
  }

  

  return (
    <div className={landingPage ? "display-search" : "display-none-search"} style={{display: landingPage ? "" : "none"}}>
      <Mui.Typography align="center">
      <form id="form-container" autoComplete="off" onSubmit={handleSubmit}>
        <Mui.Typography variant="h6">So do you want to go Over or Under?</Mui.Typography>
        <Mui.TextField id="filled-basic" label="Search" variant="standard" value={search}  onChange={e => setSearch(e.target.value)}/>
        <SettingsIcon onClick={handleOpen}/>
        <Mui.Fab type="submit" color="primary" onClick={onToggleSearch} size="small">
          <SearchIcon />
        </Mui.Fab>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Advanced Search</Typography>
          <AdvancedSearch onAdvSearch={onAdvSearch} search={search} onToggleAdvSearch={onToggleAdvSearch} onOverUnder={onOverUnder} onBackgroundColor={onBackgroundColor} onClose={handleClose} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>
        </Box>
      </Modal>
      </Mui.Typography>        
    </div>
  )
}

export default Search