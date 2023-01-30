import React,{useState} from 'react';
import {Alert} from "@material-tailwind/react";

const Notification = ({show,color,setShow,msg}) => {

    
  return (
    <div className="absolute w-21 inset-y-30 right-1 ">
        
            <Alert
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              color={color}
              show={show}
              animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
              dismissible={{
                onClose: () => setShow(false),
              }}
            >
              {msg}
            </Alert>
        
      </div>
  )
}

export default Notification