import React, {useState, useRef, useEffect} from 'react';
import { 
  Container, Box, Flex, Text, 
} from '@chakra-ui/react' 
import axios from 'axios'
import MyPagination from './components/MyPagination'
import RenderData from './components/RenderData'


function App() { 
  const [data, setData] = useState([]) 
  const [limit, setLimit] = useState(4) 
  const [page, setPage] = useState(0) 
  const [total, setTotal] = useState(100) 

  const fetchData = () => { 
    // console.log({page, limit}); 
    axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${limit}`) 
    .then(res => { 
      setData(res.data) 
    }) 
    .catch(err => console.log(err)) 
  } 

  const setNewPage = (data) => { 
    setPage(data.selected*limit) 
  } 

  useEffect(() => {
    fetchData() 
  }, [page]) 

  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${limit}`) 
    .then(res => { 
      setData(res.data) 
    }) 
    .catch(err => console.log(err))
  }, []) 

  return ( 
    <> 
      <Container maxW="1100px" borderWidth="1px" rounded="lg" p={5} my={4} >
        <Box m={8}> 
          <RenderData data={data} /> 

          <MyPagination 
            limit={limit} 
            page={page} 
            total={total} 
            setNewPage={setNewPage} 
          /> 
        </Box> 
      </Container>
    </> 
  ) 
} 

export default App; 
