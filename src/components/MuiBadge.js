import { Mail } from "@mui/icons-material"
import { Badge, Stack } from "@mui/material"

const MuiBadge = () => {
    return (
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color={'primary'}>
                <Mail />
            </Badge>
            <Badge badgeContent={5} color={'secondary'}>
                <Mail />
            </Badge>
            <Badge badgeContent={0} color={'primary'}>
                <Mail />
            </Badge>
            <Badge showZero badgeContent={0} color={'secondary'}>
                <Mail />
            </Badge>
            <Badge badgeContent={100} color={'primary'}>
                <Mail />
            </Badge>
            <Badge badgeContent={100} max={999} color={'primary'}>
                <Mail />
            </Badge>
            <Badge variant="dot" color={'primary'}>
                <Mail />
            </Badge>
            <Badge badgeContent={40} color={'primary'} invisible={true}>
                <Mail />
            </Badge>
        </Stack>
    )
}

export default MuiBadge