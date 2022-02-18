import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import * as Mui from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AdvancedSearch from './AdvancedSearch'
import Box from '@mui/material/Box';
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


function Search({onSearch, onAdvSearch, onToggleSearch, onToggleAdvSearch, landingPage, onNavbar, open, setOpen, handleClose, handleOpen, toggleSwitch}) {
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
    <div className={landingPage ? "display-search" : "display-none-search"} style={{paddingTop: "60px"}}>
      <Mui.Typography align="center" style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}>
      <form id="form-container" onSubmit={handleSubmit}>
        <Mui.Typography variant="h6">Search for recipes ( ˘▽˘)っ♨</Mui.Typography>
        <Mui.TextField variant="outlined" style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}} id="filled-basic" label="Search" value={search}  onChange={e => setSearch(e.target.value)}/>
        <Mui.Tooltip title="Advanced search"><SettingsIcon onClick={handleOpen}/></Mui.Tooltip>
        <Mui.Fab type="submit" style={{background: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}} onClick={onToggleSearch} size="small">
          <SearchIcon style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}/>
        </Mui.Fab>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style} style={{background: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}}>
          <AdvancedSearch onAdvSearch={onAdvSearch} search={search} onToggleAdvSearch={onToggleAdvSearch} onClose={handleClose} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} toggleSwitch={toggleSwitch}/>
        </Box>
      </Modal>
      </Mui.Typography>        
    </div>
  )
}

export default Search