import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(item => {
                        return (
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default MuiTable

const tableData = [
    {
        "id": 1,
        "first_name": "Ilaire",
        "last_name": "Maywood",
        "email": "imaywood0@cbsnews.com",
        "gender": "Male",
        "ip_address": "202.162.117.73"
    }, {
        "id": 2,
        "first_name": "Rayner",
        "last_name": "Forrestill",
        "email": "rforrestill1@imgur.com",
        "gender": "Male",
        "ip_address": "18.81.240.131"
    }, {
        "id": 3,
        "first_name": "Harlan",
        "last_name": "Bambrugh",
        "email": "hbambrugh2@un.org",
        "gender": "Male",
        "ip_address": "116.128.216.80"
    }, {
        "id": 4,
        "first_name": "Odilia",
        "last_name": "Holmyard",
        "email": "oholmyard3@virginia.edu",
        "gender": "Female",
        "ip_address": "238.30.208.52"
    }, {
        "id": 5,
        "first_name": "Ingrid",
        "last_name": "Badgers",
        "email": "ibadgers4@guardian.co.uk",
        "gender": "Female",
        "ip_address": "33.0.149.103"
    }, {
        "id": 6,
        "first_name": "Cleon",
        "last_name": "Burrel",
        "email": "cburrel5@foxnews.com",
        "gender": "Male",
        "ip_address": "153.44.160.114"
    }, {
        "id": 7,
        "first_name": "Bran",
        "last_name": "Fanstone",
        "email": "bfanstone6@gov.uk",
        "gender": "Male",
        "ip_address": "74.126.10.135"
    }, {
        "id": 8,
        "first_name": "Sayer",
        "last_name": "Darwen",
        "email": "sdarwen7@google.com.hk",
        "gender": "Male",
        "ip_address": "68.186.68.140"
    }, {
        "id": 9,
        "first_name": "Carlie",
        "last_name": "Franiak",
        "email": "cfraniak8@e-recht24.de",
        "gender": "Female",
        "ip_address": "15.217.136.58"
    }, {
        "id": 10,
        "first_name": "Winifred",
        "last_name": "Holgan",
        "email": "wholgan9@issuu.com",
        "gender": "Female",
        "ip_address": "56.129.118.37"
    }]