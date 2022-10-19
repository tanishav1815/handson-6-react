import React,{useState} from 'react'
import {Button,TextField,Box} from '@mui/material';

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
const Student = () => {
  const [store, setStore] = useState(studentDetails);
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);
  const changeHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))    
    }   
const addData = () =>{
  if(edit){
    const updatedDataList = dataList.map((row)=>row.id === store.id ? store : row );
    setDataList(updatedDataList);
    setEdit(false);
    setStore(studentDetails);
    setHide(!hide);
  }
  else{
  let listItems = dataList;
  const item = {
    id:dataList.length,
    ...store
  }
  listItems = [...dataList,item];  
  setDataList(listItems);
  clearData();
  setHide(!hide);
}
}
const clearData = () =>{
  setStore(studentDetails);
}
const deleteRow = (id) =>{
const filtered = dataList.filter(item=>item.id !== id);
console.log(filtered);
setDataList(filtered);
}
const editRow = (row) =>{
  setStore(row);
  setEdit(true);
  setHide(!hide);
}
  return (
    <>
    {hide ? null : <> <div className='studentDetails'>
      <h1>Students Details</h1>
      <Button variant="contained" onClick={()=>{setHide(!hide)}}  style={{color:'white'}} className="btn-add" >Add Student</Button>
    </div>
    <Box>
    <table className='table'> 
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
      </tr>
      {dataList && dataList.map((row,i)=>
        <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.course}</td>
        <td>{row.batch}</td>
        <td>
       
        <button onClick={()=>{editRow(row)}} className="edit">
            edit
        </button>
        <button onClick={()=>{deleteRow(row.id)}} className="del">
            delete
        </button>
        </td>
      </tr>
      )}
    </table>
    </Box></>}
    {hide ? <Box >
    <Box className='grid'>
      <h1> Add Student </h1>
      <br />
      <label>Name : </label>
      <TextField name='name' value={store.name} onChange={changeHandler} label='Name'color='secondary'className='field'/>
      <br /><br />
      <label>Age : </label>
      <TextField name='age' type="number" value={store.age} onChange={changeHandler} label='Age'color='secondary' className='field'/>
      <br /><br />
      <label >Course :</label>
      <TextField name='course' value={store.course} onChange={changeHandler} label='Course'color='secondary' className='field'/>
      <br /><br />
      <label>Batch :</label>
      <TextField name='batch' value={store.batch} onChange={changeHandler} label='Batch'color='secondary' className='field'/>
    </Box>
    <Box sx={{mt:-7,ml:70}}>
      <Button sx={{mr:3}}size='large' onClick={addData} color='success' variant='contained'>{edit ? 'Update' : 'submit'}</Button>
      <Button sx={{ml:7}}size='large' onClick={clearData} color='primary' variant='contained'>Cancel</Button>
    </Box>
    </Box>
    : null}
    </>
  )
}

export default Student;