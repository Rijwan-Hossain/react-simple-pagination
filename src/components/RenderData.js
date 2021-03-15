import React from 'react';
import { Container, Box, Text, chakra } from '@chakra-ui/react'



function RenderData({data}) { 
    return ( 
        <> 
            { 
                data?.map((obj, i) => { 
                    return ( 
                        <Box key={i} my={4} p={5} bg="#edf2f9"> 
                            <Text color="teal" fontWeight="600"> 
                                ID: 
                                <chakra.span ml={3}> 
                                    { obj.id } 
                                </chakra.span> 
                            </Text> 

                            <Text> 
                                <chakra.span color="teal" fontWeight="600" mr={3}> 
                                    Title: 
                                </chakra.span> 
                                {obj.title} 
                            </Text> 
                            <Text> 
                                <chakra.span color="teal" fontWeight="600" mr={3}> 
                                    Body: 
                                </chakra.span> 
                                {obj.body} 
                            </Text> 
                        </Box> 
                    ) 
                }) 
            } 
        </> 
    ) 
} 

export default RenderData; 