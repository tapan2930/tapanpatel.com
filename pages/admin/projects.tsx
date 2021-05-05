import AdminWrapper from '@components/Admin/AdminWrapper'
import React from 'react'
import nookies from "nookies"

const Projects :React.FC = ():React.ReactElement => {
    return (
         <AdminWrapper>
                Project
         </AdminWrapper>
    )
}

export async function getServerSideProps(context:any) {
    try {
        const cookies = nookies.get(context)

    }
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default Projects