// BreadCrumbs is a type of secondary Navigation Scheme that reveals user location in a website

import { NavigateNext } from "@mui/icons-material"
import { Box, Breadcrumbs, Link, Typography } from "@mui/material"




const MuiBreadCrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label='breadCrumb'
                separator={<NavigateNext fontSize="small" />}
                maxItems={2}
                itemsBeforeCollapse={2}
            >
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MuiBreadCrumbs