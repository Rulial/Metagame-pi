import React from 'react';

//add your component here

const Io: React.FC<{ text?: string; color?: string; }> = ({ text = 'Default Text', color = 'black'}) => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        version="1.1"
        viewBox="0 0 30.143 30.143"
        xmlSpace="preserve"
      
      >
        <g fill="#030104">
          <path d="M20.034 2.357v3.824c3.482 1.798 5.869 5.427 5.869 9.619 0 5.98-4.848 10.83-10.828 10.83-5.982 0-10.832-4.85-10.832-10.83 0-3.844 2.012-7.215 5.029-9.136V2.689C4.245 4.918.731 9.945.731 15.801c0 7.921 6.42 14.342 14.34 14.342 7.924 0 14.342-6.421 14.342-14.342-.001-6.177-3.912-11.422-9.379-13.444z"></path>
          </g>

        
          <g stroke="#DA70D6" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M14.795 17.652c1.576 0 1.736-.931 1.736-2.076V2.08c0-1.148-.16-2.08-1.736-2.08-1.57 0-1.732.932-1.732 2.08v13.496c-.001 1.146.162 2.076 1.732 2.076z"></path>
        </g>
        
      </svg>
      <p style={{ marginTop: 10, color, backgroundColor: "#F0F0F0", padding: "2px", borderRadius: "2px"  }}>{text || 'Default Text'}</p> 
      
      </div>
  );
};

export default Io;